"use strict"

module.exports = function () {

    var sym = Symbol("descrição qualquer coisa");
    console.log(typeof sym); // Symbol
    
    var o = {
        val: 10,
        [Symbol("random")]: "Oi, sou um símbolo",
    };

    console.log(Object.getOwnPropertyNames(o)); // val

}