// let permite que você crie declarações limitadas a qualquer bloco, o que é chamado de escopo de bloco. Ao invés de usar var, que fornece escopo de função, é recomendado que se use let no ES6.

"use strict";

module.exports = function () {

     var a = 2;    
     {
         let a = 3;

         console.log(a); //3
     }

    console.log('1'); //2
}