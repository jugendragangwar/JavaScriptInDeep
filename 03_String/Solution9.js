// WAP to accept a string and check it is a Palindrome or not.

function checkPalindrome(number) {
  const reverseArray = [...number].reverse();
  const reverseString = [...reverseArray];
  const str = reverseString.join("");
  if (str === number) {
    console.log("it is a Palindrome. ");
  } else {
    console.log("it is not a Palindrome.");
  }
}
checkPalindrome("NAN");
