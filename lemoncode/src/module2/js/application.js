import hotel from './data.js';

/* eslint-disable no-restricted-globals */
document.getElementById('name-hotel').innerHTML = `Hotel ${hotel.name}`;
document.getElementById('location-hotel').innerHTML = `Ubicado en ${hotel.location}`;
document.getElementById('img-hotel').src = hotel.img;

// Objetivo 2 [Puntuación del hotel]
// eslint-disable-next-line no-alert
const rating = prompt('Puntuación: del 1 al 5');

document.getElementById('rating').innerHTML = `${rating} estrellas`;

// Objetivo 3 [Usuario anónimo]
// eslint-disable-next-line no-alert
const anonymous = confirm('¿Quiere que la reseña sea anónima?');

document.getElementById('anonymous').checked = anonymous;
