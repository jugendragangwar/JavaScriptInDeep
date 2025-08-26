// WAP to accept 10 numbers in an array. Accept a position from user and delete the element at that position from Array.

function deleteItemInArray(userArray, position) {
  let result = [];
  for (let i = 0; i < userArray.length; i++) {
    if (i !== position - 1) {
      result.push(userArray[i]);
    }
  }
  return result;
}




let updatedArray = deleteItemInArray(arr, userPosition);
console.log(updatedArray);

// By splice method
let array = [12, 33, 54, 67, 87, 9, 32, 43, 45, 32];
let Position = 5;
array.splice(userPosition-1, 1);
console.log(array);
