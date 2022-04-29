function calcular(d1,d2,operador){

    let resultado = null

    if (operador == 0){
        resultado = parseInt(d1) + parseInt(d2)
    
    }else{ 
       if (operador == 1){
            resultado = d1 - d2
    }else{ 
       if (operador == 2){
           resultado = d1 * d2
    }else{
           resultado = d1 / d2
       }
    }
}
    
    return resultado
    
}

function mostrar(){

    const seleccionado = document.getElementById("slt_operacion").value
    const dato1 = document.getElementById("inp_dato1").value
    const dato2 = document.getElementById("inp_dato2").value

    const respuesta = calcular(dato1,dato2,seleccionado)

    document.getElementById("h_resultado").textContent = respuesta


}
