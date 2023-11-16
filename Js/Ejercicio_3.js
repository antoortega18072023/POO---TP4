class Rectangulo {
    constructor(alto,ancho){
        this.alto = alto;
        this.ancho = ancho;
    }

    //modificar el alto

    modificarAlto(nuevoalto){
        if(nuevoalto>0){
            this.alto = nuevoalto;
            alert('alto modificado a: ' + this.alto);
        }else{
            alert('el alto debe ser mayor que 0');
        }
    }

    
}