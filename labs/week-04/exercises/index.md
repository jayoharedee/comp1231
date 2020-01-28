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

// Exersice 3 - Comparing dates using Date
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

Notice something similar about the `if...else`? It looks a little similar to a *similar* piece of JavaScript code. This piece of syntax is called a switch.

replace an `if` with `switch` and you have the ability to evaluate items quite effectively. Some of the most iportant patterns in javascript rely on this keyword. (if this interests you, check out [the reducer pattern](https://kentcdodds.com/blog/the-state-reducer-pattern) and the problem it solves.)

So, if we can go `if` and make something happen like change the value of a variable holding time (code example above), Let's see what a `swith` would get us.

```js
const importantValue = 9

switch (importantValue) {
  case 7:
    console.log(`case 7: You've got the wrong number`)
    break;
  case 8:
    console.log(`case 8: You've got the wrong number`)
    break;
  case 9:
    console.log(`case 9: You've got the right number`)
    break;
  default:
    break;
}
```

>A switch statement first evaluates its expression. It then looks for the first case clause whose expression evaluates to the same value as the result of the input expression (using the strict comparison, ===) and transfers control to that clause, executing the associated statements. (If multiple cases match the provided value, the first case that matches is selected, even if the cases are not equal to each other.) -- Mozilla Developer Network

:squirrel: Don't forget about how important those equality operators are in JavaScript!

:squirrel: === :squirrel:


