// 1. Program to find longest word in a given sentence ?


const String = "My name is Rohan and I am a software developer"

let Array = String.split(" ")
let longest = 0;
let word = null;

for (let i = 0; i < Array.length; i++) {
    if (longest < Array[i].length) {
        longest = Array[i].length;
        word = Array[i];

    }
}
console.log(word);