const tareas = [
    {
        nombre:'Testenado soft',
        duracion: 25
    },
    {
        nombre:'Implementacion de alta cliente',
        duracion: 90 
    },
    {
        nombre:'Actualiza cliente',
        duracion: 40 
    },
    {
        nombre:'Deploy de soft',
        duracion: 120
    },
    {
        nombre:'Correcion de bug',
        duracion: 180 
    }
]

//Uso del metodo map()
let nombres = []

tareas.forEach(element => {

    nombres.push(element.nombre)
        
});

//aplicando map()
let nombres2 = tareas.map(tarea => tarea.nombre)

//Uso de filter
let tareas_prolongadas = []

tareas.forEach(element => {
    
    if(element.duracion >= 120){
        tareas_prolongadas.push(element)
    }
});

console.log(tareas_prolongadas)

//Filtrar haciendo uso del metodo filter()
const tareas_prolongadas2 = tareas.filter(tarea => {
    return tarea.duracion >= 120
})

console.log(tareas_prolongadas2)