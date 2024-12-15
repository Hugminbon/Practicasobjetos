// Añadiendo el método al prototipo de Array
Array.prototype.calcularMedia = function () {
    if (this.length === 0) {
        throw new Error("No se puede calcular la media de un array vacío.");
    }

    const suma = this.reduce((acumulador, valorActual) => {
        if (typeof valorActual !== 'number') {
            throw new Error("Todos los elementos del array deben ser números.");
        }
        return acumulador + valorActual;
    }, 0);

    return suma / this.length;
};

