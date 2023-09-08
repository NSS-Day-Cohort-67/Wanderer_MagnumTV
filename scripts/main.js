import { genreList } from "./genre.js";
import { actorsList } from "./actor.js";
import { showsList } from "./show.js";



//create functions to generate HTML

const render = () => {

    const mainContainer = document.querySelector(".container")

    const layoutHTML = `
<h1> Magnum Tv </h1>

<article class = "details">

<section class="columns"><h2>List of Actors</h2>${actorsList()}</section>
<section class="columns"><h2>List of Genres</h2>${genreList()}</section>

</article>

<article class="showDetails"
<h2>List of Shows</h2>
${showsList()}
</article>
`


    mainContainer.innerHTML = layoutHTML
}


render()
