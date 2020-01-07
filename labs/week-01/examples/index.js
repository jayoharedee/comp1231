console.log('it works!')

// we can capture the header element by it's ID
const header1 = document.getElementById('header')

/**
 * Using the typeof key we can determine the type of 
 * a JS element
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

