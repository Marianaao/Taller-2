"use strict";
const Fact = require('./ejercicio9');
function factorial() {
    const num = 3;
    let i;
    let total = 1;
    for (i = 1; i <= num; i++) {
        total = total * i;
    }
    return total;
}
test('Integers', () => {
    expect(factorial()).toEqual(6);
    console.log(factorial());
});
