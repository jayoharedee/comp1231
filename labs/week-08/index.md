# COMP 1231 Intersession Workshop

This document will be covering each week we've completed so far to help you refresh and challenge your JS knowledge. We will be looking at each week in it's section starting with week one. You can skip to particular subject matter if there are specific skills that you'd like to focus on.

# Week One

In week one we spoke about the role JS plays in the overall architecture of web applications. There is a decent amount of introductory material that I'll be excluding and we'll focus on the syntactical skills we picked up in week one.

### How to include JS script tags
JS script tags is HTML used to import JavaScript from another location.
```html
<script src="./path/to/js"></script>
```
The old way of including `script` tags in your HTML document was to include it at the bottom of the HTML body. In 2020, we now have two attributes to place on our script tag to help the scripts download without the browser blocking content from being rendered. According to [caniuse](http://caniuse.com/#feat=script-defer) **96.77%** of all browsers support these attributes. The support is just as strong for the [async attribute](http://caniuse.com/#feat=script-async).

The current state-of-the-art method to load scripts is in the `<head></head>` of your document using the `async` or `defer` attributes. Using these attributes tell the browser it's safe to continue parsing while the scripts are being downloaded.

What's the diff between `async` and `defer`? The `async` attribute will execute as soon as the script has downloaded without blocking the browsers UI thread.

`defer` will wait until the entire document has been loaded. To learn more about these attributes, check out what [Google has to say](https://developers.google.com/speed/docs/insights/BlockingJS#deferJS) about their usage.

### Basic Syntax
Here are a few example with inline comments to help decipher the syntax. Remember inline comments can be used by two strokes of a / like this `// here is a js comment`

```js
var x  // declaring a variable
let y  // declaring a variable with let
x = 3 + y  // assigning a value to the variable `x`

let phoneNumber = '647-888-8888' // declare and assign a value

// A conditional statement
if (x === 0) {  // Is `x` equal to zero?
  x = 123
}

// Defining function `getPhoneNumber` with parameters `phone`
function getPhoneNumber(phone) {
    return phone
}

// envoking the function which would return the variable previously declared
getPhoneNumber(phoneNumber)
```

Take note of two different uses of the equals sign above
  * A single = is used to assign a value to a variable
  * Triple equals is checks both the value of the variable and it's type

### Statements Versus Expressions
There are two syntactic categories in JS, statements and expressions.
  * Statements "do things." A program is a sequence of statements. Below is an example of a statement which declares (creates) a variable
    * `var phoneNumber`
  * Expressions produce values. They are function argumnts, the right side of a variable assignment, etc. Here is an example of an expression
    * `9 * 44`

The distinction between statements and expressions is best illustrated by the fact that JavaScript has two different ways to do if-then-else—either as a statement:

```js
var x = 3
var y = 1
if (y >= 0) {
  x = y;
} else {
  x = -y;
}
```

or as an expression:

```js
var x = y >= 0 ? y : -y;
```

### Semicolongs
They're optional. The intention of them is to terminate statements but not blocks. Notice in the example above there are no semicolons near the if block. JavaScript has functionality known as Automatic Semicolon Insertion.

### Comments 
JavaScript has two kinds of comments: single-line comments and multiline comments. Single-line comments start with // and are terminated by the end of the line:
```js
x++ // single-line comment here
```

Multiline comments are delimited by /* and */:

/* This is
   a multiline
   comment.
 */

 # Week Two
 More of the basics foudn here such as working with datatypes, identifiers (variable names), errors, testing and debugging.

 ### Datatypes 
 Identifiers are names that play various syntactic roles in JavaScript. For example, the name of a variable is an identifier. Identifiers are case sensitive.

JavaScript has many values that we have come to expect from programming languages: booleans, numbers, strings, arrays, and so on. All values in JavaScript have properties. Each property has a key (or name) and a value. You can think of properties like fields of a record. You use the dot (.) operator to read a property:

```js
value.propKey
```

For example, the string 'abc' has the property length:

```js
> var str = 'abc'
> str.length
3
```

The preceding can also be written as:
```js
> 'abc'.length
3
```

And you can use it to invoke methods:

```js
> 'hello'.toUpperCase()
'HELLO'
```

In the preceding example, we have invoked the method toUpperCase() on the value 'hello'.

#### Primitive Values Versus Objects
JavaScript makes a somewhat arbitrary distinction between values:

  * The primitive values are booleans, numbers, strings, null, and undefined.
  * All other values are objects.

Primitive Values

  * Booleans: `true`, `false` (find more on this when we look at logical operators)
  * Numbers: `1799`, `1.9978`
  * Strings: `'abc'` `"abc"` 
  * Two “nonvalues”: `undefined`, `null`

#### Strings
Strings can be created directly via string literals. Those literals are delimited by single or double quotes. The backslash (\) escapes characters and produces a few control characters. Here are some examples:

```js
'abc'
"abc"

'Did she say "Hello"?'
"Did she say \"Hello\"?"

'That\'s nice!'
"That's nice!"

'Line 1\nLine 2'  // newline
'Backlash: \\'
```

Single characters are accessed via square brackets:

```js
> var str = 'abc';
> str[1]
'b'
```

The property length counts the number of characters in the string:

```js
> 'abc'.length
3
```

Like all primitives, strings are immutable; you need to create a new string if you want to change an existing one.

#### String Operators
Strings are concatenated via the plus (+) operator, which converts the other operand to a string if one of the operands is a string:

```js
> var messageCount = 3
> 'You have ' + messageCount + ' messages'
'You have 3 messages'
To concatenate strings in multiple steps, use the += operator:

> var str = ''
> str += 'Multiple '
> str += 'pieces '
> str += 'are concatenated.'
> str
'Multiple pieces are concatena
```

#### String Methods
Strings have many useful methods (see [String Prototype Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods)). Here are some examples:
```js
> 'abc'.slice(1)  // copy a substring
'bc'
> 'abc'.slice(1, 2)
'b'

> '\t xyz  '.trim()  // trim whitespace
'xyz'

> 'comp'.toUpperCase()
'COMP'

> 'abc'.indexOf('b')  // find a string
1
> 'abc'.indexOf('x')
-1
```

#### Numbers
To create a primitive type object, one could use the Number() function provided by the language. The JavaScript Number type is double-precision 64-bit binary format. In more recent implementations JavaScript also supports integers with arbitrary precision using the BigInt type.

The primary uses of the Number object are:

  * If the argument cannot be converted into a number, it returns `NaN`.
  * In a non-constructor context (i.e., without the new operator), Number can be used to perform a type conversion.

Just like strings Number provides properties and methods which can be used for additional functionality when working with the Number data type.

```js
// for instance find the largest positive number available
Number.MAX_VALUE
// output: 1.7976931348623157e+308

function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return 'Number NaN'
  }
  if (isNaN(x)) {
    return 'NaN'
  }
}

console.log(typeOfNaN('100F'))
// expected output: "NaN"
```

Due to both equality operators, == and ===, evaluating to false when checking if NaN is NaN, the function `Number.isNaN()` has become necessary. This situation is unlike all other possible value comparisons in JavaScript.

```js
Number.isNaN(NaN)        // true
Number.isNaN(Number.NaN) // true
Number.isNaN(0 / 0)      // true

// e.g. these would have been true with global isNaN()
Number.isNaN('NaN')      // false
Number.isNaN(undefined)  // false
Number.isNaN({})         // false
Number.isNaN('blabla')   // false
```

#### Date
A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since midnight on January 1, 1970, UTC. This date and time is the same as the UNIX epoch, which is the predominant base value for computer-recorded date and time values.

There are a number of methods available to obtain a date in various formats, as well as to perform time zone conversions. Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.

In addition to methods to read and alter individual components of the local date and time (such as `getDay()` and `setHours()`), there are also versions of the same methods that read and manipulate the date and time using UTC (such as `getUTCDay()` and `setUTCHours()`).

Again, just like String and Number, the Date primitive has properties like String's `.length` but it's not as useful. Where Date brings power to the language is through it's methods.

```js
const moonLanding = new Date('July 20, 69 00:20:18')

console.log(moonLanding.getMonth()) // (January gives 0)
// expected output: 6
```

Have a look at the utilities JavaScript offers over [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Date_instances) as there's a plethora of helpful functions to make coding easier.

 ### Identifiers
 Roughly, the first character of an identifier can be any Unicode letter, a dollar sign ($), or an underscore (_). Subsequent characters can additionally be any Unicode digit. Thus, the following are all legal identifiers:

```js
arg0
_tmp
$elem
```

The following identifiers are reserved words—they are part of the syntax and can’t be used as variable names (including function names and parameter names):
![reserved words](./assets/Screen&#32;Shot&#32;2020-02-24&#32;at&#32;12.08.37&#32;AM.png "Logo Title Text 1")

`Infinity`, `NaN` and `undefined` are not officially reserved words but best practice dictates that they should be treated as they are.

Also, don't create global variables. This means when you're creating a variable ensure you are using `let`, `const` or `var` before providing your variable with a name.

# Week 3

### Conditional Statements
The if statement has a then clause and an optional else clause that are executed depending on a boolean condition:

```js
const myvar = 77
if (myvar === 0) {
    // then
}

if (myvar === 0) {
    // then
} else {
    // else
}

if (myvar === 0) {
    // then
} else if (myvar === 1) {
    // else-if
} else if (myvar === 2) {
    // else-if
} else {
    // else
}
```

I recommend always using braces (they denote blocks of zero or more statements). But you don’t have to do so if a clause is only a single statement (the same holds for the control flow statements for and while):

```js
if (x < 0) return -x
```

The following is a switch statement. The value of fruit decides which case is executed:

```js
const fruit = 'apple'
switch (fruit) {
  case 'banana':
    // ...
    break;
  case 'apple':
    // ...
    break;
  default:  // all other cases
    // ...
}
```

The “operand” after case can be any expression; it is compared via === with the parameter of switch.

#### Booleans
The primitive boolean type comprises the values true and false. The following operators produce booleans:

  * Binary logical operators: && (And), || (Or)
  * Prefix logical operator: ! (Not)
  * Comparison operators:
    * Equality operators: ===, !==, ==, !=
    * Ordering operators (for strings and numbers): >, >=, <, <=

##### Truthy and Falsy
Whenever JavaScript expects a boolean value (e.g., for the condition of an if statement), any value can be used. It will be interpreted as either true or false. The following values are interpreted as false:

  * undefined, null
  * Boolean: false
  * Number: 0, NaN
  * String: ''

All other values (including all objects!) are considered true. Values interpreted as false are called falsy, and values interpreted as true are called truthy. Boolean(), called as a function, converts its parameter to a boolean. You can use it to test how a value is interpreted:

```js
Boolean(undefined)
// output: false
Boolean(0)
// output: false
Boolean(3)
// output: true
Boolean({}) // empty object
// output: true
Boolean([]) // empty array
// output: true
```

#### Binary Logical Operators
Binary logical operators in JavaScript are short-circuiting. That is, if the first operand suffices for determining the result, the second operand is not evaluated. For example, in the following expressions, the function foo() is never called:

```js
false && foo()
true  || foo()
```

Furthermore, binary logical operators return either one of their operands—which may or may not be a boolean. A check for truthiness is used to determine which one:

#### And (&&)
If the first operand is falsy, return it. Otherwise, return the second operand:

```js
NaN && 'abc'
// output: NaN
123 && 'abc'
// output: 'abc'
```

#### Or (||)
If the first operand is truthy, return it. Otherwise, return the second operand:
```js
'abc' || 123
// output: 'abc'
'' || 123
// output: 123
```

#### Equality Operators
JavaScript has two kinds of equality:

  * Normal, or “lenient,” (in)equality: == and !=
  * Strict (in)equality: === and !==

Normal equality considers (too) many values to be equal (==, !=)), which can hide bugs. Therefore, always using strict equality is recommended (===, !==).


### Operator Precedence
Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.
```js
console.log(3 + 4 * 5) // 3 + 20
// expected output: 23

console.log(4 * 3 ** 2) // 4 * 9
// expected output: 36

let a
let b

console.log(a = b = 5)
// expected output: 5
```

#### Associativity
Associativity determines how operators of the same precedence are parsed. For example, consider an expression:

> a OP b OP c

Left-associativity (left-to-right) means that it is processed as (a OP b) OP c, while right-associativity (right-to-left) means it is interpreted as a OP (b OP c). Assignment operators are right-associative, so you can write:

```js
a = b = 5;
```

With the expected result that a and b get the value 5. This is because the assignment operator returns the value that is assigned. First, b is set to 5. Then the a is also set to 5, the return value of b = 5, aka right operand of the assignment.

#### Truthy/Falsey Examples
```js
3 > 2 && 2 > 1
// returns true

3 > 2 > 1
// returns false because 3 > 2 is true, then true is converted to 1 in inequality operators, therefore true > 1 => 1 > 1 which is false
// Adding parentheses makes things clear: (3 > 2) > 1
```

# Week Four
### Loops
We've looked at conditional statements now let's spend a bit of time covering loops.

The for loop has the following format:

for (⟦«init»⟧; ⟦«condition»⟧; ⟦«post_iteration»⟧)
    «statement»

init is executed at the beginning of the loop. condition is checked before each loop iteration; if it becomes false, then the loop is terminated. post_iteration is executed after each loop iteration.

This example prints all elements of the array arr on the console:
```js
for (var i=0; i < arr.length; i++) {
    console.log(arr[i]);
}
```
The while loop continues looping over its body while its condition holds:
```js
// Same as for loop above:
var i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
```
The do-while loop continues looping over its body while its condition holds. As the condition follows the body, the body is always executed at least once:
```js
do {
    // ...
} while (condition);
```
In all loops:
  
  * `break` leaves the loop.
  * `continue` starts a new loop iteration.

# Week Five
### Arrays
Arrays are sequences of elements that can be accessed via integer indices starting at zero.

Creating arrays
```js
var arr = [ 'a', 'b', 'c' ]
```

The preceding array has three elements: the strings 'a', 'b', and 'c'. You can access them via integer indices:

```js
arr[0]
// output: 'a'
arr[0] = 'x';
arr
// output: [ 'x', 'b', 'c' ]
```
The length property indicates how many elements an array has. You can use it to append elements and to remove elements:

```js
var arr = ['a', 'b'];
arr.length
// output: 2

arr[arr.length] = 'c';
arr
// output: [ 'a', 'b', 'c' ]
arr.length
// output: 3

arr.length = 1;
arr
// output: [ 'a' ]
```

# Week Six And Seven

### Functions
What is a Function?
  * A function is a subprogram designed to perform a particular task.
  * Functions are executed when they are called. This is known as invoking a function.
  * Values can be passed into functions and used within the function.
  * Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
  * Functions are objects.

#### Defining functions
A Function Declaration defines a named function. To create a function declaration you use the function keyword followed by the name of the function. When using function declarations, the function definition is hoisted, thus allowing the function to be used before it is defined.
```js
// example definition
function name(parameters) {
  // statements
}
```

```js
function add(param1, param2) {
  return param1 + param2
}
```
The preceding code defines a function, add, that has two parameters, param1 and param2, and returns the sum of both parameters. This is how you call that function:
```js
add(6, 1)
// output: 7
add('a', 'b')
// output: 'ab'
```

A Function Expressions defines a named or anonymous function. An anonymous function is a function that has no name. Function Expressions are not hoisted, and therefore cannot be used before they are defined. In the example below, we are setting the anonymous function object equal to a variable.

```js
var add = function (param1, param2) {
    return param1 + param2
}
```

An Arrow Function Expression is a shorter syntax for writing function expressions. Arrow functions do not create their own this value.

```js
let name = (parameters) => {
  // statements
}
```

#### Parameters vs. Arguments
You may have heard the terms parameters and arguments used interchangeably. While very similar, there is an important distinction to make between these two keywords.

**Parameters** are used when defining a function, they are the names created in the function definition. In fact, during a function definition, we can pass in up to 255 parameters! Parameters are separated by commas in the (). Here’s an example with two parameters — param1 & param2:

```js
const param1 = true
const param2 = false
function twoParams(param1, param2){
  console.log(param1, param2)
}
```
**Arguments**, on the other hand, are the values the function receives from each parameter when the function is executed (invoked). In the above example, our two arguments are true & false.

#### Invoking a Function
Functions execute when the function is called. This process is known as invocation. You can invoke a function by referencing the function name, followed by an open and closed parenthesis: `()`.



