function ejercicio1(){
    const array1 = ['h', 'a', 'c'];
    const array2 = ['1', '2', '3'];

    const isAgrtherThanB = array1.length > array2.length;

    const [left, right] =  isAgrtherThanB? [array2, array1] : [array1, array2];
    const array3 = Array.from({length: left.length * 2})
    .map((_, i) => i%2==0 ? 
left[i/2] : right[Math.ceil(i/2)-1]).filter(el => el);
    console.log(array3);
    return array3;
}


module.exports = ejercicio1;