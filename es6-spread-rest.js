"use strict"

module.exports = function () {

    //spread
    function foo1(x, y, z) {
        console.log(x, y, z);
    }

    let arr = [1, 2, 3];
    foo1(...arr); // 1 2 3

    //rest
    function foo2(...args) {
        console.log(args);
    }

    foo2(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
}