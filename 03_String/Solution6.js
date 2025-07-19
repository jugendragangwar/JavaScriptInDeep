
// 6 WAP to accept a String and convert it to Title Case.

function titleCase(Sentence) {
  const stringInLowerCase = Sentence.toLowerCase();
  // console.log(stringInLowerCase)
  for (let i of stringInLowerCase) {
    if (i === " " && stringInLowerCase[i + 1] != " ") {
      console.log(1);
    }
  }
}
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
