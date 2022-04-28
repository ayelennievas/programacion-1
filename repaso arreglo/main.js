var lenguajes = ['Python','JavaScript','Csharp','C++','Java','PHP','Ruby']

function imprimir (){
    const longitud = lenguajes.length
    console.log('Longitud del arreglo: '+longitud)

    const ultimo = lenguajes[longitud-1]
    console.log('Ultimo elemento del arreglo: '+ultimo)

    const tercero = lenguajes[3]
    console.log('Tercer elemento del arreglo: '+tercero)

}

function recorrer (){
    lenguajes.forEach((element,index)=> {
        console.log(index+'-'+element)
    })
}

lenguajes.push('Go')
console.log(lenguajes)

lenguajes.shift()
console.log(lenguajes)

lenguajes.unshift('Kotlin')
console.log(lenguajes)

const posicion = 4;
const numeroElementos = 2;
const elementosEliminados = lenguajes.splice(posicion,numeroElementos)
console.log(elementosEliminados)
console.log(lenguajes)

console.log(lenguajes)

