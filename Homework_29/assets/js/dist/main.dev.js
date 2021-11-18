"use strict";

// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
function calcNum(input_1_id, input_2_id, result_id) {
  debugger;
  var num_1 = document.getElementById(input_1_id);
  var num_2 = document.getElementById(input_2_id);

  if (num_1.value != '' && num_2.value != '') {
    var result = compareNum(num_1.value, num_2.value);
    printResult(result, result_id);
  } else {
    printError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0431\u0430 \u0447\u0438\u0441\u043B\u0430!", result_id);
  }
}

function compareNum(a, b) {
  var res;

  if (parseInt(a) < parseInt(b)) {
    res = '-1';
  } else if (parseInt(b) < parseInt(a)) {
    res = '1';
  } else {
    res = '0';
  }

  return res;
}

function printError(text, id) {
  document.getElementById(id).innerHTML = "<span style=\"color:red;\">".concat(text, "</span>");
}

function printResult(res, id) {
  document.getElementById(id).innerHTML = "<span style=\"color:#eb0ba0;\"><b>\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442:  ".concat(res, "</b></span>");
} // Написать функцию, которая вычисляет факториал переданного ей числа.


function getFactorial(input_1_id, result_id) {
  var num = document.getElementById(input_1_id);

  if (num.value <= 20 && num.value != '') {
    var result = factorial(num.value);
    printResult(result, result_id);
  } else {
    printError("\u0427\u0438\u0441\u043B\u043E \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043B\u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435!", result_id);
  }
}

function factorial(a) {
  // факториал числа
  var res = 1,
      i = 1;

  while (i <= a) {
    res = res * i;
    i++;
  }

  return res;
} // Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.


function calcArea(input_1_id, input_2_id, result_id) {
  var side_1 = document.getElementById(input_1_id);
  var side_2 = document.getElementById(input_2_id);
  var area = getArea(side_1.value, side_2.value);
  printResult(area, result_id);
}

function getArea() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // площадь прямоугольника
  b = b == 0 ? a : b;
  a = a == 0 ? b : a;
  return a * b;
} // Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.


function isPerfectNumber(input_1_id, result_id) {
  var num = document.getElementById(input_1_id);

  if (num.value != '') {
    var perf = getPerfectNumber(num.value) ? printError("\u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E!", result_id) : printError("\u043D\u0435 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E!", result_id);
  } else {
    printError('Вы не ввели число!', result_id);
  }
}

function getPerfectNumber(a) {
  // совершенное число
  debugger;
  var res = 0;

  for (i = 1; i <= a / 2; i++) {
    if (a % i == 0) {
      res += i;
    }
  }

  var p = res == a;
  return p;
} // Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 


function makePerfectLine(input_1_id, input_2_id, result_id) {
  var min = document.getElementById(input_1_id);
  var max = document.getElementById(input_2_id);
} // Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»