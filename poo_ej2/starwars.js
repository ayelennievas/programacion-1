export default class Starwars {

        constructor(){

        }
        
        async consumir_api(){

        const starwars = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=star%20wars')

        const starwars_definido = await starwars.json()

        let columnas = []

        
        for (const iterator of starwars_definido.Search) {
            
          let columna =
            
            `<div class="col-lg-3">
        <div class="card">
          <img src="${iterator.Poster}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${iterator.Title}</h5>


            <div class="collapse" id="collapseExample_${iterator.imdbID}">
                <div class="card card-body">
                 <p class="card-text">${iterator.Year}</p>
                </div>
            </div>

          </div>

        </div>
    </div>`

        columnas.push(columna) 

        }
       
        document.getElementById("peliculas").innerHTML = columnas.join('')
    }

  
}
