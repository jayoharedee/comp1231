

# Week 04 - Working with Conditional Statements

### [BACK](../../../)

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

After digesting the above example, you need create an if/else..if/else statement. I will leave some code for you to copy and get started.

1. You will be given a variable. You must determine that variables data type. If correct typeof comparison, enter the if.
2. In the if statement, you will be given a random number and with that number, you must figure out what it's value is using `if/else..if/else` statement and console logs in the if block just like we've been practicing.
3. Once inside the evaluated if statement, you must declare a value in the `toBeDeclared` variable that is previously fine for you.

Remember some easy hints:

```js
const phone = 4168882219
const postalCode = 'M4B1J7'
const isActive = false

console.log(typeof phone) // returns "number"
console.log(typeof postalCode) // returns "string"
console.log(typeof isActive)  // returns boolean

console.log(typeof phone === 'number') // returns true
console.log(typeof postalCode === 'string') // returns true
console.log(typeof isActive === 'boolean')  // returns true

console.log(typeof phone !== 'number') // returns false
console.log(typeof postalCode !== 'string') // returns false
console.log(typeof isActive !== 'boolean')  // returns 

const bool = false
if (typeof isActive === 'boolean') {
  // this will evaluate
}

if (typeof isActive !== 'boolean') {
  // this will not evaluate
}

// nested if statements
if (typeof postalCode === 'string') {
  const isAvtice = false
  if (!isActive) {
    console.log(
      'this will be consoled to your browsers console because isActive is', false, 'but we included a ! before the variable changing the boolean value'
    )
  }
}
```
