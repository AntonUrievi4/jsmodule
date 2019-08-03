/* 1.1 по выводу содержимого каждой переменной и типа каждой переменной

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

// 1.2 по созданию скрипта вывода квадрата числа

var pro = prompt("Квадрат числа", "Введите число");
alert("Квадрат = " + pro*pro);

// 2.1 сравнение разных типов данных с выводом сравнения и пояснением

var type_one = prompt("ВВедите первые данные");
var type_two = prompt("ВВедите вторые данные");
alert( type_one == type_two);

// 2.2 по выводу наибольшего числа

var nuber_one = prompt("Первое число");
var number_two = prompt("Второе число");

if (nuber_one > number_two) {
  alert("Большее число = " + nuber_one)
} else {
  alert("Большее число = " + number_two)
}

//2.3 по выводу букв алфавита

var letter_one = prompt("Введите первую букву");
var letter_two = prompt("Введите вторую букву");

if (letter_one < letter_two) {
    alert("Буква " + letter_one + " стоит раньше " + letter_two)
} else {
    alert("Буква " + letter_two + " стоит раньше " + letter_one)
}
*/

// 3.1

var user_name = prompt("Как вас зовут?");
var user_age = prompt("Сколько вам лет?")

var user = {
  name: user_name,
  age: user_age
}

console.log(user);

// 3.2.1

var colors = [];

for (var i = 4; i >= 0; i--) {
  colors[i] = prompt('Напишите цвет');
}
console.log(colors);

// 3.2.2

var colors = [];
var i = 4;
while ( i >= 0 ) {
  colors[i] = prompt('Напишите цвет');
  i--;
}
console.log(colors);

// 3.3

var mag = {};

for (var i = prompt('Количество товара'); i > 0; i--) {
  mag[i] = prompt("наименование");
}
console.log(mag);