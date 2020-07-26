//1
let a = +prompt("введіть початок діапазону", "");
let n = +prompt("введіть кінець діапазону", "");
let sum = 0;
while (a <= n) {
  sum += a;
  a++;
}

alert(sum);
//2
let a = +prompt("", );
let s = +prompt("", );
let nod = a % s;
let last = s % nod;
while (a && s > 0) {
  if (nod == 0) {
    alert(s);
  } else if (last == 0) {
    alert(nod)
  } else if (nod % last == 0) {
    alert(last);
  }
  break;
}
//3
let number = +prompt("", );
let pro = 0;
while (number >= pro) {
  pro++
  if (number % pro == 0) {
    alert(pro)
  } else if (number == pro) {
    break
  }
}
//4
let number = +prompt("", );
let numeral = 0;

while (Math.trunc(number) != 0) {
  numeral++;
  number /= 10;
}
console.log(numeral);
//5
let max = parseFloat(prompt("Введите первое число"));
let num;
let cnt = 0;
while (cnt < 6) {
  num = parseFloat(prompt("Введите следующее число"));
  max = num > max ? num : max;
  ++cnt
}
alert(`${max}`);
//6
do {
  let num1 = +prompt("Первое число", );
  let num2 = prompt("действие", "+, -, *, /");
  let num3 = +prompt("Второе число", );
  if (num2 === "+") {
    alert(num1 + num3);
  } else if (num2 === "-") {
    alert(num1 - num3);
  } else if (num2 === "/") {
    alert(num1 / num3);
  } else if (num2 === "*") {
    alert(num1 * num3);
  }
}
while (confirm("Желаете продолжить?")) {}
//7
let count = prompt('Введите число', '')
let step = +prompt('На сколько сдвинуть', '0')
arr = count.split('');
for (let i = 0; i < step; i++) {
  arr.push(arr.shift())
}
alert(arr.join ``);
//8
const days = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Субота', 'Неділя'];
let currDay = 0;

while (confirm(`${days[currDay]}. Бажаєте побачити наступний день?`)) {
  currDay = (currDay + 1) % days.length;
}
//9
for (i = 2; i <= 10; i++) {

  for (j = 1; j <= 10; j++) console.log(i + " * " + j + " = " + i * j);

}
//10
let number = Math.ceil(Math.random() * 100);
let user = prompt('Постарайся угадать число');
while (user != number) {
  if (user > number) {
    user = prompt('Попытайся меньшее число');
  }
  if (user  < number) {
    user  = prompt('Попытайся большее число')
  }
}
alert('Супер, это число - ' + number);