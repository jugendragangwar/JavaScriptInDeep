// WAP to accept N numbers in an array and display sum of all elements at even positions.

function sumElement(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 1) {
      sum += array[i];
    }
  }
  console.log("Total sum of Array is",sum);
}

const arrayNum = [12, 33, 65, 65, 87, 12, 76, 44, 77, 86, 34, 65, 74, 76, 91];
sumElement(arrayNum);
