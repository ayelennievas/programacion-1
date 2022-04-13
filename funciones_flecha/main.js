const calcular = (n1,n2) => {
    const resultado = n1 * n2
    return resultado
}

const mostrar = () => {

    const dato1 = document.getElementById("dato1").value 
    const dato2 = document.getElementById("dato2").value 

    //ejecutando a la funcion
    const respuesta = calcular(dato1,dato2)

    document.getElementById("h_resultado").textContent = respuesta
}

/*
Encontrar u obtener el boton y guardarlo en las constante
*/
const boton = document.getElementById("btn_calcular")

/*
Agregamos un evento a escuchar. En este caso el "click"
*/
boton.addEventListener("click",mostrar)