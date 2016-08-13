"use strict"

module.exports = function () {

    //Definição de parâmetros default nas definições de funções. 
    let getPrecoFinal = (preco, imposto = 0.7) => preco + preco * imposto;
    getPrecoFinal(500);

}