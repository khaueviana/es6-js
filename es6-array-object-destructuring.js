"use strict"

module.exports = function () {    

    function foo() {
        return [1, 2, 3];
    }
    let arr = foo(); // [1,2,3]

    let [a1, b1, c1] = foo();
    console.log(a1, b1, c1); // 1 2 3

/**************************************************/    

    function bar() {
        return {
            x: 4,
            y: 5,
            z: 6
        };
    }
    
    let { x: a, y: b, z: c } = bar();
    console.log(a, b, c); // 4 5 6

}