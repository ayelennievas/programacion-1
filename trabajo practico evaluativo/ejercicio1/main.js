function calcular(){
    //invoco al elemento select 
    const auto = document.getElementById("autos").value

    //se decalara como un valor vacio para que el programa tenga en cuenta cada resultado segun el auto elegido
    let resultado = null

    //calculo el valor del auto junto con el descuento
    if (auto == 1750000){
        resultado = 1750000 - ((15 * 1750000) / 100) 
    }

    if (auto == 1950000){
        resultado = 1950000 - ((5 * 1950000) / 100)
    }

    if (auto == 2560000){
        resultado = 2560000 - ((10 * 2560000) / 100)
    }
    // mostramos el resultado en el elemento H1
    document.getElementById("h_resultado").textContent = resultado

    
}