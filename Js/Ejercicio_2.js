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

    
}