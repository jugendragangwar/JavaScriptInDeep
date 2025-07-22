// WAP to accept 12 numbers in an array and swap first half of Array with its second half.

function swapArray(array) {
  let firstHalf = [];
  let secondHalf = [];

  let mid = array.length / 2;

  for (let i = 0; i < mid; i++) {
    firstHalf.push(array[i]);
  }
  for (let i = mid; i < array.length; i++) {
    secondHalf.push(array[i]);
  }
  let swappedArray = secondHalf.concat(firstHalf);
  console.log(swappedArray, "swappedArray");
}

const arrayNum = [12, 33, 65, 65, 87, 12, 76, 44, 77, 86, 34, 65];
swapArray(arrayNum);
