// WAP to accept N numbers in an Array. Now accept a number and position from user and insert that number at that position in the Array.

function arrayModification(array) {
  let Number = 24;
  let Position = 3;
  let Firstarray = [];
  let Secondarray = [];
  let arrayLength = array.length;

  if (arrayLength >= Position) {
    for (let i = 0; i <= Position - 1; i++) {
      Firstarray.push(array[i]);
    }
    for (let i = Position + 1; i <= array.length - 1; i++) {
      Secondarray.push(array[i]);
    }
  }
  Secondarray.unshift(Number);

  let finalArray = Firstarray.concat(Secondarray);
  console.log(finalArray);
}

const arrayNum = [12, 33, 65, 65, 87, 12, 76, 44, 77, 86, 34, 65];
arrayModification(arrayNum);
