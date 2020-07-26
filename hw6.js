//1
function pow(a, b) {
  return a ** b;
}

pow(2, 4)

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

function pow(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}
//2
let a = +prompt("", );
let s = +prompt("", );
let nod = a % s;
let last = s % nod;
while (a && s > 0) {

  if (nod == 0) {
    alert(s);
  } else if (last == 0) {
    alert(nod);
  } else if (nod % last == 0) {
    alert(last);
  } else if (a % s == a) {
    alert(1);
  }
  break;
} ==
function NOD(x, y) {
  while (y !== 0) y = x % (x = y);
  return x;
}
console.log(NOD(3, 50)); ==
let nod = (x, y) => x ?
  let (y % x, x) : y;

//6Fibn
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
//4
let n = 10;

nextPrime:
  for (let i = 2; i <= n; i++) { // Для всех i...

    for (let j = 2; j < i; j++) { // проверить, делится ли число..
      if (i % j == 0) continue nextPrime; // не подходит, берём следующее
    }

    alert(i); // простое число
  }
//3
function num(n) {
  return (n == 0 ? 0 : Math.max(n % 10, num((n - (n % 10)) / 10)));
}
//5
function dividers(n, flag = 2) {
  if (index > (n / 2)) {
    return console.log(flag);
  }
  if (n % index == 0) {
    console.log(flag);
    dividers(n / flag, flag);
  } else {
    dividers(n, ++flag);
  }
}