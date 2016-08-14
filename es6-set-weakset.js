"use strict"

module.exports = function () {

    //set

    // Objetos do tipo Set são coleções de valores únicos. Valores duplicados são ignorados, pois a coleção 
    //deve possuir apenas valores únicos. 
    //Os valores podem ser primitivos ou referências a objetos.

    let mySet = new Set([1, 1, 2, 2, 3, 3]);
    mySet.size; // 3
    mySet.has(1); // true
    mySet.add('strings');
    mySet.add({ a: 1, b: 2 });

    //Você pode iterar sobre um objeto do tipo set por ordem de inserção, usando ou forEach, ou for...of.
    //Objetos do tipo set também tem os métodos delete() e clear() .

    mySet.forEach((item) => {
        console.log(item);
        // 1
        // 2
        // 3
        // 'strings'
        // Object { a: 1, b: 2 }
    });

    for (let value of mySet) {
        console.log(value);
        // 1
        // 2
        // 3
        // 'strings'
        // Object { a: 1, b: 2 }
    }

    /***********************************************************************************************/

    // WeakSet
    // Parecido com o WeakMap, o WeakSet permite que você armazene de forma fraca objetos em uma coleção. 
    // Um objeto no WeakSet só ocorre uma vez; ele é único na coleção do WeakSet.

    var ws = new WeakSet();
    var obj = {};
    var foo = {};

    ws.add(obj);

    console.log(ws.has(obj)); // true
    console.log(ws.has(foo));    // false, foo não foi adicionado ao set

    ws.delete(obj); // remove array do set
    console.log(ws.has(obj));    // false, array foi removido

}