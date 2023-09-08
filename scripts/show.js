import { getShows } from "./database.js"



const shows = getShows()

export const showsList = () => {

    let showHTML = "<ul>"

    for(const show of shows){

        showHTML+= `<li>${show.name}</li>`
    }

    showHTML += "</ul>"
    return showHTML

}