'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const userInput = prompt('Введите пароль');

const isLoginValid = function(login) {
  if (login.length >=4 && login.length <=16) {
    return true;
  }
};

const isLoginUnique = function(allLogins, login) {
  if (!allLogins.includes(login)) {
    return true;
    }
};

const addLogin = function(allLogins, login) {
      if (isLoginValid(login)) {
        if(isLoginUnique(allLogins, login)) {
            alert('Логин успешно добавлен!');
          allLogins.push(login);
        } else {
            alert('Такой логин уже используется!');
        }
      } else {
        alert('Ошибка! Логин должен быть от 4 до 16 символов');
      }
    };

if (userInput === null){
    alert('Отменено пользователем!');
}

addLogin(logins, userInput);
console.log(logins);
