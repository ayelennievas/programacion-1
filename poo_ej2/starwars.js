export default class Starwars {

        constructor(){

        }
        
        async consumir_api(){

        const starwars = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=star%20wars')

        const starwars_definido = await starwars.json()

        
        for (const iterator of starwars_definido.Search) {

            
            console.log(`
            ${iterator.imdbID}
            ${iterator.Title}
            ${iterator.Year}
            ${iterator.Poster}`)

            

        }

    }
}
