// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }


// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }



//1 - задание
function returnNumber(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else return 0;
}

function returnNumber(a, b) {
    if (a === b) return 0;

    return a < b ? -1 : 1;
}

//2 - задание

function factorial(number) {
    let num = 1
    for (let i = 1; i <= number; i++) {
        num = num * i
    }
    return num
}
//3 - задание

function sumNumbers() {
    let stringForNumbers = '';

    for (let i = 0; i < arguments.length; i++) {
        stringForNumbers = stringForNumbers + arguments[i].toString();
    }

    return parseInt(stringForNumbers);
}
//4 - задание

function square(a, b) {
    let s = a * b;
    if (a === 0) {
        s = 4 * b
    }

    return s
}
//5 - задание

function num() {
    let num = +prompt("", );
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function numberPerfect(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    return sum === number;
}
//6 - задание
function findNumbers(from, to) {
    let numbers = " ";

    for (let i = from; i <= to; i++) {
        if (numberPerfect(i)) {
            numbers = numbers + i + " ";
        }
    }

    return numbers;
}
// function findPerfectNumber(from, to) {

//     for (let i = from; i <= to; i++) {
//         if (i == isNumberPerfect()) {
//             alert(from);
//         }
//     }
//     return from;
// }

//7 - задание
// function time() {
//     if (displayTime(h) > 11) {
//         displayTime(h) = displayTime(h) - 12;
//     }
//     if (displayTime(m) > 60) {
//         displayTime(m) = displayTime(h) - 60;
//     }
// }

// function displayTime(h, m, s) {
//     h = +prompt("", "Сколько часов? 0-24");
//     m = +prompt("", "Сколько минут? 0-60");
//     s = +prompt("", "Сколько секунд? 0-60");
//     if (h > 11 || m, s > 60) {
//         return alert ("ERROR");
//     } else {
//         return `${h}:${m}:${s}`;
//     }

// }
function padNumber(number) {
    return number.toString().padStart(2, '0');
}

function showTime(h, m, s) {
    return `${padNumber(h)}:${padNumber(m)}:${padNumber(s)}`;
}

//8
function getSeconds(h, m, s) {
    let seconds = s;
    let secondsInMinutes = m * 60;
    let secondsInHours = h * 60 * 60;

    return seconds + secondsInMinutes + secondsInHours;
}
//9
function timeFromSeconds(s) {
    let hours = Math.floor(s / 60 / 60);
    const secondsInHours = hours * 60 * 60;
    let minutes = Math.floor((s - secondsInHours) / 60);
    const secondsInMinutes = minutes * 60;
    let seconds = s - secondsInHours - secondsInMinutes;

    return showTime(hours, minutes, seconds);
}
//10
function difference(h, m, s, h1, m1, s1) {
    let allTime1 = getSeconds(h, m, s);
    let allTime2 = getSeconds(h1, m1, s1);
    let differenceOfSeconds = allTime1 - allTime2;
    if (allTime2 > allTime1) {
        return timeFromSeconds(`${allTime2 - allTime1}`);
    }
    return timeFromSeconds(differenceOfSeconds);
}
console.log(difference(50, 20, 3, 38, 40, 3)); // задайте 6 параметров