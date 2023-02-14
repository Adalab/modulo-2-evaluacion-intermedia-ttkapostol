'use strict';

const userNumber = document.querySelector('.js__user_number')
const btn = document.querySelector('.js__btn')
const tips = document.querySelector('.js__tips')
const userAttempts = document.querySelector('.js__attempts')
let counter = 0

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

const number = getRandomNumber(100);
  console.log(number);

const showMsj = (msj) => {
  tips.innerHTML = msj;
};


function countAttempts (getNumber){
  if (getNumber !== number){
  counter++;
  }
  userAttempts.innerHTML = counter 
}

function compare() {
const getNumber = parseInt(userNumber.value)
  if (getNumber === number) {
    showMsj(`Has ganado campeona!!! :)`);
  } else if (getNumber < number) {
    showMsj(`Número demasiado bajo :( `);
  } else if (getNumber > number){
    showMsj(`Número demasiado alto :( `);
  }
countAttempts (getNumber);
}

function validateIput() {
const getNumber = parseInt(userNumber.value)
  if (userNumber.value === '') {
    showMsj('¡Tienes que poner un número si quieres jugar!');
  } else if (getNumber < 0 || getNumber > 100) {
    showMsj('¡Tienes que poner un número entre 0 y 100!');
  } else {
    compare()
  }
}

function handleClickBtn(event) {
  event.preventDefault();
  validateIput();
}

btn.addEventListener('click', handleClickBtn);