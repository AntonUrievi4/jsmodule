// 3.1

var user_name = prompt('Как вас зовут?');
var user_age = prompt('Сколько вам лет?');

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

/*
var mag = {};

for (var i = prompt('Количество товара'); i > 0; i--) {
  mag[i] = prompt('Наименование');
}
console.log(mag);
*/

var mag = prompt('Количество товара');
var x = 0;

while (x < Number(mag)) {
  var product = {
    name: prompt('Наименование'),
    price: prompt('Цена'),
  }

  if (isNaN(product.price)) { 
    alert('Введите число!');
  }

  console.log(product);
  x++;
}