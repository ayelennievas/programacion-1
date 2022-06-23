const framework = {
    titulo: 'Framework utilizado en la actualidad',
    nombre: 'Angular',
    características: {
   lenguaje: 'TypeScript',
   patron: 'MVVM',
   spa: 'si'
    },
   }


//muestro los datos del objeto con una funcion flecha
const mostrar = () =>{

    //declaro variables con el uso de Destructuring Object
    const { titulo, nombre } = framework
    const { lenguaje, patron, spa } = framework.características
    
    //imprimo en consola
    console.log(`
    Titulo: ${titulo}
    Nombre: ${nombre}
    Caracteristicas:
    Lenguaje: ${lenguaje}
    Patron: ${patron}
    Spa: ${spa}
    `)
}
//llamo al elemento button con su id
const boton = document.getElementById("btn")

//se ejecuta la funcion mostrar al momento de hacer click en el boton
boton.addEventListener("click",mostrar)