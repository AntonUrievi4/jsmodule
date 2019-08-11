// 1.1 по выводу содержимого каждой переменной и типа каждой переменной

var one = 1984;
var two = "Second";
var three = true;
var four = null;
var five = undefined;

console.log("one = " + one + " type " + typeof one);
console.log("two = " + two + " type "  + typeof two);
console.log("three = " + three + " type " + typeof three);
console.log("four = " + four + " type " + typeof four);
console.log("five = " + five + " type " + typeof five);

// 1.2 по созданию скрипта вывода квадрата числа

var pro = prompt("Квадрат числа", "Введите число");
alert("Квадрат = " + pro*pro);