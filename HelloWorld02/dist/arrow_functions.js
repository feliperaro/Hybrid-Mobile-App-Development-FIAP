"use strict";

var func1 = function minhaFuncao() {
    console.log("Exemplo de function Expression");
};
func1();

var func2 = function func2() {
    console.log("Exemplo de função anônima");
};
func2();

var func3 = function func3() {
    return console.log("Exemplo de arrow function");
};
func3();

var func4 = function func4(_) {
    return console.log("Outro exemplo de arrow fubnction sem parâmetros!");
};
func4();