"use strict";
const parEimapar = require('./ejercicio2');
const numeros = [2, 5, 6, 3, 21, 12, 14];
const pares = numeros.filter(x => x % 2 === 0);
const impares = numeros.filter(x => x % 2 !== 0);
const filtro = [pares, impares];
test('pares', () => {
    expect(pares).toEqual([2, 6, 12, 14]);
    console.log(pares);
});
test('impares', () => {
    expect(impares).toEqual([5, 3, 21]);
    console.log(pares);
});
test('filtro', () => {
    expect(filtro).toEqual([[2, 6, 12, 14], [5, 3, 21]]);
    console.log(filtro);
});
