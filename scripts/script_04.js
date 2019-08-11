//4.1.1 Задание прошлого урока через функцию

function objUser() {
  var user_name = prompt('Как вас зовут?');
  var user_age = prompt('Сколько вам лет?');
    
  var user = {
    name: user_name,
    age: user_age,
  }
  return user;
}

console.log(objUser());

//4.1.2 Задание прошлого урока через функцию

function massColors() {
  var color = [];
  color[0] = prompt ('First Color');
  color[1] = prompt ('Second Color');
  color[2] = prompt ('Firth Color');
  color[3] = prompt ('Forth Color');
  color[4] = prompt ('Fifth Color');
  var reversedColor = color.reverse();
  return reversedColor;
}

console.log(massColors());

//4.2 Исправление ошибки текста



//4.3 Вырезать текст до слова кукушка

function coocoo () {
  var text = prompt('Текст с кукушкой');
  var cutter = 'кукушка';

  for (x = 0 ; x <= text.length ; x++ ) {
    var search = text.indexOf(cutter);
    
    if (search == -1) {
      result = text;
    }

    else {
     result = text.slice(0, search);  
    }     
  }

 return result;  
}

console.log(coocoo());