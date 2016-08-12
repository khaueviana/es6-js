//Let
"use strict";

module.exports = function () {

     var a = 2;    
     {
         let a = 3;

         console.log(a); //3
     }

    console.log('1'); //2
}