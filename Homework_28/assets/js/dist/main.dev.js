"use strict";

//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function sumNumbers() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var res = num1;

  if (num2 > num1) {
    while (num1 < num2) {
      num1++;
      res += num1;
    }

    document.getElementById("res").innerText = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(res);
  } else {
    document.getElementById("res").innerText = "\u0412\u0432\u0435\u0434\u0438 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430";
  }
} //Запросить 2 числа и найти только наибольший общий делитель.


function biggestDivider() {
  var num_1 = parseInt(document.getElementById("num_1").value);
  var num_2 = parseInt(document.getElementById("num_2").value);
  debugger;
  var result = '';

  if (num_1 % num_2 == 0) {
    result = num_2;
  } else if (num_2 % num_1 == 0) {
    result = num_1;
  } else {
    var divider = parseInt(num_1 < num_2 ? num_1 / 2 : num_2 / 2);

    while (divider >= result) {
      if (num_1 % divider == 0 && num_2 % divider == 0) {
        result = divider;
      }

      divider--;
    }
  }

  document.getElementById("res-div").innerText = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result);
} //Запросить у пользователя число и вывести все делители этого числа.


function allDividers() {
  var num = parseInt(document.getElementById("number").value);
  debugger;
  var res = "";

  for (var _i = 1; _i <= num; _i++) {
    if (num % _i == 0) {
      res += _i + ' ';
    }
  }

  document.getElementById("resu").innerHTML = "<p><b>\u0414\u0435\u043B\u0438\u0442\u0435\u043B\u0438:</b> ".concat(res, "</p>");
} //Определить количество цифр в введенном числе.


function numberQuantity() {
  var num = parseInt(document.getElementById('nqa').value);
  var count = 0;

  while (num != 0) {
    num = parseInt(num / 10);
    count++;
  }

  document.getElementById("count").innerText = "\u0412 \u0447\u0438\u0441\u043B\u0435 ".concat(count, " \u0446\u0438\u0444\u0440");
} //Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.


function tenNumbers() {
  var count_even = 0;
  var count_odd = 0;
  var count_pos = 0;
  var count_neg = 0;
  var count_null = 0;

  for (i = 1; i <= 10; i++) {
    var num = parseInt(prompt('Введи число'));

    if (num > 0) {
      count_pos++;

      if (num % 2 == 0) {
        count_even++;
      } else {
        count_odd++;
      }
    } else if (num < 0) {
      count_neg++;

      if (num % 2 == 0) {
        count_even++;
      } else {
        count_odd++;
      }
    } else if (num == 0) {
      count_null++;
    }

    document.getElementById("countn").innerText = "\u0427\u0435\u0442\u043D\u044B\u0445: ".concat(count_even, " \u043D\u0435\u0447\u0435\u0442\u043D\u044B\u0445: ").concat(count_odd, " \u043F\u043E\u043B\u043E\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445: ").concat(count_pos, " \u043E\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445: ").concat(count_neg, " \u043D\u0443\u043B\u0435\u0439: ").concat(count_null);
  }
} //Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.


function calculator() {
  debugger;
  var next;

  do {
    var num_1 = +document.getElementById("num-1").value;
    var num_2 = +document.getElementById("num-2").value;
    var res = '';
    var symb = document.getElementById("symb").value;

    switch (symb) {
      case '+':
        res = num_1 + num_2;
        break;

      case '-':
        res = num_1 - num_2;
        break;

      case '*':
        res = num_1 * num_2;
        break;

      case '/':
        if (num_2 != 0) {
          res = num_1 / num_2;
        } else {
          res = '0';
        }

        break;

      default:
        res = 'выбери действие';
    }

    document.getElementById("rslt").innerText = "".concat(res);
    next = confirm('посчитать еще?');
  } while (next);
}