const friendsGroup = 6;
const groupTotal = friendsGroup + 1;
const ticketPrice = 120;
const drinksPrice = 18;

const ticketWithoutDrinks = ticketPrice - drinksPrice;
const ticketPerPerson = Math.round(ticketWithoutDrinks / groupTotal) + "€";

console.log(ticketPerPerson);
