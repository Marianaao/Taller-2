const Ordenar = require('./ejercicio3');

const letras = [['e', 'd', 'f'], ['a', 'c', 'b'], ['m', 'o', 'n']];
const letras1 = letras[0].sort();
const letras2 = letras[1].sort();
const letras3 = letras[2].sort();

const todos = [letras1, letras2, letras3];

const ordenado = todos.sort();

test('Ordenar grupos', () => {
    expect(ordenado).toEqual([ ['a', 'b', 'c'],  ['d', 'e', 'f'], ['m', 'n', 'o']]);
    console.log(ordenado);
});