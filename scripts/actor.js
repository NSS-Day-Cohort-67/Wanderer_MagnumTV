import { getActors } from "./database.js"



const actors = getActors()

export const actorsList = () => {

    let actorHTML = "<ul>"

    for(const actor of actors){

        actorHTML+= `<li>${actor.name}</li>`
    }

    actorHTML += "</ul>"
    return actorHTML

}