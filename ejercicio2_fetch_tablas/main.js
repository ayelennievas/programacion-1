const obtener_productos = async () => {

    const producto = await fetch ('https://fakestoreapi.com/products/categories'+ categoria)
 
    const obtener_productos = await producto.json()

    let filas = []

    obtener_productos.forEach(element => {
        
        `<div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <p class="card-text">${element.price}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>`
    });

}