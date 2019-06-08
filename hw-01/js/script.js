'use strict';

let message;
const ADMIN_PASSWORD = 'm4ng0h4ckz';

const password = prompt('Введите пароль');

if (password === null){
    message = 'Отменено пользователем!';
} else if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);