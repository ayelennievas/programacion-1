<<<<<<< HEAD
const obtener = async () => {
 
    const insumos_seleccionados = JSON.parse(localStorage.getItem("insumos"))

    let columnas = []

    insumos_seleccionados.forEach( (element,index) => {
=======

const obtener = async () => {

    // const insumo = await fetch ('https://fakestoreapi.com/products/category/' + categoria)
 
    const insumos_seleccionados = JSON.parse(localStorage.getItem("insumos"))//await insumo.json()

    let columnas = []

    insumos_seleccionados.forEach(element => {
>>>>>>> ace91b87b4e8a1b8eb69ebd9628ea585ecf19eb9


        let columna =      
        `
        
<<<<<<< HEAD
        <div class="card" style="width: 15rem;">
        <h5 class="card-title">${element.descripcion}</h5>
        
        <img src="${element.imagen}" class="card-img-top" alt="...">
        
        <div class="card-body"  style="background-color: #;">
          <a href="#" class="btn btn-primary" onclick="agregar(${index})">Agregar</a>
        </div>
        </div>
=======
        <div class="card" style="width: 18rem;">
        <h5 class="card-title">${element.descripcion}</h5>
        <img src="${element.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="#" class="btn btn-primary">Agregar</a>
        </div>
      </div>
   
>>>>>>> ace91b87b4e8a1b8eb69ebd9628ea585ecf19eb9
       `
      columnas.push(columna)
        
    });

<<<<<<< HEAD
    document.getElementById("insumo").innerHTML = columnas.join('')
}

obtener()


function agregar(indice){

    let lista_insumos = JSON.parse(localStorage.getItem("insumos"))

    

    let nuevo_pedido = {
        descripcion:lista_insumos[indice].descripcion,
        cantidad:1,
        precio:lista_insumos[indice].precio,
    }

    if("pedidos" in localStorage){

        let lista_insumos = JSON.parse(localStorage.getItem("pedidos"))
        lista_insumos.push(nuevo_pedido)
        localStorage.setItem("pedidos", JSON.stringify(lista_insumos))

    }
    else{
        let lista_insumos= []
        lista_insumos.push(nuevo_pedido)
        localStorage.setItem("pedidos", JSON.stringify(lista_insumos))
    }


    lista_insumos.forEach((element,index) => {

        let fila =
            `
            <tr>
                <td>${index+1}
                <td>${element.descripcion}</td>
                <td>${element.cantidad}</td>
                <td>${element.precio}$</td>
                
            </tr>
            `
          
        
    });

    
}


=======
    document.getElementById("catalogo").innerHTML = columnas.join('')
}

obtener()
>>>>>>> ace91b87b4e8a1b8eb69ebd9628ea585ecf19eb9
