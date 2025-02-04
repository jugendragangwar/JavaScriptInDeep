// Array : Array is a collection of similar or different types  elements. It can store multiple values in a single variable.
// Array is a special variable, which can hold more than one value at a time.

// Array Declaration
let arr = [1, 2, 3, 4, 5];
// console.log(arr);



//********** * Array Methods************


let Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. push() : Add element at the end of the array
Arr.push(11);
// console.log(Arr);

// 2. pop() : Remove element from the end of the array
Arr.pop();
// console.log(Arr);

// 3. shift() : Remove element from the beginning of the array
Arr.shift();
// console.log(Arr);

// 4. unshift() : Add element at the beginning of the array
Arr.unshift(0);
// console.log(Arr);

// 5. splice() : Add or Remove element from the array
Arr.splice(2, 0, 2.5);
// console.log(Arr);

// 6. slice() : Extract elements from the array
let newArr = Arr.slice(2, 5);
// console.log(newArr);

// 7. concat() : Merge two or more arrays
let Arr1 = [11, 12, 13, 14, 15];
let newArr1 = Arr.concat(Arr1);
// console.log(newArr1);


// 8. reverse() : Reverse the array
let reverseArr = Arr.reverse();
// console.log(reverseArr);

// 9. sort() : Sort the array
let array=[12,21,34,0.5,43,2,3 ,2.4]
let sortArray = array.sort();
// it sort the elemnts basis of first digit beacuse it is comparing the first digit of the number so use compare function
let sortArr = array.sort((a, b) => a - b);
// console.log(sortArr);



const input = "Kalash, mango leaves, coconut, Gangajal, sandalwood paste, kumkum, haldi, rice (Akshat), fresh flowers, garlands, panchamrit, deepak (oil lamp), cotton wicks, ghee, agarbatti, camphor, betel leaves, betel nuts, clothes for deity, tulsi leaves, fruits, sweets (mithai), bhog (food offering), coins (dakshina), diya stand, holy thread (mouli or kalawa)";

// Convert to an array
const itemsArray = input.split(",").map(item => item.trim());

console.log(itemsArray);



