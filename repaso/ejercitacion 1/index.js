function calcular(temperatura_celcius){
    
    const resultado = (temperatura_celcius * 1.8) + 32
    return resultado
}
function mostrar(){
    
    const temperatura_celcius = document.getElementById("dato1").value
    const respuesta = calcular(temperatura_celcius)
    
    document.getElementById("h_resultado").textContent = respuesta
}
