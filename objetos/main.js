let alumno = {
    nombre:'Emanuel',
    apellido:'Maldonado',
    dni:45287124,
    correos:{
        outlook: 'em@outlook.com',
        gmail: 'em@gmail.com',
        yahoo: 'em@yahoo.com.ar'
    }    
}
//forma 1
//const yahoo = alumno.correos.yahoo
//const gmail = alumno.correos.gmail
//const outlook = alumno.correos.outlook

//forma 2 - Destructuring Object
const { yahoo, gmail, outlook } = alumno.correos

console.log(`
    Correos:

    Gmail: ${gmail}
    Yahoo: ${yahoo}
    Outlook: ${outlook}
`)