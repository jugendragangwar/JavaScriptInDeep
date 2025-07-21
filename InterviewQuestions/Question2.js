// 2. How to check whether a string is palindrome or not ?

function Palindrome(str) {
    let rev = str.split("").reverse().join("");
    if (str === rev) {
        console.log("String is palindrome");
    }
    else {
        console.log("String is not palindrome")
    }
}
Palindrome("radar")