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

  * Booleans: `true`, `false`
  * Numbers: `1799`, `1.9978`
  * Strings: `'abc'` `"abc"` 
  * Two “nonvalues”: `undefined`, `null`

 ### Identifiers
 ### Errors
 ### Testing
 ### Debugging