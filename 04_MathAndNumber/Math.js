// Maths : Math in javaScript is a built-in object that has properties and methods for mathematical constants and functions. It’s not a function object.

// Properties of Math Object
// 1. Math.PI: This property returns the value of PI (π).
const pi = Math.PI;
console.log(pi);

// 2. Math.abs(): This method returns the absolute value of a number.
const x = -10;
const y = Math.abs(x);
console.log(y);

// 3. Math.ceil(): This method returns the smallest integer greater than or equal to a given number.
const x1 = 5.1;
const y1 = Math.ceil(x1);
console.log(y1);

// 4. Math.floor(): This method returns the largest integer less than or equal to a given number.
const x2 = 5.9;
const y2 = Math.floor(x2);
console.log(y2);

// 5. Math.round(): This method returns the value of a number rounded to the nearest integer.
const x3 = 5.9;
const y3 = Math.round(x3);
console.log(y3);

// 6. Math.max(): This method returns the largest of zero or more numbers.
const x4 = Math.max(0, 150, 30, 20, -8, -200);
console.log(x4);

// 7. Math.min(): This method returns the smallest of zero or more numbers.
const x5 = Math.min(0, 150, 30, 20, -8, -200);
console.log(x5);

// 8. Math.random(): This method returns a random number between 0 (inclusive), and 1 (exclusive).
const x6 = Math.random()*10000+1;
const y6 = Math.floor(x6);
console.log(y6);