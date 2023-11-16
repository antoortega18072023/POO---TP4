//efinir

class producto {
    constructor (codigo,nombre,precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }


imprimedatos(){
    alert('Código: ' + this.codigo + ', Nombre: ' + this.nombre + ', Precio: ' + this.precio);
}

}

