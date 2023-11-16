class contacto{
    constructor(nombre,telefono){
        this.nombre = nombre;
        this.telefono = telefono;
    }
}

//definir clase agenda

class agenda{
    constructor(tamano=10){
        this.contacto = [];
        this.tamano = tamano;
    }

    aniadirContacto(contacto) {
        if (this.contactos.length < this.tamano) {
          this.contactos.push(contacto);
          console.log('Contacto añadido correctamente.');
        } else {
          console.log('La agenda está llena, no se puede añadir más contactos.');
        }
      }

      existeContacto(contacto){
        return this.contactos.some(c => c.nombre === contacto.nombre);
      }
    
      listarContactos() {
        console.log('Lista de contactos:');
        this.contactos.forEach(c => console.log(`${c.nombre}: ${c.telefono}`));
      }
      
      buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(c => c.nombre === nombre);
        if (contactoEncontrado) {
          console.log(`Teléfono de ${contactoEncontrado.nombre}: ${contactoEncontrado.telefono}`);
        } else {
          console.log('Contacto no encontrado.');
        }
      }
}

//exixste contacto

  


