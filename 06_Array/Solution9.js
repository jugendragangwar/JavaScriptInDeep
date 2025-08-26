// WAP to accept N numbers in an Array. Accept a number from user and check for its existence in Array using Linear Search Technique.

function findNumber(arr, target) {
//   let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) {
      console.log(`Number exists at position ${i + 1} (index ${i})`);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("Number does not exist in the array.");
  }
}

let arr = [12, 33, 54, 67, 87, 9, 38, 43, 45, 32];
let userNumber = 32;

findNumber(arr, userNumber);
