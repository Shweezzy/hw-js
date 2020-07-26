let shoppingList = [{
    name: "Apple",
    necessary: 5,
    bought: "not bought",
}, {
    name: "Plum",
    necessary: 4,
    bought: "not bought",
}, {
    name: "Buckwheat",
    necessary: 1,
    bought: "bought",
}, {
    name: "Cabbage",
    necessary: 2,
    bought: "bought",
}, {
    name: "Potato",
    necessary: 5,
    bought: "not bought",
}];
shoppingList.forEach(function (item) {
    console.log(item);
});
// - отсортовать
//sort(shoppingList);
function sort(x) {
    x.sort(function (a, b) {
        return a.bought < b.bought ? 1 : -1;
    });

    return x;
}
//  - добавить продукт
// add(anotherProduct);
let anotherProduct = {
    name: "Potato",
};
function add(a) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].name == a.name) {
            shoppingList[i].necessary++;
            return shoppingList;
        }
    }
    shoppingList.push(a);
    return shoppingList;
}
// - купить продукт
// buy(anotherProduct);
function buy(a) {
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].name == a.name) {
            shoppingList[i].bought = "bought";
            return shoppingList;
        }
    }
}

// 2
let priceList = [{
    name: "Apple",
    necessary: 5,
    price: 30,
}, {
    name: "Plum",
    necessary: 4,
    price: 130,
}, {
    name: "Buckwheat",
    necessary: 1,
    price: 230,
}, {
    name: "Cabbage",
    necessary: 2,
    price: 330,
}, {
    name: "Potato",
    necessary: 5,
    price: 10,
}];

priceList.forEach(function (item) {
    console.log(item);
});

const sum = priceList.reduce(function (total, item) {
    return total + item.price;
}, 0);
console.log(sum + " - сумма всех покупок");
// function summa(a) {
//     let sum = 0;
//     a.reduce(function (total, item) {
//         return sum = total + item.price;
//     }, 0);
//     console.log(sum + " - сумма всех покупок");
// }
// summa(priceList);
function maxPrice(arr) {
    return console.log(arr.reduce(function (total, item) {
        return (total > item.price ? total : item.price);
    }) + " - самая дорогостоящая покупка");

}
maxPrice(priceList);

function average(a) {

    console.log(sum / a.length + " - средняя цена покупки");
}
average(priceList);
//3

//4
let lectureHall = [{
    name: "Q",
    seats: 12,
    faculty: "dentistry",
}, {
    name: "W",
    seats: 10,
    faculty: 'physical',
}, {
    name: "A",
    seats: 16,
    faculty: 'biological',
}, {
    name: "R",
    seats: 14,
    faculty: "IT",
}, {
    name: "B",
    seats: 20,
    faculty: "medical",
}];
lectureHall.forEach(function (item) {
    console.log(item);
});
// - аудитория для указанного факультета
//show("dentistry")
function show(a) {
    for (let i = 0; i < lectureHall.length; i++) {
        if (lectureHall[i].faculty === a) {
            return lectureHall[i];
        }
    }
    return "Нет подходящий аудиторий";
}
// - аудитория по количеству мест и факультета
//canSeat(addFaculty) - для закоментированой функции
//canSeat("pharmacy", 4)
let addFaculty = {
    seats: 14,
    faculty: "dentistry",
};
// function canSeat(a) {
//     for (let i = 0; i < lectureHall.length; i++) {
//         if (lectureHall[i].faculty == a.faculty && lectureHall[i].seats >= a.seats) {
//             return lectureHall[i];
//         }
//     }
//     return "Нет подходящий аудиторий";
// }
function canSeat(a, b) {
    for (let i = 0; i < lectureHall.length; i++) {
        if (lectureHall[i].faculty == a && lectureHall[i].seats >= b) {
            return lectureHall[i];
        }
    }
    return "Нет подходящий аудиторий";
}
// - сортировка по количеству мест
//sortSeats(lectureHall)
function sortSeats(x) {
    x.sort(function (a, b) {
        return a.seats < b.seats ? -1 : 1;
    });

    return x;
}
// - сортировка по алфавиту аудиторий
// sortName(lectureHall)
function sortName(x) {
    x.sort(function (a, b) {
        return a.name < b.name ? -1 : 1;
    });

    return x;
}