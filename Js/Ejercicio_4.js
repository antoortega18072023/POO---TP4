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

// crear instancas de la clse producto

let producto1 = new producto ('001','Laptop',1200);
let producto2 = new producto ('002','Telefono',500);
let producto3 = new producto ('003','Tablet',1000);