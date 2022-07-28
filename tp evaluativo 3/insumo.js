export default class Insumo {

    constructor(d,p,img,c){

        this.descripcion = d
        this.precio = p
        this.imagen = img
        this.categoria = c
    }

    //metodo guardar
    guardar_insumo(){

    let nuevo_insumo = {
       
        descripcion: this.descripcion,
        precio: this.precio,
        imagen: this.imagen,
        categoria: this.categoria

    }
 
    if("insumos" in localStorage){

        let lista_insumos = JSON.parse(localStorage.getItem("insumos"))
        lista_insumos.push(nuevo_insumo)
        localStorage.setItem("insumos", JSON.stringify(lista_insumos))
    }
    else{

        let lista_insumos = []
        lista_insumos.push(nuevo_insumo)

        //guardamos en el storage
        localStorage.setItem("insumos", JSON.stringify(lista_insumos))

    }

    this.obtener_insumos()

    this.vaciar_formulario()

    

    }

    obtener_insumos(){

    let lista_insumos = JSON.parse(localStorage.getItem("insumos"))

    let filas = []

    lista_insumos.forEach((element,index) => {

        let fila = `
              <tr>
                <td>${index+1}</td>
                <td>${element.descripcion}</td>
                <td>${element.precio}$</td>
                <td> <img src="${element.imagen}" class="img-fluid" style="width:3rem" /> </td>
                <td>${element.categoria}</td>
                <td>

                   <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm">
                     <i class="fa fa-trash"></i>
                   </button>
                     
                   <button onclick="editar(${index})" class="btn btn-primary btn-sm>
                     <i class="fa fa-edit"></i>
                   </button>
                </td>
              </tr>
            `
            filas.push(fila)
    });

    document.getElementById("t_body").innerHTML = filas.join('')

    }

    eliminar_insumo(indice){

        let lista_insumos = JSON.parse(localStorage.getItem("insumos"))

        lista_insumos.splice(indice,1)

        localStorage.setItem("insumos", JSON.stringify(lista_insumos))

        this.obtener_insumos()
    }

    actualizar_insumo(){

      let indice = localStorage.getItem("indice")

      let listado_insumos = JSON.parse(localStorage.getItem("insumos"))

      listado_insumos[indice].descripcion = document.getElementById("inp-d")
      listado_insumos[indice].precio = document.getElementById("inp-precio")
      listado_insumos[indice].imagen = document.getElementById("inp-url")
      listado_insumos[indice].categoria = document.getElementById("slt-categoria")

      localStorage.setItem("insumos",JSON.stringify(listado_insumos))

      this.obtener_insumos()

      document.getElementById("btn-guardar").style.display = "block"

      document.getElementById("btn_refrescar").style.display = "none"

      this.vaciar_formulario()

    }

    vaciar_formulario(){

      document.getElementById("form_insumo").reset()
    }
}