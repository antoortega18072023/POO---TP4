let cuenta = {
    titular: 'Alex',
    saldo:0,

    //ingresar

    ingresar: function (cantidad){
        if (cantidad>0){
            this.saldo += cantidad;
            alert('se ingreso ' + cantidad + ' Nuevo saldo: ' + this.saldo);
        }else{
            alert('la cantidad a ingresar debe mayor que 0');
        }
    },

    //extraer

    extraer: function(cantidad){
        if (cantidad>0 && cantidad<= this.saldo){
            this.saldo -=cantidad;
            alert('se extrajeron ' + cantidad + 'Nuevo saldo: ' + this.saldo);
        }else{
            alert('la cantidad a eztraer debe ser mayor que cero y no pude superar lo que hay en cuenta disponible');
        }
    },

    //estado de cuenra
    informar: function(){
        alert('Titular: ' + this.titular + ', Saldo actual: ' + this.saldo);
    }
}

// Mostrar información inicial de la cuenta
cuenta.informar();

// Ingresar dinero en la cuenta
cuenta.ingresar(100);

// Extraer dinero de la cuenta
cuenta.extraer(30);

// Mostrar información actualizada de la cuenta
cuenta.informar();