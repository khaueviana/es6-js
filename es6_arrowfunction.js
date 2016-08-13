"use strict"

module.exports = function () {

    console.log('Arrow Function Corpo Conciso')

    //Implementação sem Arrow Function
    let adicao = function (a, b) {
        return a + b;
    };

    // Implementação com Arrow Function
    let adicao_arrow = (a, b) => a + b;

/*-----------------------------------------------------------------------------------*/

    console.log('Implementação com Corpo de Bloco');

    //Implementação com corpo de bloco
    let arr = ['maçã', 'banana', 'laranja'];

    let cafe_da_manha = arr.map(fruta => {
        return fruta + 's';
    });

    console.log(cafe_da_manha); // ['maçãs', 'bananas', 'laranjas']

/*-----------------------------------------------------------------------------------*/

    console.log('Utilização do Array Function no contexto this')
    
    function Pessoa() {
        this.idade = 0;

        setInterval(() => {
            this.idade++; // `this` se refere corretamente ao objeto pessoa
        }, 1000);
    }

    var p = new Pessoa();

}