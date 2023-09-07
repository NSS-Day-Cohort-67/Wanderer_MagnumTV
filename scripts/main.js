import { genreList } from "./genre.js";
import { actorsList } from "./actor.js";




//create functions to generate HTML

const render = () => {

    const mainContainer = document.querySelector("#container")

    const layoutHTML = `
<h1> Magnum Tv </h1>
<article class="actors"><h2>List of Actors</h2>${actorsList()}</article>
<article class="genres"><h2>List of Genres</h2>${genreList()}</article>
<article class="shows"><h2>List of Shows</h2></article>
 `


    mainContainer.innerHTML = layoutHTML
}


render()
