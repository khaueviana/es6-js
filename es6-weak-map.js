"use strict"

// WeakMap
// Um WeakMap é um Map onde os índices são referenciados de forma fraca, o que não previne que seus índices sejam coletados pelo garbage collector, o que significa que você não precisa se preocupar com rombos de memória.
// Outra coisa a se notar aqui: Em um Weakmap, ao contrário do Map, todo índice deve ser um objeto.
// Um WeakMap só tem 4 métodos: delete(indice), has(indice), get(indice) e set(indice, valor)

module.exports = function () {

    let w = new WeakMap();
    //w.set('a', 'b'); - Uncaught TypeError: Invalid value used as weak map key

    var o1 = {};
    var o2 = function () { };
    var o3 = [];

    w.set(o1, 37);
    w.set(o2, "azerty");
    w.set(o3, undefined);

    console.log(w.get(o3)); // undefined, pois é o valor setado

    console.log(w.has(o1)); // true
    w.delete(o1);
    console.log(w.has(o1)); // false

}