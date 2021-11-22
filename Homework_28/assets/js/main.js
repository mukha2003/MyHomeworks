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

        document.getElementById("countn").innerText = `Четных: ${count_even}, нечетных: ${count_odd}, положительных: ${count_pos}, отрицательных: ${count_neg}, нулей: ${count_null}`;
    }
}

//Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

function calculator_1(){
    let again;
    do {
    let num_1 = +prompt('Введи число');
    let num_2 = +prompt('Введи еще число');
    let symb = prompt('введи знак + - * или /');
    let res = '';
    switch(symb){
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
            res = num_1 / num_2;
            break;
        default:
            res = 'Выбери действие';    
        }
        prompt('Результат: ' + res);
        again = confirm('хочешь еще?');
    } 
    while(again);
}

// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
function shiftMe(){
    let num = parseInt(document.getElementById('numb').value);
    let shift = parseInt(document.getElementById('sh').value);
    let k = Math.pow(10, (count(num) - shift));
    let part_1 = parseInt(num / k);
    let part_2 = num%k;
    // let k = Math.pow(10, (shift)); так, как на уроке полцчается сдвиг не по условию задачи
    // let part_1 = parseInt(num / k);
    // let part_2 = num%k;
    let res = part_2*(Math.pow(10,count(part_1)))+part_1;
    
    document.getElementById("summ").innerText = res;

}

function count(n){
    let i=0;
    while(n>1){
        n /= 10;
        i++;
    }
    return i;
}

// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
function weekDays(){
let week = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
let i = new Date().getDay();
do {
    alert(week[i]);
    i++;
    i=i<week.length?i:0;
    ask = confirm('Хотите еще?')  
}while(ask);
}
// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
function multiplTable(){
    let res = '';
    for(i=2;i<=9;i++){  
        res += `<br>`;
        for(j=1;j<=10;j++){
            res += `${i}*${j} = ${j*i}<br>`;           
        }            
    }
    document.getElementById("mult").innerHTML = res;
}

function multTable (){
        let table = `<table class="my_table">
                    <tbody>`;
                    for(let i=2;i<=9;i++){
                        table += `<tr>`; 
                        for(let j=1;j<=10;j++){
                            table += `<td style="padding: 10px; border: 1px solid #000;">${j} * ${i} =${i*j}</td>`;
                        }
                        table += `</tr>`
                    }
               table +=`</tbody>
               </table>`;     
        document.getElementById('mult').innerHTML = table;
    }
// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
function numberGame(){  
    let max = 100;
    let min = 0;
    confirm('Загадай число от 0 до 100');
    while(true){
        let num = Math.floor((min+max)/2);
        let res = prompt(`Твое число >, < или = ${num}?`);
        if(res == ">"){
            min = num;
        }else if(res == "<"){
            max = num;
        }else{
            alert(`Ура, твое число ${num}!`) 
            break;
        }
    } 
}    
