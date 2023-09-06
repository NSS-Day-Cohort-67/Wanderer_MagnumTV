const database = {
    actors:[
        {id: 1, name: "Tom Cruise"},
        {id: 2, name: "Donald Pleasence"},
        {id: 3, name: "Harrison Ford"},
        {id: 4, name: "Robert Englund"},
        {id: 5, name: "Divine"}
    ],  
    genres:[
        {id: 1, type: "Sci-fi "},
        {id: 2, type: "Horror"},
        {id: 3, type: "Action"},
        {id:4 , type: "Film Noir"},
        {id: 5, type: "Comedy"}
    ],
    shows:[
        {id: 1, name: "Halloween", actorId: 2, genreId: 2},
        {id: 2, name: "A Nightmare on Elm Street", actorId: 4, genreId: 2},
        {id: 3, name: "Chuck", actorId: 3, genreId: 5},
        {id: 4, name: "Three's Company", actorId: 4, genreId: 5},
        {id: 5, name: "Pink Flamingos", actorId:5, genreId: 5}
    ]
}

// export function for actors array
export const getActors = () => {
    return database.actors
    .map(actors=>({...actors}))
}
//export function for genres array
export const getGenres = () => {
    return database.genres
    .map(genres=>({...genres}))
}
//export function for shows array
export const getShows = () => {
    return database.shows
    .map(shows=>({...shows}))
}