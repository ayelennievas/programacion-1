let consolas = ['PlayStation','Xbox','Nintendo Game Cube','Sega DreamCast','Game Boy Advanced']

//elimino elementos
const posicion = 2;
const numeroElementos = 2;
const elementosEliminados = consolas.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(consolas)

//agrego un elemento al final
consolas.push('Nintendo 64')
console.log(consolas)

//agregar un elemento al inicio
consolas.unshift('Nintendo Wii')
console.log(consolas)

    const longitud = consolas.length
    const ultimo_elemento = consolas[longitud-1]
    const elemento = consolas[2]

const mostrar = () => {

    document.getElementById("parrafo").textContent =  "La longitud del arreglo es: " + longitud
     document.getElementById("parrafo2").textContent = "El ultimo elemento del arreglo es: " + ultimo_elemento
     document.getElementById("parrafo3").textContent = "Muestro el elemento Xbox: " + elemento

}
const boton = document.getElementById("btn")
boton.addEventListener("click",mostrar)



function recorrer(){

    let filas = []

    consolas.forEach((element,index) => {

        let fila =
        `<tr>
           <td>${index+1}</td>
           <td>${element}</td>
        </tr>`

        filas.push(fila)

        
    })
    document.getElementById("tbl_body").innerHTML = filas.join('')
}
const boton1 =  document.getElementById("btn1")

boton1.addEventListener("click",recorrer)