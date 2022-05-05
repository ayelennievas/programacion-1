const calcular = (t) => {
    //se calcula los grados de la temperatura y se muestra si es baja, adecuada, alta o desconocida
    if (t >= 14 && t <32){
        temperatura = 'Temperatura baja'
        return temperatura
    }
    if (t >= 32 && t <68){
        temperatura2 = 'Temperatura adecuada'
        return temperatura2
    }
    if (t >= 68 && t <96){
        temperatura3 = 'Temperatura alta'
        return temperatura3
    }
    else {
        temperatura4 = 'Temperatura desconocida'
        return temperatura4
    }
}
const mostrar = () =>{
    const T = document.getElementById("temp").value

    //ejecuta la funcion
    const respuesta = calcular(T)

    //llamamos al elemento H1 para mostrar la respuesta
    document.getElementById("h_resultado").textContent = respuesta
}
//invocamos al elemento button
const boton = document.getElementById("btn_calcular")
//al momento de hacer click en boton calcular se ejecuta la funcion mostrar
boton.addEventListener("click",mostrar)