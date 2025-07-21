// WAP to accept a String and display each word in  reverse.

function reverseEachWord(String) {
  const reverseArray = [...String].reverse();
  const finalString = reverseArray.join(" ");
  console.log(finalString);
}
reverseEachWord("Prasang and kapil");
