"use strict";

//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
function whoYouAre() {
  var age = parseInt(document.getElementById("age").value); //переменная age - ищем элемент с id age применив метод .value получаем значение введенное пользователем и округляем его до целого parseInt

  var result;

  if (age <= 11) {
    result = 'ребенок';
  }

  if (age >= 12 && age <= 17) {
    //если возраст больше 12  и меньше 18
    result = 'подросток';
  }

  if (age >= 18 && age <= 59) {
    result = 'взрослый';
  }

  if (age > 60) {
    result = 'пенсионер';
  } // result = (age < 11) ? 'ребенок' :
  //         (age < 18) ? 'подросток' :
  //         (age < 60) ? 'взрослый' :
  //         (age > 60) ? 'пенсионер':


  document.getElementById("res").innerText = "\u0412\u044B: ".concat(result, "!"); //берем id res и методом innerText вставляем result
} //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).


function yourSymbol() {
  var number = parseInt(document.getElementById("symbol").value); //получаем значение введенное пользователем методом .value в элемент с id symbol

  var symbol;

  if (number == 1) {
    symbol = "!";
  }

  if (number == 2) {
    symbol = "@";
  }

  if (number == 3) {
    symbol = "#";
  }

  if (number == 4) {
    symbol = "$";
  }

  if (number == 5) {
    symbol = "%";
  }

  if (number == 6) {
    symbol = "^";
  }

  if (number == 7) {
    symbol = "&";
  }

  if (number == 8) {
    symbol = "*";
  }

  if (number == 9) {
    symbol = "(";
  }

  document.getElementById("your-symbol").innerText = "\u0421\u043F\u0435\u0446\u0446\u0441\u0438\u043C\u0432\u043E\u043B: ".concat(symbol);
} //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.


function sameNumbers() {
  var number = parseInt(document.getElementById("number123").value);

  if (number > 999 || number < 100) {
    alert('Вы ввели некорректное число!');
    return "";
  }

  var result_1 = parseInt(number / 100);
  var result_2 = parseInt(number % 100 / 10);
  var result_3 = parseInt(number % 10);
  var total;

  if (result_1 == result_2) {
    total = "Есть совпадение!";
  } else if (result_1 == result_3) {
    total = "Есть совпадение!";
  } else if (result_2 == result_1) {
    total = "Есть совпадение!";
  } else if (result_2 == result_3) {
    total = "Есть совпадение!";
  } else {
    total = "Нет совпадения!";
  }

  document.getElementById("result").innerText = "".concat(total);
} //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.


function intercalaryYear() {
  var year = parseInt(document.getElementById("year").value); //

  var kind;

  if (year > 9999) {
    alert('Вы ввели некорректное число');
    return '';
  }

  if (year % 400 == 0) {
    kind = "".concat(year, " - \u044D\u0442\u043E\u0442 \u0433\u043E\u0434 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439");
  } else if (year % 4 == 0 && year % 100 > 0) {
    kind = "".concat(year, " - \u044D\u0442\u043E\u0442 \u0433\u043E\u0434 \u0432\u0438\u0441\u043E\u043A\u043E\u0441\u043D\u044B\u0439");
  } else {
    kind = "".concat(year, " - \u044D\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u0433\u043E\u0434");
  }

  document.getElementById("year_kind").innerText = "".concat(kind);
} //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


function isPalindrom() {
  var number = parseInt(document.getElementById("pal-num").value);
  var res;

  if (number > 99999 || number < 10000) {
    alert('Введите корректное число!');
    return res;
  }

  var res_1 = parseInt(number / 10000);
  var res_2 = parseInt(number % 10000 / 1000);
  var res_3 = parseInt(number % 1000 / 100);
  var res_4 = parseInt(number % 100 / 10);
  var res_5 = parseInt(number % 10);

  if (res_1 == res_5 && res_2 == res_4) {
    res = "\u042D\u0442\u043E \u043F\u0430\u043B\u0438\u043D\u0434\u0440\u043E\u043C!";
  } else {
    res = 'Это НЕ палиндром!';
  }

  document.getElementById("is-pal").innerText = "".concat(res);
} //9) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).


function replace() {
  var number = +document.getElementById("num_5").value;
  var result;

  if (number > 99999 || number < 10000) {
    alert('Введите корректное число!');
    return ''; //при некорректном числе возвр пустую строку 
  }

  var res_1 = parseInt(number / 10000);
  var res_2 = parseInt(number % 10000 / 1000);
  var res_3 = parseInt(number % 1000 / 100);
  var res_4 = parseInt(number % 100 / 10);
  var res_5 = parseInt(number % 10);
  document.getElementById("num_repl").innerText = "".concat(res_5).concat(res_1).concat(res_2).concat(res_3).concat(res_4);
} //10) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.


function totalSale() {
  var monthlySales = +document.getElementById("sale").value;
  var percent = monthlySales / 100 * 10;
  var total = 250 + percent;
  document.getElementById("total").innerHTML = "<p><b>\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430:</b> ".concat(total, "<span>&#36</span></p>");
} //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.