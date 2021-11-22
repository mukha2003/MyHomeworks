//Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

function whoYouAre(){
    let age = parseInt (document.getElementById("age").value);//переменная age - ищем элемент с id age применив метод .value получаем значение введенное пользователем и округляем его до целого parseInt
    let result;
    if(age <= 12){
        result = 'ребенок';
    }
    if(age > 12 && age <= 18){ //если возраст больше 12  и меньше 18
        result = 'подросток';
    }
    if(age > 18 && age <= 60){
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
    switch(number){
        case 1:
            symbol = "!";
            break;
        case 2:
            symbol = "@";
            break;
        case 3:
            symbol = "#";
            break;
        case 4:
            symbol = "$";
            break;
        case 5:
            symbol = "%";
            break;
        case 6:
            symbol = "^";
            break;    
        case 7:
            symbol = "&";
            break;
        case 8:
            symbol = "*";
            break;
        case 9:
            symbol = "(";
            break;
        case 0:
            symbol = ")";
            break;
        default:
            alert('Enter valid number!');
            break;
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
    if(result_1 == result_2 || result_1 == result_3 || result_2 == result_3){
        total = "Есть совпадение!";
    } else{
        total = "Нет совпадения!";
    }
    document.getElementById("result").innerText = `${total}`;
}

//Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function intercalaryYear(){
    let year = parseInt (document.getElementById("year").value);
    let kind;
    if(year > 9999){
        alert('Вы ввели некорректное число');
        return '';
    }
    if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
        kind = `${year} - этот год високосный`;
    } else{
        kind = `${year} - это обычный год`;
    }
    document.getElementById("year_kind").innerText = `${kind}`;
}

//Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

function isPalindrom(){
    debugger;
    let number = parseInt(document.getElementById("pal-num").value);
    let res;
    if(number > 99999 || number < 10000 ){
        alert('Введите корректное число!');
        return res = '';
    }
    let res_1 = parseInt(number / 10000);
    let res_2 = parseInt((number % 10000) / 1000);
    let res_4 = parseInt((number % 100) / 10);
    let res_5 = parseInt(number % 10);
    
    (res_1 == res_5 && res_2 == res_4) ? res = `Это палиндром!`: res = 'Это НЕ палиндром!';
    document.getElementById("is-pal").innerText = `${res}`;
}

//9) Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

function replace(){
    let number = +document.getElementById("num_5").value;
    let res_4 = parseInt(number / 10);
    let res_5 = parseInt(number % 10);
    let result;
    if(number > 99999 || number <10000) {
        alert('Введите корректное число!');
        return '';//при некорректном числе возвр пустую строку 
    } else {
        result = res_5 * 10000 + res_4;
    }
    document.getElementById("num_repl").innerText = result;
}

//10) Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

function totalSale(){
    let monthlySales = +document.getElementById("sale").value;
    let percent = (monthlySales / 100) * 10;
    let total = (250 + percent).toFixed(2);
    document.getElementById("total").innerHTML =`<p><b>Зарплата работника:</b> ${total}<span>&#36</span></p>`;
}

//Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

function convertCurr(){
    let num = +document.getElementById("hrn").value;
    let curr = +document.getElementById("curr").value;
    let rez = (num*curr).toFixed(2);
    document.getElementById("rez").innerText = `${rez}`;
}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
function getDiscount(){
    let sum = +document.getElementById("sum").value;
    let discount;
    if(sum < 200){
        alert('У вас нет скидки!');
        return '';
    } else if(sum >= 200 && sum < 300){
        alert('скидка 3%');
        discount = sum - (sum/100*3).toFixed(2);
    } else if (sum >= 300 && sum < 500){
        alert('скидка 5%');
        discount = sum - (sum/100*5).toFixed(2);
    } else if (sum >= 500){
        alert('скидка 7%');
        discount = sum - (sum/100*7).toFixed(2);
    } 
    document.getElementById('disc').innerText = `Сумма к оплате ${discount}`;
}

// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
function circulSquare(){
    let circle = +document.getElementById("circle").value;
    let square = +document.getElementById('square').value;
    let match;
    (circle/Math.PI<=square/4)?match="Поместится":match="Не поместится"; 
    document.getElementById("match").innerText = match;
}

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

function myQuiz() {
    let q_1 = +document.getElementById("q_1").value;
    let q_2 = +document.getElementById("q_2").value;
    let q_3 = +document.getElementById("q_3").value;
    let res = q_1 + q_2 + q_3;
    document.getElementById("quiz").innerText = res;
}

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
function nextDate(){
    debugger;
    let day = +document.getElementById("day").value;
    let month = +document.getElementById("month").value;
    let year = +document.getElementById("yr").value;
    let max_day = 31;
    if(day < max_day && (month ==1||month==3||month==5||month==7||month==8||month==10||month==12)){
        day += 1;
    }else if(day==max_day && (month ==1||month==3||month==5||month==7||month==8||month==10)) {
        day = 1; 
        month += 1;
    }else if(day==max_day && month==12){
        day = 1;
        month = 1;
        year += 1;
    }else if(day==28 && month == 2 && (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))){
        day += 1;
    }else if(day==28 && month == 2){
        day = 1;
        month +=1;
    }else if(day>28 && month==2){
        alert('ivalid date');
    }else if(day<30 && (month == 2||month==4||month==6||month==9||month==11)){
        day += 1;
    }else if(day==30 && (month == 2||month==4||month==6||month==9||month==11)){
        day = 1;
        month += 1;
    }else if(day >30 && (month == 2||month==4||month==6||month==9||month==11)){
        alert('ivalid date');
    }else if (day >31 && (month ==1||month==3||month==5||month==7||month==8||month==10||month==12)){
        alert('ivalid date');
    }
    document.getElementById("next_date").innerText = `${addZero(day)}.${addZero(month)}.${year}`;
}

function addZero(n){
    return (n<10)? "0"+n:n;
}



