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

    //modificar ancho

    modificarancho(nuevoancho){
        if (nuevoancho>0){
            this.ancho = nuevoancho;
            alert('ancho modificado a: ' + this.ancho);
        }else{
            alert('el ancho debe ser mayor que 0');
        }
    }

    // Método para mostrar las propiedades del rectángulo
  mostrarPropiedades() {
    console.log('Alto: ' + this.alto + ', Ancho: ' + this.ancho);
  }

  // Método para calcular el perímetro del rectángulo
  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  // Método para calcular el área del rectángulo
  calcularArea() {
    return this.alto * this.ancho;
  }
}

// Ejemplo de uso de la clase Rectangulo
let miRectangulo = new Rectangulo(5, 8);

// Mostrar propiedades iniciales
miRectangulo.mostrarPropiedades();

// Modificar alto y ancho
miRectangulo.modificaralto(7);
miRectangulo.modificarancho(10);

// Mostrar propiedades modificadas
miRectangulo.mostrarPropiedades();

// Calcular y mostrar perímetro y área
console.log('Perímetro: ' + miRectangulo.calcularPerimetro());
console.log('Área: ' + miRectangulo.calcularArea());

