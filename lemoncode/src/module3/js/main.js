// price values
const discount = 0.9;
let iva = 1.21;
const productPriceOne = 100;
const productPriceTwo = 30;
const finalPrice =
  productPriceOne * discount * iva + productPriceTwo * discount * iva;

console.log(finalPrice);
document.getElementById("price").innerHTML = finalPrice;

iva = 1.1; //reduce iva
console.log(
  productPriceOne * discount * iva + productPriceTwo * discount * iva
);

// change book object
let book = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 1951,
};

book = {
  title: "The Rye",
  author: "J.D",
  yearPublished: 1940,
};
console.log(book);

// change value on object
const bookTwo = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  yearPublished: 1951,
};

bookTwo.yearPublished = 1970;
console.log(bookTwo);

// concatenate values
const firstName = "Pepe";
const surname = "Díaz";
const fullName = `${firstName} ${surname}`;

document.getElementById("fullName").innerHTML = fullName;
