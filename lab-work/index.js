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

// TIP: Rewrite this switch but play with it by removing the breaks and see what results you are left with.
// Pay close attention to which cases have breaks and which ones don't. Sometimes having no breaks makes sense.

const PRODUCTION_SERVER = '192.168.24.3:3000'
// Take note, the cases without breaks in their statement will still run when we don't want them too.
// will only want something to happen for the production socket
switch (PRODUCTION_SERVER) {
  case '192.168.24.3:3000':
    console.log('Do production tasks here.')
  case '192.168.0.0':
    console.log('Not the production server.')
  case '192.168.0.1':
    console.log('Also not the production server.')
    console.log('log or do some network admin stuff here')
    break
  case '192.168.0.3':
    console.log('Not the production server yet again.')
    console.log('log or do some network admin stuff here')
    break
  default:
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
  index++
  console.log(`
    We've picked up some ${groceryItems[index]}
  `)

  // check if the number of groceries equals our incremented index
  if (groceries === index) {
    console.log(`We've picked everything up, lets exit using our break`)
    // reassign the variable as we are finished now
    finished = true
    // escape the loop
    break 
  }
}
// remember, groceryitems have a length property. Don't worry about properties now, just know if you 
// ever want to know the length of an array, the syntax is: `yourArray.length` and it will return a number
console.log(`There are five elements ${groceryItems[groceryItems.length - 1]}`) 

