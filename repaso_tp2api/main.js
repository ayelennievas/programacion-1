const obtener = async () => {

    const provincias = await fetch ('https://apis.datos.gob.ar/georef/api/provincias')
 
    const provincias_seleccionadas = await provincias.json()

    let filas = []

    provincias_seleccionadas.provincias.forEach((element,index) => {
        
        let fila =
        `<tr>
           <td>${index+1}</td>
           <td>${element.nombre}</td>
        </tr>`

        filas.push(fila)
    });

     document.getElementById("tbl_body").innerHTML = filas.join('')
}

obtener()