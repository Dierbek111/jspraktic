// // 1) 
// let name = prompt('как тебя зовут?') 
// let age = +prompt('how old are you?') 
// let city = prompt('в каком городе ты живешь?') 
 
// alert(' привет, ' + name + ' ! ' + ' тебе ' + age + ' лет ! ' + ' ты живешь в '+ city ); 
 
// // 2) 
 
// let num1 = +prompt("Введите первое число"); 
// let num2 = +prompt("Введите второе число"); 
 
// if (num1 < num2) { 
//   alert("первое число меньше второго"); 
// } else if (num1 > num2) { 
//   alert("первое число больше второго"); 
// } else { 
//   alert("числа равны"); 
// } 
 
// // 3 
// let number = Math.floor(Math.random() * 11) 
// let guess = +prompt('Угадай число от 1 до 10') 
 
// if(guess == 52){ 
//     alert('St.Peterburg') 
// } 
// else{ 
//     alert('Не угадал лузер') 
// } 
// alert(number) 
 
// let number1 = +prompt('Введите число') 
 
// if (number1 % 2 == 0){ 
//     alert('это четное число') 
// } 
// else{ 
//     alert(number1 + ' это нечетное число') 
// } 
// a = +prompt('введи любое число желательно 52') 
// b = +prompt('введи любое число ') 
 
// let multiply = (a, b) => { 
// alert( a * b ) 
// } 
// multiply(a,b) 
// let user = { 
//     name: prompt('Как тебя зовут?'), 
//     age: +prompt('сколько тебе лет?') 
// } 
// console.log(user); 
 
// let list  = [] 
 
// for (let i = 1; i <= 3; i++){ 
//     let product = prompt('Введите продукт') 
//     list.push(product) 
// } 
// console.log(list);
let num11 = parseFloat(prompt("Введите первое число:"));
let num22 = parseFloat(prompt("Введите второе число:"));
let num33 = parseFloat(prompt("Введите третье число:"));

// Находим самое большое число и его номер
let maxNum;
let position;

if (num11 >= num22 && num11 >= num33) {
    maxNum = num11;
    position = "первое";
} else if (num22 >= num11&& num22 >= num33) {
    maxNum = num22;
    position = "второе";
} else {
    maxNum = num33;
    position = "третье";
}

// Выводим результат в консоль
console.log(`Самое большое число: ${maxNum}, это ${position} число.`);
alert(`Самое большое число: ${maxNum}, это ${position} число.`);