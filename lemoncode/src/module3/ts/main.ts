import { Movie } from "module3/types";

// null case
let age: number | null = null;
age = 38;

console.log(age);

const bladeRunner: Movie = {
  title: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
};

const matrix: Movie = {
  title: "Matrix",
  director: "Lana Wachowski",
  year: 1999,
};

console.log(bladeRunner);
console.log(matrix);
