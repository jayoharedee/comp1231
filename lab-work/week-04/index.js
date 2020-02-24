// Create a constant that will be evaluated in the switch
const CIDR = 18

// initialized value with no value, value to be filled in switch case
let ipAddress

// switch statement
switch(CIDR) {
  // if the number is 18, ipAddress will be defined below
  case 18:
    ipAddress = '192.168.0.0'
    // and then break due to the key below
    break
  case 16:
    // if CIDR was assigned to 16 this would be true
    // assign value to our variable
    ipAddress = '192.165.0.0'
    // and then break
    break
  case 15:
    ipAddress = '192.164.0.0'
    break
  // if nothing evaluated, the default would get hit. Think of a default as you would an `else`.
  default:
    console.log('none of them worked.')
    break
}

console.log(`The network address for ${CIDR} is ${ipAddress}`)

/**
 * Iterables Below
 */

const groceryItems = [
  'blueberries',
  'strawberries',
  'bananas',
  'cherries',
  'apples'
]

// just like we have `if`, `switch`, `break` and other reserved keywords in JavaScript
// `for` is another one of them. When using a for loop, it's typically supplied with three things
// 1. an index variable that keeps tracks of the loops
// 2. a condition to evaluate with each loop so we know how long we should go for.
// 3. an incrementer that increments our index variable with every loop. we do this so loops do not run infinitely

// remember arrays have a property called length, which we'll be using below
for(let index = 0; index < groceryItems.length; index++) {
  // take note of the index++. this is like writing index = index + 1
  console.log(
    `The current index is ${index} and the current iteration provides us with ${groceryItems[index]}`
  )
}

let finished = false
let index = 0
let groceries = groceryItems.length
while (groceries > index) {
  // increment our index so we don't go till infinite
  if (finished) {
    break
  } else {
    index++
  }

  console.log(`
    We've picked up some ${groceryItems[index]}
  `)

  // check if the number of groceries equals our incremented index
  if (groceries === index) {
    console.log(`We've picked everything up, lets exit using our break`)
    // reassign the variable as we are finished now
    finished = true
  }
}
// console.log(groceryItems.length - 1)
console.log(`There are five elements ${groceryItems[groceries - 1]}`) 

// Do...while
let incrementer = 0 
do {
  // ++ means value of variable plus one
  incrementer++
} while (incrementer < 1000)

console.log(`We incremented with a do...while fairly easily. We looped up to ${incrementer}`)