//Первое задание первая часть по выводу содержимого каждой переменной и типа каждой переменной

var one = 1984;
var two = "Second var";
var three = true;
var four = null;
var five = undefined;

console.log("one = " + one + " type " + typeof one);
console.log("two = " + two + " type "  + typeof two);
console.log("three = " + three + " type " + typeof three);
console.log("four = " + four + " type " + typeof four);
console.log("five = " + five + " type " + typeof five);

//Первое задание Вторая часть по созданию скрипта вывода квадрата числа

var pro = prompt("Квадрат числа", "Введите число");
alert("Квадрат = " + pro*pro);

//Второе задание первая часть

//Второе задание вторая часть по выводу наибольшего числа

var nuber_one = prompt("Первое число");
var number_two = prompt("Второе число");

if (nuber_one > number_two) {
  alert("Большее число = " + nuber_one)
} else {
  alert("Большее число = " + number_two)
}

//Второе задание третья часть по выводу букв алфавита

var letter_one = prompt("Введите первую букву");
var letter_two = prompt("Введите вторую букву");

if (letter_one < letter_two) {
    alert("Буква " + letter_one + " стоит раньше " + letter_two)
} else {
    alert("Буква " + letter_two + " стоит раньше " + letter_one)
}