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

var pro = prompt("Квадрат числа", "Введите число");
alert("Квадрат = " + pro*pro);

var nuber_one = prompt("Первое число");
var number_two = prompt("Второе число");

if (nuber_one > number_two) {
  alert("Большее число" + nuber_one)
} else {
  alert("Большее число = " + number_two)
}