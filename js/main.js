'use strict';

console.log(`linked`);

//variables
const userNumber = document.querySelector('.js__user_number')
const btn = document.querySelector('.js__btn')
const tips = document.querySelector('.js__tips')
const attempts = document.querySelector('.js__attempts')

//funciones

//1.randomnumber

function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}



/*2.Validar el número de la jugadora
----- El número debe estar
entre 1 y 100. */

/*3.Comparar el número que la jugadora ha escrito en el input con el número aleatorio y pintar las pistas correspondientes en la pantalla.
*/
const showMsj = (msj) => {
  tips.innerHTML = msj;
};

function compare() {
  const number = getRandomNumber(100);
  console.log(number);
  
  const getNumber = userNumber.value
  if (getNumber === number) {
    showMsj(`Has ganado campeona!!! :)`);
  } else if (getNumber < number - 10) {
    showMsj(`Número demasiado bajo :( `);
  } else if (getNumber > number + 10){
    showMsj(`Número demasiado alto :( `);
  }
}

/*
----- `Número demasiado alto :( `
----- `Número demasiado bajo :( `
----- `Has ganado campeona!!! :)`*/

/*function compare() {
  const number = getRandomNumber(100);
  console.log(number);
  const userNumber = userNumber.value
  

  //if(number  ) {
  if (number === 0) {
    mainElement.innerHTML = 'Te ha tocao la lotería';
  } else if (isEven(number)) {
    mainElement.classList.remove('chileanFireOrange');
    mainElement.classList.add('correctYellow');
  } else {
    mainElement.classList.remove('correctYellow');
    mainElement.classList.add('chileanFireOrange');
  }
}
*/

//4. Contar los intentos y pintarlos en js__attempts 

//Don't forget el prevent default

//eventos

function handleClickBtn(event) {
  event.preventDefault();
  console.log(`btn works!`);
  //funciones
  compare();
}

btn.addEventListener ('click', handleClickBtn);