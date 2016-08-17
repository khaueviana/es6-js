"use strict"

module.exports = function () {

    // ES6 tem suporte nativo para promises. Uma promise é um objeto que espera por uma operação assíncrona ser completa, 
    // e quando se completa, a promise se torna resolvida ou rejeitada.

    // A forma padrão de se criar uma Promise é usando o construtor new Promise() que aceita um manipulador que é 
    // dado 2 funções como parâmetros. O primeiro manipulador (geralmente nomeado resolve) é uma função pra chamar 
    // com o futuro valor quando ele estiver pronto; e o segundo manipulador (geralmente chamado de reject) é uma 
    // função pra chamar se a Promise não conseguir resolver o valor futuro, e for rejeitada.

    // var p = new Promise(function(resolve, reject) {  
    //     if (/* condition */) {
    //         resolve(/* value */);  // resolvida com sucesso
    //     } else {
    //         reject(/* reason */);  // erro, rejeitada
    //     }
    // });

    // Toda promisse tem um método chamado then, que recebe um par de callbacks. 
    // O primeiro callback é chamado se a promise for resolvida, enquanto o segundo é chamado se for rejeitada.

    // p.then((val) => console.log("Promise Resolvida", val),
    //        (err) => console.log("Promise Rejeitada", err));

    // O valor de retorno de then vai ser passado como valor pro próximo then.

    var hello = new Promise(function (resolve, reject) {
        resolve("Hello");
    });

    hello.then((str) => `${str} World`)
        .then((str) => `${str}!`)
        .then((str) => console.log(str)) // Hello World!

    // Quando retornar uma promise, o valor resolvido da promise vai ser passado para o próximo 
    // callback para encadeá-los efetivamente. Essa é uma forma simples de evitar o "callback hell"

    var p = new Promise(function (resolve, reject) {
        resolve(1);
    });

    var EventualmenteAdiciona1 = (val) => {
        return new Promise(function (resolve, reject) {
            resolve(val + 1);
        });
    }

    p.then(EventualmenteAdiciona1)
        .then(EventualmenteAdiciona1)
        .then((val) => console.log(val)) // 3
}