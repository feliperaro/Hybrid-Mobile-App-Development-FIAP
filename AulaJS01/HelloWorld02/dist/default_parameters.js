"use strict";

function soma(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return a + b;
}

var ex1 = soma(10, 10);
var ex2 = soma(10);

console.log(ex1);
console.log(ex2);