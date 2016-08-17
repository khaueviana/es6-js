"use strict"

module.exports = function () {

    var arr = [11, 12, 13];
    var itr = arr[Symbol.iterator]();

    console.log(itr.next()); // { value: 11, done: false }
    console.log(itr.next()); // { value: 12, done: false }
    console.log(itr.next()); // { value: 13, done: false }
    console.log(itr.next()); // { value: undefined, done: true }
}