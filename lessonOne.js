"use strict";

// Первое задание

let Tc = prompt("Введите градусы в Цельсиях")
let Tf = (9 / 5) * Tc + 32
alert(Tf);

// Второе задание

let admin = "Василий"
let name = admin
console.log(name);

// Третье задание

console.log(10 + 10 + "10"); //сначала идет сложение (10 + 10), потом конкатенация (20 + строка)
console.log(10 + "10" + 10); //сначала идет конкатенация (10 + строка), потом снова конкатенация (строка + 10)
console.log(10 + 10 + +"10"); //идет приведение строки "10" к числу, путем унарного +
console.log(10 / -""); //идет деление на ноль из-за унарного -
console.log(10 / +"2,5"); //строка "2,5" приведена к числу. Но так как дробные числа записываются через "2.5", то это не число.
// В свзи с чем деление числа на не число в итоге получается не число.