// Stack(Primitive Data Types) => It Provides copy of the data
// Heap(Non - Primitive Data Tyes) => It provides reference of the data



// ***********Stack Memory(Primitive Data Types)***********
let myName = "Jugendra";
let updatedName = myName;
updatedName = "Jugendra Gangwar";
console.log(myName);
console.log(updatedName);
// Conclusion: In Stack Memory, It provides copy of the data so that it will not affect the original data.



// ***********Heap Memory(Non - Primitive Data Tyes)***********
let user = {
    name: "Jugendra",
    age: 25,
    email: "jugendra8791@gmail.com"
}
let updatedUser = user;
updatedUser.name = "Jugendra Gangwar";
console.log(user.name);
console.log(updatedUser.name);
// Conclusion: In Heap Memory, It provides reference of the data so that it will affect the original data.