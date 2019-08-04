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