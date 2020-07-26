//1
function Car(make, model, year, averageSpeed) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
}
let mycar = new Car("Eagle", "Talon TSi", 1993, 200);

function info(obj) {
    for (let key in obj) {
        return obj;
    }
}

function time(distance) {
    let timeForDistance = distance / mycar.averageSpeed;
    if (distance >= 601) {
        let sum = timeForDistance;
        for (let i = 3; i < timeForDistance; i = i + 3) {
            sum++;
        }
        return alert(`${sum + " hours"}`);
    }
    return alert(`${timeForDistance + " hours"}`);
}
//2
function Fraction(up, down) {
    return {
        up: up,
        down: down
    };
}
let firstNumber = Fraction(2, 9);
let secondNumber = Fraction(1, 15);



function multiFraction(obj1, obj2) {
    let resultUpNumber = obj1.up * obj2.up;
    let resultDownNumber = obj1.down * obj2.down;
    alert(`${resultUpNumber}/${resultDownNumber}`); //умножение
}
//multiFraction(firstNumber, secondNumber);

function divisionFraction(obj1, obj2) {
    let resultUpNumber = obj1.up / obj2.down;
    let resultDownNumber = obj1.down / obj2.up;
    alert(`${resultUpNumber}/${resultDownNumber}`); // деление
}
//divisionFraction(firstNumber, secondNumber);

function plusFraction(obj1, obj2) {
    let resultUpNumber = (obj1.up * addiFactors(firstNumber)) + (obj2.up * addiFactors(secondNumber));
    let resultDownNumber = (obj1.down * addiFactors(firstNumber));
    alert(`${resultUpNumber}/${resultDownNumber}`); //сложения
}
//plusFraction(firstNumber, secondNumber);

function minusFraction(obj1, obj2) {
    let resultUpNumber = (obj1.up * addiFactors(firstNumber)) - (obj2.up * addiFactors(secondNumber));
    let resultDownNumber = (obj1.down * addiFactors(firstNumber));
    alert(`${resultUpNumber}/${resultDownNumber}`); //вычитания
}
//minusFraction(firstNumber, secondNumber);

function reduction(a, b) {
    let nodA = a / nod(a, b);
    let nodB = b / nod(a, b);
    alert(`${nodA}/${nodB}`); //cпростить
}
//reduction(182, 195)
function reduction(a) {
    let nodA = a.up / nod(a.up, a.down);
    let nodB = a.down / nod(a.up, b.down);
    alert(`${nodA}/${nodB}`); //cпростить
}
//reduction(firstNumber);
function addiFactors(obj1) {
    let addiFactors1 = nok(firstNumber.down, secondNumber.down) / obj1.down; //дополнительный множитель
    return addiFactors1;
}
// НОК
function nok(x, y) {
    return (x / nod(x, y) | 0) * y;
}

// НОД
function nod(n, m) {
    if (m > 0) {
        let k = n % m;
        return nod(m, k);
    } else {
        return Math.abs(n);
    }
}
//3
let data = {
    hours: 2,
    minute: 30,
    seconds: 30,
};
// Виводить час 3.1
function padNumber(number) {
    return number.toString().padStart(2, '0');
}

function displayTime(h, m, s) {
    return console.log(`${padNumber(h)}:${padNumber(m)}:${padNumber(s)}`);
}
displayTime(data.hours, data.minute, data.seconds);
// 3.2
function getSeconds(s) {
    let allSeconds = data.seconds + s;
    if (allSeconds >= 60 || allSeconds <= 60) {
        data.minute += Math.floor(allSeconds / 60);
        let secondAll = 0;
        data.seconds = secondAll + allSeconds % 60;

    }
    return console.log(displayTime(data.hours, data.minute, data.seconds));
}
//getSeconds(5);
// 3.3
function getmin(m) {
    let allMin = data.minute + m;
    if (allMin >= 60 || allMin <= 60) {
        data.hours += Math.floor(allMin / 60);
        let minAll = 0;
        data.minute = minAll + allMin % 60;
        return console.log(displayTime(data.hours, data.minute, data.seconds));
    }
}
//getmin(40);

// 3.4
function getHour(h) {
    let allHour = data.hours + h;
    if (allHour >= 24 || allHour <= 24) {
        HourAll = 0;
        data.hours = HourAll + allHour % 24;
        return console.log(displayTime(data.hours, data.minute, data.seconds));
    }
}
//getHour(25);
