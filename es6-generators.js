"use strict"

module.exports = function () {

    function* numerosInfinitos() {
        var n = 1;
        while (true) {
            yield n++;
        }
    }

    var numbers = numerosInfinitos(); // retorna um objeto iterável

    console.log(numbers.next()); // { value: 1, done: false }
    console.log(numbers.next()); // { value: 2, done: false }
    console.log(numbers.next()); // { value: 3, done: false }
}