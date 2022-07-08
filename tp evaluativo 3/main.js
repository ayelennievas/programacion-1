import Insumo from "./insumo.js";

function guardar(){

    let descripcion = document.getElementById("inp-d").value 
    let precio = document.getElementById("inp-precio").value
    let imagen = document.getElementById("inp-url").value
    let categoria = document.getElementById("slt-categoria").value

    let insumo = new Insumo(descripcion,precio,imagen,categoria)

    insumo.guardar_producto()
}

document.getElementById("btn-guardar").addEventListener("click",guardar)

function listar(){

    let insumo = new Insumo()
    insumo.obtener_insumos()
}

listar()

function eliminarinsumo(){

    let indice = localStorage.getItem("indice")

    let insumo = new Insumo()

    insumo.eliminar_insumo(indice)
}

document.getElementById("btn_eliminar").addEventListener("click",eliminarinsumo)