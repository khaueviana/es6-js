"use strict"

module.exports = function () {

    function getCarro(fabricante, modelo, valor) {
        return {
            // com a sintaxe abreviada de
            // valor da propriedade, você
            // pode omitir o valor da propriedade
            // se o índice casa com o nome
            // da variável



            fabricante,  // o mesmo que fabricante: fabricante
            modelo, // o mesmo que modelo: modelo
            valor, // o mesmo que valor: valor

            // valores computados agora funcionam
            // como objetos literais
            ['fabricante' + fabricante]: true,

            // sintaxe de abreviação de definição
            // de método omite a keyword `function`
            // e a vírgula

            depreciar() {
                this.valor -= 2500;
            }
        };
    }

    let carro = getCarro('Kia', 'Sorento', 40000);

    // output: {
    //     fabricante: 'Kia',
    //     modelo:'Sorento',
    //     valor: 40000,
    //     fabricanteKia: true,
    //     depreciar: function()
    // }

}