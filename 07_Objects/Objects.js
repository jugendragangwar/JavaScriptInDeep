// Object : object in java script is a collection of key value pairs
// key is a string and value can be any data type

// 1. Object Literal or 
// object literal is a key value pair in curly braces
let user = {
    name: 'Jugendra',
    "full name": 'Jugendra Gangwar',
    age: 22,
    mySymbol: Symbol('mySymbol'),
    email: 'jugendra@gmail.com'
};

// console.log(user.age);
// console.log(user["full name"]);
console.log(user.mySymbol);
// console.log(user["email"]);



// 2. Object Constructor
// object constructor is a function that creates an object wrapper
Object.create(user);
Object.assign(user,
    {
        name: 'Jugendra',
        age: 22
    }
);




// Object destructuring : it is a way to extract multiple properties from an object 
``