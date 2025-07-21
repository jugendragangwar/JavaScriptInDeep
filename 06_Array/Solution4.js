// WAP to accept N numbers in an array and add 2 to all odd numbers in array and multiply 2 to all even numbers.

function arrayUpdation(array) {
  let oddNum = [];
  let evenNum = [];
  for (let index = 0; index < array.length; index++) {
    if (index % 2 == 0) {
      oddNum.push(array[index] + 2);
    } else if (index % 2 == 1) {
      evenNum.push(array[index] * 2);
    }
  }
  console.log(oddNum);
  console.log(evenNum);
}

const arrayNum = [12, 33, 65, 65, 87, 12, 76, 44, 77, 86, 34, 65, 74, 76, 91];
arrayUpdation(arrayNum);
