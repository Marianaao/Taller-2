function ejercicio2(){
    const numeros = [ 2, 5, 6, 3, 21, 12, 14];

    const pares = numeros.filter(x=> x%2 === 0);
    const impares = numeros.filter(x=> x%2 !== 0);

    const filtro = [pares, impares];

    console.log(filtro);

    return filtro;
}

 module.exports = ejercicio2;
