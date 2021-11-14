//Подсчитать сумму всех чисел в заданном пользователем диапазоне.
function sumNumbers() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let res = num1;
    if (num2 > num1) {
        while (num1 < num2) {
            num1++;
            res += num1;
        }
        document.getElementById("res").innerText = `Результат: ${res}`;
    } else {
        document.getElementById("res").innerText = `Введи корректные числа`;
    }
}

//Запросить 2 числа и найти только наибольший общий делитель.

function biggestDivider() {
    let num_1 = parseInt(document.getElementById("num_1").value);
    let num_2 = parseInt(document.getElementById("num_2").value);
    debugger;
    let result = '';
    if (num_1 % num_2 == 0) {
        result = num_2;
    } else if (num_2 % num_1 == 0) {
        result = num_1;
    } else {
        let divider = parseInt((num_1 < num_2) ? num_1 / 2 : num_2 / 2);
        while (divider >= result) {
            if (num_1 % divider == 0 && num_2 % divider == 0) {
                result = divider;
            }
            divider--;
        }
    }
    document.getElementById("res-div").innerText = `Результат: ${result}`;
}

//Запросить у пользователя число и вывести все делители этого числа.

function allDividers() {
    let num = parseInt(document.getElementById("number").value);
    debugger;
    let res = "";
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            res += i + ' ';
        }
    }
    document.getElementById("resu").innerHTML = `<p><b>Делители:</b> ${res}</p>`;
}

//Определить количество цифр в введенном числе.

function numberQuantity() {
    let num = parseInt(document.getElementById('nqa').value);
    let count = 0;
    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    document.getElementById("count").innerText = `В числе ${count} цифр`;
}

//Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
function tenNumbers() {
    let count_even = 0;
    let count_odd = 0;
    let count_pos = 0;
    let count_neg = 0;
    let count_null = 0;
    for (i = 1; i <= 10; i++) {
        let num = parseInt(prompt('Введи число'));
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

        document.getElementById("countn").innerText = `Четных: ${count_even} нечетных: ${count_odd} положительных: ${count_pos} отрицательных: ${count_neg} нулей: ${count_null}`;
    }
}

//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

function calculator(){
    debugger;
    let num_1 = +document.getElementById("num-1").value;
    let num_2 = +document.getElementById("num-2").value;
    let res;
    let symb = document.getElementById("symb").value;
    let next;
    do{      
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
                if(num_2!=0){
                res = num_1 / num_2;
                }else{
                    res = '0';
                }
                break;    
            default:
                res = 'выбери действие';     
        }
        document.getElementById("rslt").innerText = `${res}`;
        next = confirm('посчитать еще?');
    }
    while(next);  
}