import Producto from "./producto.js";

function guardar(){

    let descripcion = document.getElementById("inp_descripcion").value
    let precio_venta = document.getElementById("inp_precio_venta").value
    let categoria = document.getElementById("slt_cat").value

    //instancia
    let producto = new Producto(descripcion,precio_venta,categoria)

    //invocamos(ejecutamos) al metodo guardar_producto()
    //perteneciente a la clase Producto
    producto.guardar_producto()
}

document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar(){

    let producto = new Producto()
    producto.obtener_productos()
    
}

listar()

function eliminar(){

    let indice = localStorage.getItem("indice")

    //creamos una insancia
    //para acceder a los metodos y atributos de la clase producto
    let producto = new Producto()
    

    //haciendo uso de la instancia
    //invocamos al metodo eliminar_producto()
    producto.eliminar_producto(indice)
}

document.getElementById("btn_eliminar").addEventListener("click",eliminar)


function actualizar(){

    //creamos la instancia producto
    let producto = new Producto()

    //a traves de la instancia accedemos e invocamos el metodo
    //actualizar_producto() existen en archivo producto.js
    producto.actualizar_producto()
}

document.getElementById("btn_actualizar").addEventListener("click",actualizar)