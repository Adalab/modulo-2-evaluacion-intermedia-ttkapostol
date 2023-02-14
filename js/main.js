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

const number = getRandomNumber(100);
console.log(number);

/*2.Validar el número de la jugadora
----- El número debe estar
entre 1 y 100. */

/*3.Comparar el número que la jugadora ha escrito en el input con el número aleatorio y pintar las pistas correspondientes en la pantalla.
----- demasiado alto
----- demasiado bajo
----- Has ganado campeona!!!
*/

//4. Contar los intentos y pintarlos en js__attempts 


//eventos
btn.addEventListener ('click', handleClickBtn);