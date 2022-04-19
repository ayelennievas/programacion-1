const calcular = (lado1,lado2,lado3) =>{
    
    const resultado = parseInt(lado1) + parseInt(lado2)+ parseInt(lado3)
    const mensaje = (resultado == 180) ? 'Es valido' : 'Es invalido'
    return resultado + mensaje

    
}

const mostrar = () => {

    const lado1 = document.getElementById("lado1").value
    const lado2 = document.getElementById("lado2").value
    const lado3 = document.getElementById("lado3").value

    const respuesta = calcular(lado1,lado2,lado3)

    document.getElementById("h_resultado").textContent = respuesta
}

const boton = document.getElementById("btn_calcular")

boton.addEventListener("click",mostrar)