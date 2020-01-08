// remember the developer tools? open the "console" tab and have a look
// at what's there. the console.log you see below allows us to print info
// out to the console
console.log("it works!");

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
 *
 * If you notice the top of this file, you'll see 3 single line
 * comments. Typically if you expect a comment to exceed a couple
 * lines, you'll want to opt for this multiline style.
 */

// Hi! Here is that single line comment I was telling you about

// we can capture the header element by it's ID
const header1 = document.getElementById("header"); // capturing an html element using JS, we now have an HTML element which can be referrenced by header1

/**
 * Using the typeof key we can determine the type of
 * a JS element. In JavaScript, there is a notion of
 * primitives which are essentially data types. We'll
 * go through the data types below, work with some of
 * the different types and see how we can use them to
 * power our applications.
 */

// remember: using console.log() we can print to the dev tools
// so check the "console" tab in your developer tools.
console.log(typeof header1); // object
// not sure how to check the developer tools? right click on
// your browser window and hit "inspect element". this will open the console

// capturing an element, provides us with an object
// objects in JS use something known as dot notation
// objects have property's and we can access them using
// dot notation, please take notice as to how we capture
// the inner HTML using the dot notation on header1 below
const innerHTML = header1.innerHTML;
console.log(innerHTML); // "First Header Element"
console.log(typeof innerHTML); // type: string

/**
 * String Type!
 *
 * The string type as found above is comprised of characters
 * usuaully used to make words. A string can be created by using
 * "double quotes like this" or 'single quotes like this'. ES6
 * (the newish JS specification) introduce backticks for strings too.
 * Strings crafted with back ticks `Have a special ${purpose}` which
 * we'll be exploring later.
 *
 * If you have characters joined together to create a word you'll want it
 * wrapped in quotes (unless you're using the backtick functionality).
 * I prefer single quotes because computationally they are cheaper.
 * Yes, I am that petty when it comes to computational taxation.
 */

 // The string obtained using the dotnotation on the header we captured by ID
 // would resemble "First Header Element" or 'First Header Element' if we wanted to use single quotes

/**
 * Boolean Type!
 *
 * The boolean type is something that you're already familiar with, you
 * may just not know it. It essentially is used to describe if something
 * is true or false. The result of the boolean value, allows us to make decisions
 * programatically. Boolean types in JS can be quirky and we'll look at the notion
 * of "truthy" and "falsy" but for now, please just note that Boolean keywords will
 * either be true or false.
 *
 * IMPORTANT PLEASE READ BELOW:
 * Take a look below at how we can take a boolean type, and assign it to a name. This
 * is known as a variable assignment. Why variable assignment? Well, we are assigning
 * the boolean value (in this case true) to a word called shouldChangeBackground. The
 * assignment part is made thanks to the = sign between the shouldChangeBackground (the variable name)
 * and the boolean value of true. Why variable? Well, some times the value can vary.
 * Below you'll see an example of how the value of shouldChangeBackground varies by use
 * re-assigning it to a new vale (false).
 *
 * As mentioned, booleans help us make decisions in code. Below we make a decision using
 * an "if statement". `if` statements allow us to take in a value, in this case true which
 * is assigned to shouldChangeBackground. The if statement is going to look at what value
 * the variable shouldChangeBackground holds and make a decision based on that.
 *
 * Since shouldChangeBackground contains a value of true, the if statement will then
 * evaluate as true and execute the code found between the { ... }.
 *
 * Anything wrapped inside a { ... } is known as a block statement. For now, don't
 * worry about what a block statement is, we'll be exploring them more next week.
 * Just take away from the example below that when an `if` statement evaluates to true
 * whatever is found in the block will be executed. If the value was false, the block
 * statement would be skipped.
 */
let shouldChangeBackground = true;
console.log(typeof shouldChangeBackground); // type: boolean
if (shouldChangeBackground) {
  header1.style.backgroundColor = "yellow";
}

// We can change some variables, here is an example of us changing our previous variable
// to false to explore how mutations/changes in code can occurr.
shouldChangeBackground = false;

// now that the value is false, our header style
// will not change as our first `if` condition below
// will fail as it evaluates to false. Since it evaluates to false,
// it's going to skip the block statement as mentioned in the Boolean
// multiline comment above and the `else` block with be interpreted.
if (shouldChangeBackground) {
  header1.style.backgroundColor = "lime";
} else {
  header1.style.backgroundColor = "purple";
}

/**
 * We aren't going to be going to deep into control statements right now.
 * to provide some more info on the example above, please take away this:
 *
 * If we have an if/else statement just as we do above this multi-line comment
 * 1 out of the 2 block statements will evaluate. Since shouldChangeBackground
 * had the value changed from true to false on line 134 of this file, the `if`
 * of the if/else will fail. When this happens, the interpreter executes whaterver
 * code is found in the else. It defaults to else if the initial if (variablename) {}
 * fails. The `else` keyword is used to provide an action should the initial `if` fail
 * due to the value being false.
 */

