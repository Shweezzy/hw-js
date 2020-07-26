//1
function stringStat(str) {
    let string = str.replace(/[^0-9]+/g, "");
    let numbers = str.replace(/[^a-zA-Z]+/g, "");
    let signs = str.replace(/[a-z0-9]+/g, "");
    alert(`${string.length}` + " " + `${numbers.length}` + " " + `${signs.length}`);
}
//stringStat("a/aa1/2/$%3");
//2
function numbersToString(num) {
    let a1 = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let a10 = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемьнадцать', 'девяднадцать', 'Двадвать'];
    let a20 = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    if (num >= 0 && num <= 9) {
        return a1[num];
    }
    if (num >= 10 && num <= 20) {
        return a10[num - 10];
    }
    if (num > 20 && num <= 99) {
        let toString = `${num}`;
        toString = toString.split('');
        let firstNumber = toString[0];
        let secondNumber = toString[1];
        if (secondNumber == 0) return `${a20[firstNumber - 2]}`;
        return `${a20[firstNumber - 2]} ${a1[secondNumber]}`;
    }
}
//numbersToString(70)
//3
function cases(str) {
    let string = str.replace(/[0-9]/g, '');
    let numbers = str.replace(/[a-zA-Z]+/g, "");
    let signs = "";
    let finalString = "";
    for (let i = 0; i < numbers.length; i++) {
        signs += "_";
    }
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toLowerCase()) {
            finalString += string[i].toUpperCase();
        }
        if (string[i] === string[i].toUpperCase()) {
            finalString += string[i].toLowerCase();
        }

    }

    alert(finalString + signs);
}
//cases("123ssSS123")
//4
function camelCase(str) {
    let abbr = "";
    for (let i = 0; i < str.length; i++) {
        abbr += str[i];
        if (str[i] === "-") {
            abbr += str[i + 1].toUpperCase();
        }
    }
    return abbr.replace(/[^a-zA-Z]+/g, "");
}
//camelCase("aa-asd-asdasf");
//5
function abbreviation(str) {
    let abbr = `${str[0].toUpperCase()}`;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            abbr += str[i + 1].toUpperCase();
        }
    }
    return abbr;
}
//abbreviation("aa sasd fasdasf");
//6
function longStirng(str) {
    let array = str.split(' ').join('');
    return array;
}
//7
function calc(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "+") {
            return Number(str.substr(0, i)) + Number(str.substr(i + 1));
        } else if (str[i] === "-") {
            return Number(str.substr(0, i)) - Number(str.substr(i + 1));
        } else if (str[i] === "/") {
            return Number(str.substr(0, i)) / Number(str.substr(i + 1));
        } else if (str[i] === "*") {
            return Number(str.substr(0, i)) * Number(str.substr(i + 1));
        }
    }
}
//calc("12/3")
//8
function http(url) {
    let protocol = url.substr(0, 5);
    let domain = "";
    let address = "";
    for (let i = 8; i < url.length; i++) {
        domain += url[i];
    }
    for (let i = 0; i < domain.length; i++) {
        if (domain[i] === "/") {
            address += domain.substr(i);
            domain = domain.substr(0, i);
        }
    }
    return 'protocol: ' + `${protocol},` + ' domain: ' + `${domain},` + ' address: ' + `${address}`;
}
//http("https://itstep.org/ua/about")

//9
function delimiter(str, delimiter) {
    let array = str.split(' ').join(`${delimiter}`);
    return array;
}
//delimiter("sdadasd asdasd a asda" , ":")
//10
function template(text, ...parameter) {
    for (let i = parameter.length - 1; i >= 0; --i) {
        text = text.split('%' + (i + 1)).join(parameter[i]);
    }

    return text;
}
//template("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020);