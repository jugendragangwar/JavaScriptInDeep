// WAP to accept 15 numbers in an Array and display the Largest number and Smallest number stored in it.

function findLargestSmallest(arrayOfNum) {
  let Largest = arrayOfNum[0];
  let Smallest = arrayOfNum[0];

  for (let i = 1; i < arrayOfNum.length; i++) {
    if (arrayOfNum[i] > Largest) { 
      Largest = arrayOfNum[i];
    }
    if (arrayOfNum[i] < Smallest) {
      Smallest = arrayOfNum[i];
    }
  }

  console.log("Largest Number:", Largest);
  console.log("Smallest Number:", Smallest);
}

const arrayNum = [12, 33, 65, 65, 87, 0, 9, 76, 44, 77, 86, 34, 65, 74, 76];
findLargestSmallest(arrayNum);

