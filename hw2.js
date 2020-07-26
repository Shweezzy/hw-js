let userAge = prompt("Укажите возраст?", "");
if (userAge <= 2) {
    alert("ребенок");
} else if (userAge >= 12 && userAge <= 18) {
    alert("подросток");
} else if (userAge >= 18 && userAge <= 60) {
    alert("взрослый");
} else if (userAge >= 60) {
    alert("пенсионер");
}
//
let userNumber = prompt("Укажите ваше число", "");
if (userNumber == 0) {
    alert("!");
} else if (userNumber == 1) {
    alert("☺");
} else if (userNumber == 2) {
    alert("☻");
} else if (userNumber == 3) {
    alert("♥");
} else if (userNumber == 4) {
    alert("♦");
} else if (userNumber == 5) {
    alert("♣");
} else if (userNumber == 6) {
    alert("♠");
} else if (userNumber == 7) {
    alert("•");
} else if (userNumber == 8) {
    alert("◘");
} else if (userNumber == 9) {
    alert("○");
}
//
let userNumber = prompt("Трехзначное число", "");
if (userNumber[0] == userNumber[1] && userNumber[0] == userNumber[2] && userNumber[1] == userNumber[2]) {
    alert("Наявны одинаковые цифры");
} else {
    alert("Число подходит!");
}
//
let leapYear = prompt("Введите год", "");
if (leapYear % 4 == 0 && leapYear % 100 != 0 || leapYear % 400 == 0) {
    alert("Год является высокосным");
} else {
    alert("Год не высоконый!");
}
//
let palindrome = prompt("Пятизначне число", "");
if (palindrome[0] === palindrome[4] && palindrome[1] === palindrome[3]) {
    alert(`${palindrome} - является палиндромом!`);
} else {
    alert("Число не является палиндромом!");
}
=============================================================================
let number = prompt('Введите число от 10000 до 99999', 0);
    number = number + '';
    if (number === number.split('').reverse().join(''))
        alert(`${number} = палидром`);
    else
        alert(`${number} = не палидром`);
//
let currencyUsd = prompt("Желаемая сумма для обмена", "");
let currency = prompt("Выберите валюту", "EUR UAH AZN ");
let currencyEur = 0.92;
let currencyUah = 24.42;
let currencyAzn = 1.7;
if (currency == "EUR" || currency == "eur" || currency == "Eur") {
    alert(`Сумма обмена = ${Number(currencyUsd) * Number(currencyEur)}`);
} else if (currency == "UAH" || currency == "uah" || currency == "Uah") {
    alert(`Сумма обмена = ${Number(currencyUsd) * Number(currencyUah)}`);
} else if (currency == "AZN" || currency == "azn" || currency == "Azn") {
    alert(`Сумма обмена = ${Number(currencyUsd) * Number(currencyAzn)}`);
}
=============================================================================
let userSum = prompt('Введите сумму USD:', 0);
    let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
    switch(currency) {
        case '1':
            alert(userSum*0.92 + 'EUR');
            break;
        case '2':
            alert(userSum*24.42 + 'UAH');
            break;
        case '3':
            alert(userSum*1.7 + 'AZN');
            break;
    }
//
let price = prompt("Введите сумму покупки", "");
if (price >= 200 && price <= 300) {
    alert(`Скидка сотавляет 3% = ${Math.floor(Number(price) * 0.03)}`);
} else if (price >= 301 && price <= 500) {
    alert(`Скидка сотавляет 5% = ${Math.floor(Number(price) * 0.05)}`);
} else if (price >= 501) {
    alert(`Скидка сотавляет 7% = ${Math.floor(Number(price) * 0.07)}`);
}
//
let circumFerence = prompt("Введите длину окружности", "");
let perimeterSquare = prompt("Введите периметр квадрата ", "");
if (Number(perimeterSquare) <= Number(circumFerence) / 2) {
    alert(" такая окружность поместится в указанный квадрат");
} else {
    alert(" такая окружность не поместится в указанный квадрат");
}
//
let questionHospital = prompt('Якi є основнi структурнi пiдроздiли дитячої лiкарнi? 1 - Полiклiнiка i стацiонар 2 - Диспансер 3 - Полiклiнiка');
let leukemia = prompt('Якi результати пiдрахунку мiєлограми вказують на лекемію? 1 - 30% бластних 2 - 20% бластних 3 - 10% бластних');
let chancre = prompt('Коли серологiчнi реакцiї стають позитивними пiсля появи твердого шанкру? 1 - 5-6 тижнi 2 - 4-5 тижнi 3 - 3-4 тижнi');
let score = 0;
if (questionHospital == 1)
    score += 2;
if (leukemia == 1)
    score += 2;
if (chancre == 3)
    score += 2;
alert('Your score is ' + score);
//
let date = prompt('Enter the date - day-month-year ');
date = date.split('-');
let lastDate = new Date(date[2], date[1] - 1, date[0]); //зміг тільки так, і то не докінця розірався
lastDate.setDate(lastDate.getDate() + 1);
alert(lastDate);