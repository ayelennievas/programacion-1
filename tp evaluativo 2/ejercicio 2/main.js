let criptos = ["Bitcoin", "Etherum", "Tether", "BNB", "Cardano", "Dai", "Helium", "Shiba Inu", "Tron", "Cronos", "Solana"]

//agrego un elemento al inicio del arreglo
criptos.unshift('Stellar')
console.log(criptos)

//elimino Shiba Inu y Tron respectivamente/muestro el arreglo con ambos elementos eliminado
const posicion = 8;
const numeroElementos = 2;
const numeroElementosEliminados = 
criptos.splice(posicion,numeroElementos)
console.log(numeroElementosEliminados)
console.log(criptos)

//agrego la criptomoneda Gate al final del arreglo
criptos.push('Gate')
console.log(criptos)

//uso de funciones

const longitudArreglo = criptos.length
const ultimoElemento = criptos[longitudArreglo-1]

//buscamos  el indice (pos) de un elemento
let indice = criptos.indexOf("Helium")
const elemento = criptos[indice]

function mostrar(){

    document.getElementById("parrafo").textContent = "La longitud del arreglo es: "+ longitudArreglo
    document.getElementById("parrafo2").textContent = "El ultimo elemento del arreglo es: "+ ultimoElemento
    document.getElementById("parrafo3").textContent = "Muestro el elemento Helium: "+ elemento
    
}
//obtengo el boton con un id
const boton = document.getElementById("btn")

//al momento de hacer click en el boton se ejecuta la funcion mostrar
boton.addEventListener("click",mostrar)

function recorrer(){

    let filas = []

    //recorro el arreglo
    criptos.forEach(element => {
        
        let fila=

        `<li class="list-group-item">${element}</li>`
        
        filas.push(fila)
    });
    //relleno la list-group con los elementos del arreglo
    document.getElementById("lista-cripto").innerHTML = filas.join('')
}

const boton1 = document.getElementById("btn1")
boton1.addEventListener("click",recorrer)