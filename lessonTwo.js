// Задание 1

/*
//пример 1
let a = 1, b = 1, c, d;
c = ++a; /!*Ответ такой, потому что а сначала увеличивается на единицу, а потом С присваивается значение*!/
alert(c); // ответ: 2

//пример 2
d = b++; /!*Ответ такой, потому что b сначала присваивается D, а потом инкрементируетяся.*!/
alert(d); //ответ: 1

//пример 3
c = 2 + ++a; /!*A увеличивается на единицу (при том что переменная уже равна 2), а потом + 2*!/
alert(c); //ответ: 5

//пример 4
d = 2 + b++; /!*B уже равно 2, 2 + 2 = 4*!/
alert(d); //ответ: 4

alert(a); //3 результат предидущих действий над переменной
alert(b); //3 результат предидущих действий над переменной*/


// Задание 2

// Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
// (описать последовательность действий).
/*let a = 2;
let x = 1 + (a *= 2);
alert(a);
alert(x);*/

// x = 5, a = 4
/*
1. в скобках a = 2 * 2
2. x = 1 + 4*/

// Задание 3

/*
let a = -4;
let b = -6;

function math(c,d) {
    if (c >= 0 && d >= 0){
        alert(c - d);
    }
    else if (c < 0 && d < 0){
        alert(c * d);
    }else alert(a + b);
}

math(a,b)*/

//Задание 4

function multi(a, b) {
    return (a * b);
}

function div(a, b) {
    return (a / b);
}

function addition(a, b) {
    return (a + b);
}

function sub(a, b) {
    return (a - b);
}

//Задание 5

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            alert(addition(arg1, arg2))
            break;
        case "-":
            alert(sub(arg1, arg2))
            break;
        case "*":
            alert(multi(arg1, arg2))
            break;
        case "/":
            alert(div(arg1, arg2))
            break;
        default: alert("Нет такой математической операции")
    }
}

mathOperation(5,3,"+")



