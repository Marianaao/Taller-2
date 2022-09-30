"use strict";
const combinar = require('./ejercicio1');
const Array1 = ['h', 'a', 'c'];
const Array2 = ['1', '2', '3'];
const [l, s] = Array1.length > Array2.length ? [Array1, Array2] : [Array2, Array1];
const Array3 = Array.from({ length: l.length * 2 }).map((_, i) => i % 2 == 0 ? l[i / 2] : s[Math.ceil(i / 2) - 1]).filter(el => el);
test('combinar los arreglos', () => {
    expect(Array3).toEqual(['h', '1', 'a', '2', 'c', '3']);
    console.log(Array3);
});
