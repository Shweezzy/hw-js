let name = prompt('Как Вас величать?', );
alert(`Привет, ${age}`);

let age = prompt('Введите ваш год рождения?', );
const ages = 2020 - age;
alert(`${ages - age}`);

let age = prompt('Длина стороны квадрата (a):', );
alert(`Периметр квадрата равен: ${age * 4}`);

let age = prompt('Радиус (R):', );
alert(`Периметр квадрата равен: ${3.1415 * (age ** 2)}`);

let kilometres = prompt('Расстояние между городами', );
let hours = prompt("За сколько часов?", );
alert(`Нужная скорость: ${ kilometres / hours}`);

let dollars = prompt('Введите сумму в $', );
const euro = 0.9;
alert(`Вы получите ${dollars * euro} EUR`);

let gigabytes = prompt('Обьем флешки в ГБ', );
let megabytes = gigabytes * 1024;
alert(`Вы сможете поместить ${megabytes / 820} файлов`);

let cash = prompt('Введите сумму', );
let chocolateBar = prompt("Цена шоколадки");
let cashcash = cash / chocolateBar;
let sds = Math.trunc(cashcash) * chocolateBar;
let asd = cash - sds;
alert(`Вы сможете купить ${Math.trunc(cashcash)} шоколадок, остаток ${asd}`);

var rez=prompt("Введите число");
alert(rez.split("").reverse().join(""));

let number = prompt ("Ведите число!")
if ( number & 1 ) {
    alert( "нечетно" );
} else {
    alert( "четно" );
}