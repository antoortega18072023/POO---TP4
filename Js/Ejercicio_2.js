let cuenta = {
    titula: 'anto',
    saldo:0,

    //ingresar

    ingresar: function (cantidad){
        if (cantidad>0){
            this.saldo += cantidad;
            alert('se ingreso ' + cantidad + 'Nuevo saldo: ' + this.saldo)
        }else{
            alert('la cantidad a ingresar debe mayor que 0');
        }
    },

    //extraer

    extraer: function(cantidad){
        if (cantidad>0 && cantidad<= this.saldo){
            this.saldo -=cantidad;
            alert('se extrajeron ' + cantidad + 'Nuevo saldo: ' + this.saldo)
        }else{
            alert('la cantidad a eztraer debe ser mayor que cero y no pude superar lo que hay en cuenta disponible')
        }
    },

    
}