import Insumo from "./insumo.js";

function guardar(){

    let descripcion = document.getElementById("inp-d").value 
    let precio = document.getElementById("inp-precio").value
    let imagen = document.getElementById("inp-url").value
    let categoria = document.getElementById("slt-categoria").value

    let insumo = new Insumo(descripcion,precio,imagen,categoria)

    insumo.guardar_insumo()
}

document.getElementById("btnguardar").addEventListener("click",guardar)

function listar(){

    let insumo = new Insumo()
    insumo.obtener_insumos()
}

listar()

function eliminarinsumo(){

    let indice = localStorage.getItem("indice")

    let insumo = new Insumo()

    insumo.eliminar_insumo(indice)

    const truck_modal = document.querySelector('#mymodal')

    const modal = bootstrap.Modal.getInstance(truck_modal) 

    modal.hide()
}

document.getElementById("btn_eliminar").addEventListener("click",eliminarinsumo)

function actualizar(){

    let insumo = new Insumo()

    insumo.actualizar_insumo()
}

document.getElementById("btn_refrescar").addEventListener("click",actualizar)