class Rectangulo {
    constructor(width, height) {
        // Validación en el constructor
        this.width = typeof width === 'number' && width > 0 ? width : 1;
        this.height = typeof height === 'number' && height > 0 ? height : 1;
    }

    // Método para cambiar las dimensiones del rectángulo
    cambiarDimensiones(width, height) {
        if (typeof width === 'number' && width > 0) {
            this.width = width;
        }
        if (typeof height === 'number' && height > 0) {
            this.height = height;
        }
    }

    // Método para calcular el área del rectángulo
    calcularArea() {
        return this.width * this.height;
    }

    // Método para crear una copia del rectángulo
    copia() {
        return new Rectangulo(this.width, this.height);
    }

    // Método para comparar dos rectángulos
    comparar(otroRectangulo) {
        if (!(otroRectangulo instanceof Rectangulo)) {
            throw new Error("El argumento debe ser un objeto de tipo Rectangulo.");
        }
        const areaActual = this.calcularArea();
        const areaOtro = otroRectangulo.calcularArea();

        if (areaActual > areaOtro) {
            return "mayor";
        } else if (areaActual < areaOtro) {
            return "menor";
        } else {
            return "igual";
        }
    }
}

    
    const rect1 = new Rectangulo(4, 5);
    console.log(`Ancho: ${rect1.width}, Alto: ${rect1.height}, Área: ${rect1.calcularArea()}`);

    
    const rect2 = new Rectangulo(-3, 'a');
    console.log(`Ancho: ${rect2.width}, Alto: ${rect2.height}, Área: ${rect2.calcularArea()}`);

  
    rect1.cambiarDimensiones(8, 10);
    console.log(`Ancho: ${rect1.width}, Alto: ${rect1.height}, Área: ${rect1.calcularArea()}`);

    const rect3 = rect1.copia();
    console.log(`Ancho: ${rect3.width}, Alto: ${rect3.height}, Área: ${rect3.calcularArea()}`);


    console.log(`Comparación: ${rect1.comparar(rect3)}`); // Debería ser igual

    console.log(`Comparación: ${rect1.comparar(rect2)}`); // Debería ser mayor


