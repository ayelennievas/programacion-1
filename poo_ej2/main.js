import Starwars from "./starwars.js"

function consumir_starwars(){

    const starwars = new Starwars()


    starwars.consumir_api()
}

document.getElementById("btn").addEventListener("click",consumir_starwars)