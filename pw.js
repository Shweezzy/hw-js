let userNumber = Math.pow(prompt("Введите число", ""), 2);
alert(userNumber)
//
let userNumber = prompt("Введите первое число", "");
let userNextNumber = prompt("Введите второе число", "")
alert((+userNumber + +userNextNumber) / 2);
//
let userNumber = prompt("Введите первое число", "");
let userNextNumber = prompt("Введите второе число", "");
let plus = +userNumber + +userNextNumber;
let minus = +userNumber - +userNextNumber;
let multiplication = +userNumber * +userNextNumber;
let division = +userNumber / +userNextNumber;
alert(String(+plus + "-") + String(+minus + "-") + String(+multiplication + "-") + String(+division));
alert(plus + "-" + minus + "-" + multiplication + "-" + division);
//
let hours = prompt("Сколько часов?", "");
let minutes = prompt("Сколько минут?", "");
alert((23 - +hours + " : ") + (60 - +minutes + " минут ") + "до следущего дня")
//
let userNumber = prompt("Введите число", "");
if (userNumber > 0) {
    alert(userNumber + " - положительное");
} else if (userNumber < 0) {
    alert(userNumber + " - отрицательное");
} else {
    alert("ноль");
}
//
let userAge = prompt("Укажите возраст?", "");
if (userAge <= 0 || userAge >= 100) {
    alert("некорректность введенных данных");
} else {
    alert("Привет!");
}
//
let hours = prompt("Укажите часы", "");
let minutes = prompt("Укажите минуты", "");
if (+hours > 23 || +minutes >= 60) {
    alert("некорректность введенных данных");
} else {
    alert(hours + " : " + minutes + " - ваше время");
}
//