// We can also inverse a boolean value, JS uses the ! operator to do this
// using ! in front of a boolean (true or false) will make true turn into false
// or false turn into true. The ! operator is used when we want the opposit effect
// of what the value holds.
if (!shouldChangeBackground) {
  // shouldChangeBackground is true but because we prefix with !, it changes the condition to be true
  // since the value (false) assigned to the shouldChangeBackground variable had an !
  // it made the condition true and we are now inside the block where we can execute the code below
  header1.style.backgroundColor = "cyan";
}

/**
 * Null type
 *
 * This is where things may get a little abstract or not as obvious as some of the
 * other types we explored. If so, please bring your questions to class or email me.
 *
 * Null is considered to be "falsy" as it's not truly a boolean type as false is but
 * it can produce similar affects to the false keyword. `null` is used to express a
 * lack of identification. When we create a variable with the null type, we are essentialy
 * expressing a lack of identification of what the value would be.
 *
 * If you're creating a variable and sometimes you're not sure what type should be
 * assigned to a variable, some developers will assign `null`. If `null` is a value
 * passed to an if statement, it would be read as false. However, in actuality it is
 * not false, it's null.
 *
 * That might not make a lot of sense but just know on a high level if you see `null`
 * you can expect the value to not evaluate in a conditional statement (when we're making decisions)
 *
 * Lets take a moment to talk about creating variables and then assign the null type to it.
 */

var isAuthorized = null
console.log(isAuthorized)

// Above we created a variable called isAuthorized. To do this we needed 4 pieces of syntax.
/**
 * 1. an initializer (var)
 * 2. an identifier (isAuthorized)
 * 3. the assignment operator (=)
 * 4. a value (null)
 * 
 * We don't need all four ingredients for a variable salad, sometimes we just want to initialize
 * and identifier. Let's see what that looks like below.
 */

/**
 * When creating varibales in JavaScript, before we give our variable a name, we must
 * use a special keyword to initialize the variable. These keywords are `var`, `const`
 * and `let`. Each keyword behaves differently so we must know the distinctions between
 * them but we'll save the specifics for later.
 *
 * All that's important to note right now, is that if you want to create a variable,
 * it must start with either `var`, `const` or `let`. If not it is considered to be
 * globally scoped which means it can be accessed anywhere. This commonly introduces bugs. 
 * Below we are going to initialize two variables using var and let.
 */

// note that we are not assigning a value type. We are only creating a name for a variable.
// we can assign a value to this later using var or let. const must have a value assigned
// at the time of declaration.

// below we are initializing two variables. next to the initializing keywords(var and let)
// we have "identifiers". An identifier is a special name for us to use in order to 
// referrence at a later time to either assign or retrieve a value.
var currentTime // var has special use cases which we'll talk about in class
let expirationTime // let also has special use cases which we'll explore in our future labs

// We now have two variables initialized and identified by a name stored in memory.
// this process is known as "declaring" a variable. We want to do this to assign a value type. 
// We've used the intializers `var` and `let` to create a name in memory for us to store and assign a value
// at a later time. Let's assign a value right now using the assignment operator (=).
currentTime = '10:57' // we've assigned a string data type
expirationTime = '0:00' // we've assigned another string to an additional variable

/**
 * We now have two variables in memory with string types assigned to them.
 * currentTime and expiration time. Let's console log the two values and see
 * what the result is. Please remember to check the console tab in your browsers developer tools
 */

console.log(
  'The current time is', currentTime, 'and the expiration is at', expirationTime
)

// you should see the above line consoled out in your developer tools console tab

// below is an example of the third way to create a string that I spoke of earlier.
// it's a newer feature that allows us to place variables inside of a string and 
// have the variables "interpolate" or show up when wrapping variables inside a ${}
// I find it's easier when we want the value of a variable to show up in a string
console.log(
  `The current time is ${currentTime} and the expiration is ${expirationTime}`
)

/**
 * Since we'll be picking these concepts up next week, it's a good idea to stop here
 * and save some of the other types for us to review together in class as they deserve
 * a better explanation than just comments.
 * 
 * Perhaps the last type I will leave you with is an interger so you know that it's 
 * possible to assign numbers as well. There are different types of numbers so let's
 * leave things off with a very simple variable declaration containing the code for
 * our course.
 */

 let comp = 1231 // number data type
 console.log(comp) // logging the value of our variable declared above
 console.log(typeof comp) // number

 /**
  * Please email any time with any questions. Thank you for making it this far.
  * 
  * jmorenstein@georgebrown.ca
  */