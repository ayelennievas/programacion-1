
const obtener = async () => {

    // const insumo = await fetch ('https://fakestoreapi.com/products/category/' + categoria)
 
    const insumos_seleccionados = JSON.parse(localStorage.getItem("insumos"))//await insumo.json()

    let columnas = []

    insumos_seleccionados.forEach(element => {


        let columna =      
        `
        
        <div class="card" style="width: 18rem;">
        <h5 class="card-title">${element.descripcion}</h5>
        <img src="${element.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <a href="#" class="btn btn-primary">Agregar</a>
        </div>
      </div>
   
       `
      columnas.push(columna)
        
    });

    document.getElementById("catalogo").innerHTML = columnas.join('')
}

obtener()
