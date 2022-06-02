export default class Trapecio {

    //metodo que forma parte de clase
    constructor(bma,bme,h){

        this.base_mayor = bma
        this.base_menor = bme
        this.altura = h

    }
    
    //creamos un nuevo metodo
    calcular_area_trap(){
        
        //number solo cuando se quiere sumar
        const resultado = ((Number(this.base_mayor) + Number(this.base_menor))/2) * this.altura
        return resultado

    }

}