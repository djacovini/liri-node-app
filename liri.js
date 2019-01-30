require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require('moment');
moment().format();
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);


var command = process.argv[2];
var input = process.argv.slice(3).join("+");
var divider = "\n------------------------------------------------------------\n\n";


switch(command) {
  case `concert-this`:
    concertInfo(input);
    break;
  case `spotify-this-song`:
    if (input === "") {
      input = "the+sign";
    }
    songInfo(input);
    break;
  case `movie-this`:
    if (input === "") {
    input = "mr+nobody";
    }
    movieInfo(input);
    break;
  case `do-what-it-says`:
    whatever();
    break;
}


function concertInfo(input){
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
  function(response) {
    console.log(input + " Upcoming Shows");
    for (var i = 0; i<response.data.length; i++){
    console.log("--------------------------");
    console.log("Venue Name: " + response.data[i].venue.name);
    console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
    console.log("Date: "+ moment((response.data[i].datetime), "YYYY-MM-DDTHH:mm:ss").format("MM/DD/YYYY"));
    }
  })
}

function songInfo(input){
  spotify.search({ type: 'track', query: input }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log("Song Matches for " + input);
    for (var i = 0; i < data.tracks.items.length; i++){
      console.log("--------------------------");
      console.log("Artist: " + data.tracks.items[i].artists[0].name);
      console.log("Track Title: " + data.tracks.items[i].name);
      console.log("Preview Link: " + data.tracks.items[i].preview_url);
      console.log("Album Name: " + data.tracks.items[i].album.name);
    }
  })  
}

function movieInfo(input){
  axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    }
  )
}

function whatever(){
fs.readFile("random.txt", "utf8", function(error, commandInput) {
  if (error) {
    return console.log(error);
  };
  console.log(commandInput);
  var commandInputArr = commandInput.split(",");
  console.log(commandInputArr);
  command = commandInputArr[0];
  input = commandInputArr[1];
  switch(command) {
    case `concert-this`:
      concertInfo(input);
      break;
    case `spotify-this-song`:
      songInfo(input);
      break;
    case `movie-this`:
      movieInfo(input);
      break;
  }
});
}