"use strict"

//const representa uma referência constante para um valor. Em outras palavras, o valor não está congelado, apenas a atribuição dele

module.exports = function () {

    const ARR = [5, 6];
    ARR.push(7);
    console.log(ARR); //5,6,7
    //ARR = 10; //TypeError
    ARR[0] = 3; //valor não é imutável
    console.log(ARR); //[3,6,7]
}