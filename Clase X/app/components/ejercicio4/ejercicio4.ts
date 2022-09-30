function ejercicio4(){

    const lista1 = ['rat', 'dog', 'cat', 'parrot', 'cat'];
    const lista2 = ['cat', 'lizard', 'rat', 'cat'];
 
    const repetido = lista1.filter(x => lista2.indexOf(x) !== -1);

    console.log(repetido);

    return repetido;
}

module.exports = ejercicio4;