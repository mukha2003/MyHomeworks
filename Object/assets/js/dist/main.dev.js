"use strict";

// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:
// Висновок на екран з інформацією про автомобіль.
// Додавання водія, який має право керувати автомобілем.
// Заправка автомобіля.
// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
// let container = document.createElement('div');
// container.classList.add('container');
// document.body.append(container);
// let carList = document.createElement('table');
// container.append(carList);
var CAR = {
  brand: 'Kia',
  model: 'Sportage',
  year: '2012',
  'average speed': '80km/h',
  tank: '56l',
  remain: '0',
  'average consume': '13l',
  drivers: ['Vasya', ' Petro']
};

function printList(obj) {
  var car_html = '<dl>';

  for (var key in obj) {
    car_html += "<dt>".concat(key, "</dt>\n       <dd>").concat(CAR[key], "</dd>");
  }

  car_html += '</dl>';
  document.getElementById('car').innerHTML = car_html;
}

function addDriver(dr_id) {
  var driver = document.getElementById(dr_id).value;

  if (driver != "") {
    CAR.drivers.push(" " + driver);
    document.getElementById(dr_id).value = "";
    panel.success('Driver added', true);
  }
}

function addFuel(fuel_id) {}