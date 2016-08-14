"use strict"

module.exports = function () {

    var pai = {
        foo() {
            console.log("Hello do Pai");
        }
    }

    var filho = {
        foo() {
            super.foo();
            console.log("Hello do Filho");
        }
    }

    Object.setPrototypeOf(filho, pai);
    filho.foo(); 
    // Hello do Pai
    // Hello do Filho

}