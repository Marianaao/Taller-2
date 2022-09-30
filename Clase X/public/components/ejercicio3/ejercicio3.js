"use strict";
function ejercicio3() {
    const letras = [['e', 'd', 'f'], ['a', 'c', 'b'], ['m', 'o', 'n']];
    const letras1 = letras[0].sort();
    const letras2 = letras[1].sort();
    const letras3 = letras[2].sort();
    const todos = [letras1, letras2, letras3];
    const ordenado = todos.sort();
    console.log(ordenado);
    return ordenado;
}
module.exports = ejercicio3;
