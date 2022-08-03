// console.log(3)
// console.log(3)
// var sakib = "valo chele";
// console.log(sakib);

// var onionPrine = 20;
// var eggPrice = 10;
// console.log(onionPrine + eggPrice);
// var totalPrice = onionPrine + eggPrice;
// console.log(totalPrice);

// var tShartPrice = 200;
// var fullName = 'Mohon Hossen';
// var sottoMittha = false;
// var one1 = '100';
// var one2 = '100.20';
// var one3 = 100.20;

// console.log(typeof tShartPrice)
// console.log(typeof fullName)
// console.log(typeof sottoMittha)
// console.log(typeof one1)
// console.log(typeof one2)
// console.log(typeof one3)

// var items = ['mobile', 'charger', 'paper', 'laptop'];
// for (i = 0; i > items.length; i++) {
//     var item = items[i];
//     console.log(item);
// }

// function subtract(num1, num2) {
//     var total = num1 - num2;
//     return total;
// }
// var result = subtract(100, 50);
// console.log('resutl value: ', result)


function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var firstFactorial = getFactorial(7);
console.log('My factorial ', firstFactorial);