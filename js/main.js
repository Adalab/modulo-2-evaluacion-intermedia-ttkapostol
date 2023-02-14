'use strict';

console.log(`linked`);

//variables
const userNumber = document.querySelector('.js__user_number')
const btn = document.querySelector('.js__btn')
const tips = document.querySelector('.js__tips')
const userAttempts = document.querySelector('.js__attempts')

//funciones

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

const showMsj = (msj) => {
  tips.innerHTML = msj;
};

const showMsj2 = (msj) => {
  userAttempts.innerHTML = msj;
};

function compare() {
const number = getRandomNumber(100);
  console.log(number);
const getNumber = parseInt(userNumber.value)
  if (getNumber === number) {
    showMsj(`Has ganado campeona!!! :)`);
  } else if (getNumber < number - 10) {
    showMsj(`Número demasiado bajo :( `);
  } else if (getNumber > number + 10){
    showMsj(`Número demasiado alto :( `);
  }
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

/*3. Contar los intentos y pintarlos en js__attempts 
let attempts = []; 
const btn2 = document.querySelector('.js__btn2');
for (i=0; < attempts.length; i++) {
} btn2.addEventListener("click", function(){
}*/


function handleClickBtn(event) {
  event.preventDefault();
  validateIput();
}

btn1.addEventListener ('click', handleClickBtn);