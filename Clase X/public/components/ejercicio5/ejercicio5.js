"use strict";
const Array1 = ['pizza', 'perro', 'hamburguesa', 'nosexd', 'p1cha'];
const Array2 = ['onvre', 'pizza', 'perro', 'carne', 'nosexd', 'p1cha'];
function ejercicio5(a, b) {
    const solucion = [];
    for (let i = 0; i < a.length; i++) {
        for (let e = 0; e < b.length; e++) {
            if (a[i] === b[e])
                solucion.push(a[i]);
        }
    }
    return solucion;
}
console.log(ejercicio5(Array1, Array2));
module.exports = ejercicio5;
