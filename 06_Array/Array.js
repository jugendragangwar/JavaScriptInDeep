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
let sortArray = Arr.sort();
// it sort the elemnts basis of first digit beacuse it is comparing the first digit of the number so use compare function
let sortArr = Arr.sort((a, b) => a - b);
console.log(sortArray,sortArr);




