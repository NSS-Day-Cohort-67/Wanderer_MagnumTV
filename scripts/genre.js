import { getGenres } from "./database.js"



const genres = getGenres()

export const genreList = () => {

    let genreHTML = "<ul>"

    for(const genre of genres){

        genreHTML+= `<li>${genre.type}</li>`
    }

    genreHTML += "</ul>"

    return genreHTML

}