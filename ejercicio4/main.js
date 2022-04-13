const calcular = (valor_a,valor_b,valor_c) =>{
      
    const bloque1 = Math.pow(valor_b,2) - (4 * valor_a * valor_c);
    const bloque2 = Math.sqrt(bloque1) 
    const resultado1 = (-valor_b + bloque2) /  (2 * valor_a)
    const resultado2 = (-valor_b - bloque2) / (2 * valor_a)
    
    return 'raiz1='+ resultado1 + 'raiz2='+ resultado2
}

const mostrar = () => {

    const dato1 = document.getElementById("dato1").value 
    const dato2 = document.getElementById("dato2").value 
    const dato3 = document.getElementById("dato3").value

    const respuesta = calcular(dato1,dato2,dato3)

    document.getElementById("h_resultado").textContent = respuesta
}

const boton = document.getElementById("boton_calcular")

boton.addEventListener("click",mostrar)
