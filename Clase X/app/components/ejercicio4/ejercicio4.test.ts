const Listas = require('./ejercicio4');

const lista1 = ['rat', 'dog', 'cat', 'parrot', 'cat'];
const lista2 = ['cat', 'lizard', 'rat', 'cat'];
 
const repetido = lista1.filter(x => lista2.indexOf(x) !== -1);
 

test('Repetidos', () => {
    expect(repetido).toEqual(['cat', 'rat']);
    console.log(repetido);
});