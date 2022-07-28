function almacenar_indice(indice){

    localStorage.setItem("indice",indice)
    
}
function editar(indice){
    
    let lista_insumos = JSON.parse(localStorage.getItem("insumos"))

    document.getElementById("inp-d").value = lista_insumos[indice].descripcion

    document.getElementById("inp-precio").value = lista_insumos[indice].precio

    document.getElementById("inp-url").value = lista_insumos[indice].imagen

    document.getElementById("slt_categoria").value = lista_insumos[indice].categoria

    localStorage.setItem("indice",indice)

    //apago el boton
    document.getElementById("btn-guardar").style.display = "none"

    //encendemos el boton actualizar
    document.getElementById("btn_refrescar").style.display = "block"
}