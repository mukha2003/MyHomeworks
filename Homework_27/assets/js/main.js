//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

function whoYouAre(){
    let age = parseInt (document.getElementById("age").value);//переменная age - ищем элемент с id age применив метод .value получаем значение введенное пользователем и округляем его до целого parseInt
    let result;
    if(age <= 11){
        result = 'ребенок';
    }
    if(age >= 12 && age <= 17){ //если возраст больше 12  и меньше 18
        result = 'подросток';
    }
    if(age >= 18 && age <= 59){
        result = 'взрослый';
    }
    if(age > 60){
        result = 'пенсионер';
    }

    document.getElementById("res").innerText = `Вы: ${result}!`; //берем id res и методом innerText вставляем result
}

//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
function yourSymbol(){
    let number = parseInt (document.getElementById("symbol").value);//получаем значение введенное пользователем методом .value в элемент с id symbol
    let symbol;
    if(number == 1){
        symbol = "!";
    }
    if(number == 2){
        symbol = "@";
    }
    if(number == 3){
        symbol = "#";
    }
    if(number == 4){
        symbol = "$";
    }
    if(number == 5){
        symbol = "%";
    }
    if(number == 6){
        symbol = "^";
    }
    if(number == 7){
        symbol = "&";
    }
    if(number == 8){
        symbol = "*";
    }
    if(number == 9){
        symbol = "(";
    }

    document.getElementById("your-symbol").innerText = `Спеццсимвол: ${symbol}`;
}

//Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

function sameNumbers(){
    let number = parseInt (document.getElementById("number123").value);
    if(number > 999 || number < 100){
        alert('Вы ввели некорректное число!');
        return "";
    }
   
    let result_1 = parseInt((number / 100));
    let result_2 = parseInt((number % 100) / 10);
    let result_3 = parseInt(number % 10);
    let total;
    
    if(result_1 == result_2){
        total = "Есть совпадение!";
    }
    else if(result_1 == result_3){
        total = "Есть совпадение!";
    }
    else if(result_2 == result_1){
        total = "Есть совпадение!";
    }
    else if(result_2 == result_3){
        total = "Есть совпадение!";
    }
    else{
        total = "Нет совпадения!";
    }
    document.getElementById("result").innerText = `${total}`;
}

//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function intercalaryYear(){
    let year = parseInt (document.getElementById("year").value);
    //
    let kind;
    if(year > 9999){
        alert('Вы ввели некорректное число');
        return '';
    }
    if(year % 400 == 0){
        kind = `${year} - этот год високосный`;
    }
    else if(year % 4 == 0 && year % 100 > 0){
        kind = `${year} - этот год високосный`;
    }
    else{
        kind = `${year} - это обычный год`;
    }
    document.getElementById("year_kind").innerText = `${kind}`;
}

//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

function isPalindrom(){
    let number = parseInt(document.getElementById("pal-num").value);
    let res;
    if(number > 99999 || number < 10000 ){
        alert('Введите корректное число!');
        return res;
    }

    let res_1 = parseInt(number / 10000);
    let res_2 = parseInt((number % 10000) / 1000);
    let res_3 = parseInt((number % 1000) / 100);
    let res_4 = parseInt((number % 100) / 10);
    let res_5 = parseInt((number % 10));
    
    if(res_1 == res_5 && res_2 == res_4){
        res = `Это палиндром!`;
    }
    else {
        res = 'Это НЕ палиндром!';
    }
    
    document.getElementById("is-pal").innerText = `${res}`;
}

//9) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

function replace(){
    let number = +document.getElementById("num_5").value;
    let result;
    if(number > 99999 || number <10000) {
        alert('Введите корректное число!');
        return '';//при некорректном числе возвр пустую строку 
    }
    let res_1 = parseInt(number / 10000);
    let res_2 = parseInt(number % 10000 / 1000);
    let res_3 = parseInt(number % 1000 / 100);
    let res_4 = parseInt(number % 100 / 10);
    let res_5 = parseInt(number % 10);

    document.getElementById("num_repl").innerText = `${res_5}${res_1}${res_2}${res_3}${res_4}`;
}

//10) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

function totalSale(){
    let monthlySales = +document.getElementById("sale").value;
    let percent = (monthlySales / 100) * 10;
    let total = 250 + percent;
    document.getElementById("total").innerHTML =`<p><b>Зарплата работника:</b> ${total}<span>&#36</span></p>`;
}

//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.


