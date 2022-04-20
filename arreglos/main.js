//crear un array
//creamos un arreglo de string
let series = ['Breaking bad','Okupa','Narco','Casados con hijos','Peaky blinders']

//como conocer la longitud de array
const longitud = series.length
console.log('Longitud del arreglo: '+longitud)

/*como acceder a un elemento del arreglo
haciendo uso del indice*/
const primero = series[0]
console.log('Primer elemento: '+primero)

//como accedo al ultimo elemento
const ultimo = series[longitud-1]
console.log('Ultimo elemento: '+ultimo)

//recorrer un arreglo haciendo uso de un foreach
series.forEach((element,index)=> {
    console.log(index+'-'+element)
    
});

//como agregar un elemento al final de un array
series.push('Dragon Ball')
console.log(series)

//eliminar el ultimo elemento de un array
series.pop()
console.log(series)

//como agregar un elemento al indice de un arreglo
series.unshift("Grey's anatomy")
console.log(series)

//como elimino el primer elemento de un arreglo
series.shift()
console.log(series)

//como obtener la posicion de un elemento
const indice = series.indexOf("Casados con hijos")
console.log("Indice obtenido: "+indice)

//como eliminar un elemento teniendo su posicion
//1er caso - eliminar un unico elemento
series.splice(indice,1)
console.log(series)

//2do caso - eliminar mas de un elemento
const posicion = 1;
const numeroElementos = 2;
const elementosEliminados = series.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(series)

//copiar un array
let copia = series.slice()
copia.push("Dragon Ball")
console.log(copia)
console.log(series)