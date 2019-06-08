'use strict';

let credits = 23580;
const pricePerDroid = 3000;
let message;
let totalPrice;
let enoughMoney;
let notEnoughMoney;
const amountOfDroid = prompt('Количество дроидов, которые Вы хотите купить?');
totalPrice = pricePerDroid * Number(amountOfDroid);
notEnoughMoney = totalPrice > credits;
enoughMoney = credits - totalPrice;

if (amountOfDroid === null){
    message = 'Отменено пользователем!';
} else if (notEnoughMoney) {
    message = 'Недостаточно средств на счету!';
} else if (enoughMoney) {
    message = `Вы купили ${amountOfDroid} дроидов, на счету осталось ${enoughMoney} кредитов.`;
}
alert(message);