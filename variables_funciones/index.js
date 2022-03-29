
function mostrar_mensaje(){
    alert('Probando mi funcion')
}
//funcion clasica
function mostrar_en_consola(){
    //asignamos una cadena de string en una constante
    const nombre_apellido = 'Ayelen Nievas'

    /* Forma 1 - sin template string */
    console.log('Nombre y apellido: '+nombre_apellido)

    //Forma 2 - Template string -backtick(comillas)
    console.log(`
       Nombre y apellido: ${nombre_apellido}
       DNI 46612882
       Direccion: Mexico 2155
    `)
}

//condicionales
function validar(){
    const calificacion = prompt('Ingrese su calificacion:')

    if(calificacion >= 7){
         alert('Estas aprobado')
    }else{
        alert('Nos veremos en diciembre!')
    }
}