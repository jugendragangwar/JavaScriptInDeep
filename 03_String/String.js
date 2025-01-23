// String :String is a sequence of characters enclosed in single quotes or double quotes.

const Name = "Rahul";
const Age = 25;
console.log(`My name is ${Name} and I am ${Age} years old.`);

// *********Methods of String*********

const str = "Hello World";

// 1. charAt() : It returns the character at the specified index.
console.log(str.charAt(0));

// 2. charCodeAt() : It returns the Unicode of the character at the specified index.
console.log(str.charCodeAt(5))

// 3. concat() : It is used to concatenate two or more strings.
console.log(str.concat("!!"));

// 4. endsWith() : It checks whether the string ends with the specified string or not.
console.log(str.endsWith("World"));

// 5. fromCharCode() : It returns the character for the specified Unicode.
console.log(String.fromCharCode(65));

// 6. includes() : It checks whether the string contains the specified string or not.
console.log(str.includes("World"));

// 7. indexOf() : It returns the index of the first occurrence of the specified string.
console.log(str.indexOf("d"));

// 8. lastIndexOf() : It returns the index of the last occurrence of the specified string.
console.log(str.lastIndexOf("o"));

// 9. toUpperCase() : It converts the string to uppercase.
console.log(str.toUpperCase());

// 10. toLowerCase() : It converts the string to lowercase.
console.log(str.toLowerCase());

// 11. slice() : It extracts a part of the string and returns a new string.
console.log(str.slice(5, 11));

// 12. split() : It splits the string into an array of substrings.
console.log(str.split(" "));

// 13. substring() : It extracts the characters from a string, between two specified indices.
console.log(str.substring(5, 11));

// 14. trim() : It removes whitespace from both ends of a string.
console.log(str.trim());