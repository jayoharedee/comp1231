console.log('it works!')

/**
 * The intent of this document is to outline some
 * basic JavaScript syntax and to also explore
 * fundamental concepts which we will pick up 
 * in week 02. Please expect to be confused by some
 * of the concepts and take note of what does not
 * make sense to you. After you have jotted down
 * any items from this file that may have prompted
 * a question, please bring the question to class or 
 * emailing me at:
 * jmorenstein@georgebrown.ca
 * 
 * In this file, we will be exploring the notion of 
 * "types" in JavaScript, what they are and how they're
 * used. We'll also have a very gentle introduction to
 * control statements which help us make decisions using
 * code. Another thing to take note of, is how this file
 * is used in the index.html found in this same folder.
 * 
 * Please also look at the header and body of the
 * HTML document as there are some notes there for you too.
 * 
 * Oh BTW, in programming languages there is a concept
 * known as "comments". You're actually reading one right
 * now. Comments allow developers to leave notes to help
 * aide the coding process. Comments do not get interpreted
 * by the languages engine. They are here only to make lives
 * easier for humans. This is what a multiline comment looks
 * like but there are also single line comments as well.
 * 
 * See below for a single line comment and take note of the
 * first two characters right before the "Hi!" as that's how
 * a single line comment is initialized.
 */

// Hi! Here is that single line comment I was telling you about

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