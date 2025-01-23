// Data Types in JavaScript

// String - Represents textual data.
let name = "Jugendra";
console.log(typeof name);

// Number - Represents numeric values (both integers and floating-point numbers).
let age = 22;
let height = 5.9;
console.log(typeof age);

// Boolean - Represents true or false values.
let isLoggedIn = true;
console.log(typeof isLoggedIn);


// Undefined - Represents a variable that has been declared but not assigned a value.
let city;
console.log(typeof city);


// Null - Represents an explicitly empty or non-existent value.
let middleName = null;
console.log(typeof null);






// Object - Represents a collection of key-value pairs.
let user = {
    name: "Jugendra",
    age: 22,
    isLoggedIn: true,
};
console.log(typeof user );


// Array - A type of object used to store multiple values in an ordered list.
let hobbies = ["coding", "reading", "traveling"];
console.log(typeof hobbies);



// Symbol - Represents a unique identifier (ES6 and later).
let uniqueId = Symbol("id");
console.log(typeof uniqueId);



// BigInt - Represents integers larger than 2^53 - 1 (ES11 and later).
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber)


console.table({name,age,height,isLoggedIn,city,middleName,user})





// Primitive data types
let num = 42; // Number
let str = "Hello"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("id"); // Symbol
let bigInt = 1234567890123456789012345678901234567890n; // BigInt

// Non-primitive (Reference) data types
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function() { console.log("Hello, world!"); }; // Function