import { getActors, getGenres, getShows } from "./database.js";



//call the functions for the arrays and store in variables
const actors = getActors()
console.log(actors)

const genres = getGenres()
console.log(genres)

const shows = getShows()
console.log(shows)