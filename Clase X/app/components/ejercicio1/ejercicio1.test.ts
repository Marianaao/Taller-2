// eslint-disable-next-line @typescript-eslint/no-var-requires
const combinar = require('./ejercicio1');
test('combinar los arreglos', () => {
    expect(combinar()).toEqual(['h', '1', 'a', '2', 'c', '3']);
});