// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function calcNum(input_1_id, input_2_id, result_id){
    debugger;
    let num_1 = document.getElementById(input_1_id);
    let num_2 = document.getElementById(input_2_id);
    if(num_1.value != '' && num_2.value != ''){
        let result = compareNum(num_1.value, num_2.value);
        printResult(result, result_id);
    } else {
        printError(`Введите оба числа!`, result_id)
    }
}

function compareNum(a, b){
    let res;
    if(parseInt(a) < parseInt(b)){
        res = '-1';
    } else if(parseInt(b) < parseInt(a)){
        res = '1';
    } else {
        res = '0';
    }
    return (res);
}

function printError(text, id){
    document.getElementById(id).innerHTML = `<span style="color:red;">${text}</span>`;
}

function printResult(res, id){
    document.getElementById(id).innerHTML = `<span style="color:#eb0ba0;"><b>Результат:  ${res}</b></span>`;
}

// Написать функцию, которая вычисляет факториал переданного ей числа.

function getFactorial(input_1_id, result_id) {
    debugger;
    let num = document.getElementById(input_1_id);
    if(num.value <= 20 && num.value != ''){
       let result = factorial(num.value);
       printResult(result, result_id);
    } else {
        printError(`Число отсутствует или слишком большое!`, result_id)
    }
}


function factorial(a){ // факториал числа
        let res=1, i=1;
        while(i<=a){
            res = res * i;
            i++;
        }
        return(res);
}

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.


// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

function calcArea(input_1_id, input_2_id, result_id){
    let side_1 = document.getElementById(input_1_id);
    let side_2 = document.getElementById(input_2_id);
    let area = getArea(side_1.value, side_2.value);
    printResult(area, result_id);
}

function getArea(a=0,b=0){ // площадь прямоугольника
    b=(b==0)?a:b;
    a=(a==0)?b:a;
    return a*b;
}

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

function isPerfectNumber(input_1_id, result_id){
    let num = document.getElementById(input_1_id);
    if(num.value != ''){
       let perf = getPerfectNumber(num.value)?printError(`совершенное число!`, result_id):
       printError(`не совершенное число!`, result_id);       
    } else {
        printError('Вы не ввели число!', result_id);
    }
}

function getPerfectNumber(a){ // совершенное число
    debugger;
    let res = 0;  
    for(i=1; i<=(a/2); i++){
       if(a % i ==0){
       res += i;
       }
    }
    let p = (res == a);
    return(p);
}

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

// function makePerfectLine(input_1_id, input_2_id, result_id){
//     debugger;
//     let min = document.getElementById(input_1_id);
//     let max = document.getElementById(input_2_id);
//     let res;
//     if(min.value < max.value){
//         for(i=min.value; i<=max.value; i++){
            
//             res += getPerfectNumber(i) + ' ';           
//         }
//         printResult(res, result_id);
//     } else {
//         printError('введите корректные числа', result_id)
//     }
// }

//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

function showTime(input_1_id,input_2_id,input_3_id,result_id){
    debugger;
    let hour = document.getElementById(input_1_id).value;
    let mins = document.getElementById(input_2_id).value;
    let second = document.getElementById(input_3_id).value;
    if(hour < 24 && mins < 60 && second < 60){
        let time = timeX(hour, mins, second);
        printResult(time, result_id);
    } else {
        printError('Введи корректные значения', result_id);
}
}

function addZero(n){
   return (n<10) ? "0" + n : n;
}

function timeX(h='',m='',s=''){
    return `${addZero(+h)}:${addZero(+m)}:${addZero(+s)}`;
}

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

function transformToSec(input_1_id,input_2_id,input_3_id,result_id){
    debugger;
    let hour = document.getElementById(input_1_id).value;
    let mins = document.getElementById(input_2_id).value;
    let second = document.getElementById(input_3_id).value;
    let s_trans = makeSec(hour,mins,second);
    printResult(s_trans, result_id);
}

function makeSec(h='',m='',s=''){
    return (h*3600)+(m*60)+(+s);
}

// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»