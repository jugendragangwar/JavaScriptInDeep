// Numberes: Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values", i.e., they are represented as 64 bit values.
const score =320
console.log(score)
console.log(typeof score) // number

// Here we are using Number constructor to create a number object.
 const balance =new Number(1000)
 console.log(balance)
 console.log(typeof balance) // object

//  Number Methods
// 1. toString(): This method is used to convert a number to a string.
const x = 123;
const y=(x.toString()); // "123"
console.log(typeof y); 

// 2 toFixed(): This method is used to format a number using fixed-point notation.
const num = 5.96789;
const n = num.toFixed(0); // "5"
console.log(n);

// 3. toPrecision(): This method is used to format a number to a specified length and returns a string.
const num1 = 10.46789;
const n1 = num1.toPrecision(2);
console.log(n1);

// 4. toLocaleString(): This method is used to convert a number into a string with a specific locale.
const num2 = 123456.789;
const n2 = num2.toLocaleString('en-IN');
console.log(n2);