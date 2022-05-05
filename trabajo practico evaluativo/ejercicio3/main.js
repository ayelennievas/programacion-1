function calcular(a,b){
    //realizamos el calculo en bloques con los datos ingresados en input
    const bloque1 = (Math.pow(a,2) + Math.pow(b,2));
    const resultado = Math.sqrt(bloque1)

    //se retorna el resultado
    return resultado
}
function mostrar(){
    // llamamos a los datos ingresados en input
    const dato1 = document.getElementById("dato1").value 
    const dato2 = document.getElementById("dato2").value
  
    //llamamos a la funcion calcular para que realice la operacion segun los datos ingresados
    const respuesta = calcular(dato1,dato2)
  
    //invocamos al elemento H4 para que muestre el resultado segun la constante respuesta
    document.getElementById("h_resultado").textContent = respuesta
}