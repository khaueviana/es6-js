"use strict"

module.exports = function () {

    //for...of itera em objetos iteráveis, tipo arrays.
    let arrayText1 = ['A', 'vida', 'não', 'é', 'um', 'toddynho'];
    for (let item of arrayText1) {
        console.log(item);
    }

    //for...in itera sobre todas as propriedades enumeráveis do objeto.
    let arrayText2 = ['Cara,', 'JS', 'é', 'lindo'];
    arrayText2.size = 4;
    for (let item in arrayText2) {
        console.log(item);
    }
}