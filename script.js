//  DZ1

alert('Hello world'); // Вывести любой текст

let admin, name; // Правильные переменные.

name = 'Макс';

admin = name;

console.log(admin); /* Вывести что-нибудь в консоль */ // Вывел имя Джон


let 1name;
                //Неправильные переменные.
let -name;






// DZ2

const myBirthday = '01.08.2003'; //создали константу , используем тип данных string
// при попытке изменить содержимое в const выдает ошибку

console.log(myBirthday);


let p = 3.14;
                  // используем тип данных number
console.log(p);


let name = prompt('Name');

let address = prompt('Address');

let phone = prompt('Phone');


let student = 'Djabrail';

let adress = 'Grozny Expo';

let tele = 8977-77-17-77;

console.log(Студент: ${name}, Адрес: ${address}, Номер: ${phone});     //создал переменные


let $ = 100;

let Rub = 1000;

console.log(Rub/$);


let a = 5, b = 10, c;

b = 9

c = ++a + b--;

console.log(c);







// DZ3

const num = prompt ('Какое число я загадал. PS: это число среди 1-10')

if (num < 10) {
    console.log('Мало');
}   else if(num > 10){
    console.log('Слишком много');
}   else {
    console.log('Правильно!');
}



let nameData = 'Джабраил';
let passwordData = '333';

let name = prompt('Логин?');
let password = prompt('Пароль?');

if(nameData === name && passwordData === password){
    console.log('Добро Пожаловать!');
}
    else{
    console.log('Неправильно');
}



let code = ''


switch(code){
    case('html'): 
    console.log('html');
    break;
    
    case('css'): 
    console.log('css');
    break;
    
    case('js'): 
    console.log('js');
    break;
    
    case('react'): 
    console.log('react');

    default:
    console.log('default');
}











// DZ4

function exercise (a) {
    if(a < 10){
        console.log('Константа меньше 10');
    } else{
        console.log('Константа не меньше 10');
    }
}
exercise(11);

function message() {
    alert('Hello world');
}
message()

function showMessage() {
    console.log('JavaScript');
}
showMessage();


let text = 'lorem';

function title() {
    if(text){
        console.log('У вас ошибка в тексте');
    } else{
        console.log(Содержимое переменной: ${text});
    }
}
title();


// Дополнительное задание по условным операторам    


let x = 10, y = 7;
let calcSum = x > y ? 'x больше, чем y' : 'x не больше, чем y'

console.log(calcSum);


let num = prompt ('Введите число');

if(num % 2 == 0){
    alert(Число ${ num} четное);
} else{
    alert(Число ${num} нечетное);
}


let num1 = prompt('Введите число')
let num2 = prompt('Введите число')
let num3 = prompt('Введите число')

if(num1 >= num2 && num1 >= num3){
    alert(num1 +  ' Максимальное число');
} else if(num2 >= num1 && num2 >= num3){
    alert(num2 + ' Максимальное число')
} else if(num3 >= num1 && num3 >= num2){
    alert(num3 + ' Максимальное число')
}







// DZ5


let name = 'Джабраил';  // тип данных string

const age = 19;      // тип данных number


if(age < 18){
    console.log('Доступ запрещен');
} 
else{
    console.log(Привет ${name});
}

function viewMoney () {
    console.log('Вот вам 10$');
}
viewMoney()

function getMoney(a = 399) {
    return (Вот вам ${a}$);
}
console.log(getMoney()); // возвращает Вот вам 399$


function calcSum(a) {
    console.log(a * a);
}
calcSum(12);


function calcNumber(a,b,c){

    if (a > b && a > c){
        console.log(a + ' Наибольшее число');
    } else if(b > a && b > c){
        console.log(b + ' Наибольшее число');
    } else if(c > a && c > b){
        console.log(c + ' Наибольшее число');
    }
}
calcNumber(1,3,2);


function discriminant(a, b, c){
    return result = (b**2)-(4*a*c)
}
console.log(discriminant(5,6,7));


function calcSumm(num1, num2){
    if((num1 % 2 == 0) && (num2 % 2 == 0)){
        return calc = num1 * num2
    } else if((num1 % 2 != 0) && (num2 % 2 != 0)){
        return calc = num1 + num2
    } else if(num1 % 2 != 0){
        return num1
    } else if(num2 % 2 != 0){
        return num2
    }
}
console.log(calcSumm(2, 5));









// DZ6

let man = {
    name: "Djabrail",
    family: "Elmurzaev",
    age: 16,
    growth: "175cm",
    login: "DJRLE",
    password: 333,

    address: {
        republic: "Chechen Republic",
        city: "Ahkinchu-Borzoi",
        street: "Krayneya",
    },
};

let proverka = prompt('Enter your password');
if(man.password == proverka){
    console.log(Welcome, ${man.name} ${man.family}. Your login: ${man.login});
} else{
    console.log(Your password ${proverka} not true);
}