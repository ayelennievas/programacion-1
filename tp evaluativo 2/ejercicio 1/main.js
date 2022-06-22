const obtener = async () => {

    //con el fetch llamamos los datos de la API, la funcion fetch es realizar una solicitud HTTP
    const dato = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')

    const datos_seleccionados = await dato.json()

    let columnas = []

    //con forEach vamos a recorrer los datos
    datos_seleccionados.forEach((element,index) => {

        let columna =
        `<tr>
        <td>${index+1}</td>
        <td>${element.casa.nombre}</td>
        <td>${element.casa.compra}$</td>
        <td>${element.casa.venta}$</td>
        </tr> `

       columnas.push(columna)
        
    });

    //llamo el elemento body con su id/ con el join se muestra la informacion de los datos en las columnas
    document.getElementById("tbl_body").innerHTML = columnas.join("")
}

//invocamos a la funcion
obtener()