// 5 WAP to accept your full name and display its initials only.

// function displayInitials(fullname) {
//   for (let i of fullname) {
//     if (i == "") {
//       console.log(i);
//     }
//   }
// }
// const result = displayInitials("Jugendra kumar Gangwar");

let fullName = "Jugendra Singh    Gangwar";
let initials = "";

for (let i = 0; i < fullName.length; i++) {
  if (i === 0 && fullName[i] !== " ") {
    initials += fullName[i];
  }
  if (fullName[i] === " " && fullName[i + 1] !== " ") {
    initials += fullName[i + 1];
  }
}

console.log(initials);
