// WAP to accept 15 numbers in an Array and display largest, second  largest and third largest number stored in it.

function largest(arrayOfNum) {
  // if All values are possitive in Array
  let largest = 0;
  let secondLargest = 0;
  let thirdLargest = 0;

  //   If some values are negative in Array
  //   let largest = -Infinity;
  //   let secondLargest = -Infinity;
  //   let thirdLargest = -Infinity; 

  for (let index = 0; index < arrayOfNum.length; index++) {
    let num = arrayOfNum[index];
    if (num > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      thirdLargest = secondLargest;
      secondLargest = num;
    } else if (num > thirdLargest && num < secondLargest) {
      thirdLargest = num;
    }
  }
  console.log("Largest Number:", largest);
  console.log("Second Largest Number:", secondLargest);
  console.log("Third Largest Number:", thirdLargest);
}

const arrayNum = [12, 33, 65, 65, 87, 12, 76, 44, 77, 86, 34, 65, 74, 76, 91];
largest(arrayNum);
