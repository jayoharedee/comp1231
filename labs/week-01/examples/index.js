console.log('it works!')

// we can capture the header element by it's ID
const header1 = document.getElementById('header')

/**
 * Using the typeof key we can determine the type of 
 * a JS element. In JavaScript, there is a notion of 
 * primitives which are essentially data types. We'll
 * go through the data types below, work with some of
 * the different types and see how we can use them to
 * power our applications.
 */

console.log(typeof header1) // object

// capturing an element, provides us with an object
// objects in JS use something known as dot notation
// objects have property's and we can access them using
// dot notation, please take notice as to how we capture
// the inner HTML using the dot notation on header1 below
const innerHTML = header1.innerHTML
console.log(innerHTML)
console.log(typeof innerHTML) // string

let shouldChangeBackground = true
console.log(typeof shouldChangeBackground) // boolean
// the value assigned to shouldChangeBackground is knwon as a boolean
// booleans are used to help with control flow when making
// decisions programatically.
if (shouldChangeBackground) {
  header1.style.backgroundColor = 'yellow'
} 

// changed value to false
shouldChangeBackground = false

// now that the value is false, our header style
// will not change as our condition evaluates to false
if (shouldChangeBackground) {
  header1.style.backgroundColor = 'lime'
} else {
  header1.style.backgroundColor = 'purple'
}

// to negate a boolean value, JS uses the ! operator
if (!shouldChangeBackground) {
  header1.style.backgroundColor = 'cyan'
}