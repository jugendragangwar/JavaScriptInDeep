// 3 WAP to accept a String from user and display total Capital alphabets, Small alphabets and digits stored in it.

// ASCII Range: 65 to 90  for  Capital alphabets

// ASCII Range: 97 to 122 for  Small Alphabets (a–z)

// ASCII Range: 48 to 57  for Digits (0–9)

function totalStuff(string) {
  let CapitalAlphabets = 0;
  let SmallAlphabets = 0;
  let digits = 0;

  for (let char of string) {
    let ascii = char.charCodeAt(0);

    if (ascii >= 65 && ascii <= 90) {
      CapitalAlphabets++;
    } else if (ascii >= 97 && ascii <= 122) {
      SmallAlphabets++;
    } else if (ascii >= 48 && ascii <= 57) {
      digits++;
    }
  }

  console.log("Capital Alphabets:", CapitalAlphabets);
  console.log("Small Alphabets:", SmallAlphabets);
  console.log("Digits:", digits);
}

// Example usage:
totalStuff("h1 My name is jUGendRA13466");

