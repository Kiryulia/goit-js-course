'use strict'

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let message;

while (true) {
    const enterPassword = prompt('Введите пароль');

    if (enterPassword === null) {
        message = 'Отмена!';
        alert(message);
        break;
    }

    if (passwords.includes(enterPassword)) {
        message = 'Добро пожаловать!';
        alert(message);
        break;
    }

    if (!passwords.includes(enterPassword)) {
        attemptsLeft -=1;
        message = `Неверный пароль, у вас осталось ${attemptsLeft} попыток`;
        alert(message);

    if (attemptsLeft < 1) {
        message = 'У вас закончились попытки, аккаунт заблокирован!';
        alert(message);
        break;
    }
    }
}