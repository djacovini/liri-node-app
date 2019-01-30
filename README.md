# liri-node-app
LIRI Assignment


### Overview
Welcome to Liri.js, a command-line interface (CLI) Node application offering one-stop access for all your entertainment information needs, such as:
  -Upcoming concert dates for a band/artist
  -Album and artist information for a song title
  -Summary information for a movie title


### How To Use
To search for upcoming concert venues and dates enter:
"node liri.js concert-this" + (band/artist name)

To search for information about a song enter:
"node liri.js spotify-this-song" + (song title)
(if no song title is provided, "The Sign" will be searched)

To search for information about a movie enter:
"node liri.js movie-this" + (movie title)
(if no song title is provided, "Mr. Nobody" will be searched)

To search based on a command written in the random.txt file enter:
"node liri.js do-what-it-says"


### Requirements
Liri.js requires the user to install the following node packages:

  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  * [Axios](https://www.npmjs.com/package/axios)
  * [Moment](https://www.npmjs.com/package/moment)
  * [DotEnv](https://www.npmjs.com/package/dotenv)

Additionaly the Spotify API requires users a **client id** and **client secret**.  These can be attained at <https://developer.spotify.com/my-applications/#!/>.


## Built With
  * [BandsinTown-API](http://www.artists.bandsintown.com/bandsintown-api/?locale=en)
  * [OMDB-API](http://www.omdbapi.com/)
  * [Spotify-API](https://developer.spotify.com/documentation/web-api/)
  * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)
  * [Axios](https://www.npmjs.com/package/axios)
  * [Moment](https://www.npmjs.com/package/moment)
  * [DotEnv](https://www.npmjs.com/package/dotenv)


## Author
* David Jacovini
