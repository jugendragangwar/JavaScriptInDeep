// WAP to accept N numbers in an Array in ascending order. Now accept a number and insert it in Array in such a way that even after insertion, Array remains sorted.

let insertIumber = 92;
let index = 0;
let Array = [20, 23, 25, 45, 67, 89, 90, 91];
function ascendingArray() {
  for (let i = 0; i <= Array.length - 1; i++) {
    if (Array[i] > insertIumber) {
      index = i;
      return;
    }
  }
  index = Array.length;
}

ascendingArray();
Array.splice(index, 0, insertIumber);
