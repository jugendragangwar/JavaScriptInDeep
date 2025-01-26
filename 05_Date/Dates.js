
// Date Objects in JavaScript

// The Date object allows working with dates and times. It contains methods for handling dates and performing date/time calculations.

let MyDate = new Date()
// console.log(MyDate.toLocaleDateString())
// console.log(MyDate.toDateString())
// console.log(typeof MyDate)


let MyDate1 = new Date(2025, 0, 24, 23, 23, 10)
// console.log(MyDate1.toLocaleString())

let myTimeStamps = new Date()
// console.log(myTimeStamps.getTime())

console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
console.log(newDate.getDay())