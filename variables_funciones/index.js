
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
    const calificacion = prompt('Ingrese su calificacion:');

    //condicion - forma 1
    /*if(calificacion >= 7){
         alert('Estas aprobado')
    }else{
        alert('Nos veremos en diciembre!')
    }*/

    //expresion ternario
    (calificacion >= 7) ? alert('Estas aprobado') : alert('Desaprobado')
}

//funcion con retorno y comunicacion entre funciones
function calcular(){
    const number = prompt('Ingresa un numero: ');
    const resultado = number * 10
    //estamos entregando una respuesta
    return resultado
}


function visualizar(){
    //invocamos(ejecutamos) la funcion calcular
    const respuesta = calcular()
    alert(respuesta)
}
