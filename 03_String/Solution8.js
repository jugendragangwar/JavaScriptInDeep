// WAP to accept a string and reverse it.

function reverseString(string) {
  const reverseArray = [...string].reverse();
  console.log(...reverseArray);
}
reverseString("Hello");

function reverseToString(num) {
  let reverseStr = "";
  for (let i = num.length - 1; i >= 0; i--) {
    reverseStr += num[i];
  }
  return reverseStr;
}

console.log(reverseToString("PrasangGandu"));
