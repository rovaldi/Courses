import { hotels, stars } from './data.js';

let selectedHotel = prompt('Indique hotel sobre el que quiere hacer la reseña: Mencey o Lani');
document.getElementById('name-hotel').innerHTML = 'Hotel ' + hotels[selectedHotel].name;
document.getElementById('location-hotel').innerHTML = 'Ubicado en ' + hotels[selectedHotel].location;
document.getElementById('img-hotel').src = hotels[selectedHotel].img;

let rating = prompt('Puntuación: una, dos, tres, cuatro o cinco estrellas');
document.getElementById('rating').innerHTML = stars[rating];

const anonymous = confirm('¿Quiere que la reseña sea anónima?');
document.getElementById('anonymous').checked = anonymous;
