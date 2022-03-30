function calcular_area(){
    const number = parseInt (prompt('Ingrese el valor de b1'));
    const number2 = parseInt (prompt('Ingrese el valor de b2'));
    const number3 = parseInt (prompt('Ingrese el valor de h'));
    const resultado = ((number+number2) * number3) / 2
    return resultado
}
function mostrar(){
    const respuesta = calcular_area()
    alert (respuesta)
}