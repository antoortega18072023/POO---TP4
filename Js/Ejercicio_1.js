//definir objeto auto

let auto = {
    color: 'rojo',
    marca: 'Toyota',
    modelo: 'Corolla',
    encendido: false,

    //metodo para encender el auto
    encender: function () {
        this.encendido = true;
        alert('auto encendido');
    },

    //apagar el auto

    apagar:function(){
        this.encendido = false;
        alert('el auto se apago');
    }
};

auto.encender();
auto.apagar();