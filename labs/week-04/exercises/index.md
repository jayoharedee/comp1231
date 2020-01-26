### [Back](../../../)

# Week 04 - Working with Conditional Statements

## exercise 1
**All evaluated if blocks should print a console.log**
```js
// Variables
 let tv = '32 LCD'
 let price = 1000
 let value = true

 // Exercise 1 - run this if/else
 if (tv) {
   console.log(
     `You purchased a ${tv} for ${price} and
    there does to be some ${value} value so far.`
   )
 } else {
   console.log(`Strings are not conidered to be true in JS`)
 }

// Exercise 2 - invert if/else
if (!tv) {
   console.log(
     `You purchased a ${tv} for ${price} and
    there does to be some ${value} value so far.`
   )
   price = 0
 } else if (price < 1000) {
   console.log(`You have $${price}.00 to spend. No TV for you!`)
 }

if (!tv) {
   console.log(
     `You purchased a ${tv} for ${price} and
    there does to be some ${value} value so far.`
   )
   price = 0
 } else if (price === 1000) {
   console.log(`You have $${price}.00 to spend. No TV for you!`)
 } else {
    console.log(`No Moneys`)
 }

let date = new Date(1324339200000)
date.toString("MMM dd")

let currentMilliSecond = new Date().getSeconds()
let futureMilliSecond = new Date().getSeconds()
let capturedMillisecond

if (currentMilliSecond < futureMilliSecond) {
  capturedMillisecond = new Date().getSeconds()
  console.log(`The captured second is ${capturedMillisecond}`)
} else {
  capturedMillisecond = new Date().getSeconds()
  console.log(`The captured second is ${capturedMillisecond}`)
}
```



## exercise 4 
1. Use the Math library to generate a random number
  * let classTime = Math.floor(Math.random() * 100)
2. Create an if/else statement between 0 - 99 to catch to number
3. console log out the result in each if block (the space between the braces on the if)