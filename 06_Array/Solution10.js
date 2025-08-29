// WAP to accept N numbers in an Array. Accept a number from user and check number of times it exists in Array using Linear Search Technique.

function findFrequency(arr, num) {
  let numCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num === arr[i]) {
      numCount = numCount + 1;
    }
  }
  console.log(`The number ${num} is exist in array ${numCount} times`);
}

let arr = [12, 33, 54, 67, 87, 33, 38, 43, 33, 33];
let number = 23;
findFrequency(arr, number);
