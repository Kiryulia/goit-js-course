'use strict'
let input;
const numbers = [];
let total = 0;
let num;

do {
    input = prompt('enter number');
    if (input === null) break;
    num = Number(input);

    if (isNaN(num) === true) {
        alert('Было введено не число, попробуйте ещё раз!');
    } else {
        numbers.push(num);
    }

} while (input !== null);
console.log(numbers);

for (let key of numbers) {
    total = input += key;
}

console.log(`Общая сумма чисел равна ${total}`);