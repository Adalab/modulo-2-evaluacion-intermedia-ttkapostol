'use strict';

const userNumber = document.querySelector('.js__user_number')
const btn = document.querySelector('.js__btn')
const tips = document.querySelector('.js__tips')
let userAttempts = document.querySelector('.js__attempts')
const picture = document.querySelector('.js__image')
const resetBtn = document.querySelector('.js__reset_btn')
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
  userAttempts.innerHTML = counter;
}

function resetAttempts (counter){
  userAttempts.innerHTML = counter;
}

function winningMsj() {
  picture.classList.add('msj2');
  picture.classList.remove('msj1');
}

function losingMsj() {
picture.classList.add('msj1');
picture.classList.remove('msj2');
}


function compare() {
const getNumber = parseInt(userNumber.value)
  if (getNumber === number) {
    showMsj(`Has ganado campeona!!! :)`);
    winningMsj();
  } else if (getNumber < number) {
    showMsj(`Número demasiado bajo :( `);
    losingMsj();  
  } else if (getNumber > number){
    showMsj(`Número demasiado alto :( `);
    losingMsj();
  } else {}
countAttempts (getNumber);
}

function processInput() {
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
  processInput();
}

function handleClickResetBtn(event) {
  event.preventDefault();
  const number = getRandomNumber(100);
  console.log(number);
  userNumber.value = '';
  resetAttempts(0)
}

btn.addEventListener('click', handleClickBtn);
resetBtn.addEventListener('click', handleClickResetBtn)