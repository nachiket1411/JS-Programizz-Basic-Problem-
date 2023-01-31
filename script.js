// this is reguler and simple Program

let firstName = "Naciket";
let lastName = "Dorkulkar";

let temp;

temp = firstName;
firstName = lastName;
lastName = temp;

console.log(firstName);
console.log(lastName);

// Using es6 Destructuring assignment

let num1 = 100;
let num2 = 200;

[num1, num2] = [num2, num1];

console.log(num1);
console.log(num2);

// Using Arithmetic Operators

let a = 50;
let b = 20;

a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b);
