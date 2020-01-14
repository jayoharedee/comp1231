### [Back](../../../)

# Week 02 - Introduction to working with JS
## Embedding JavaScript

> There are a number of ways JS can be introduced into an HTML document. For the purpose of this exercise, we're going to look at a few different ways to complete the process. Sometimes JS should be in the head of an HTML document, and sometimes it should be at the bottom of the documents body. This all depends on if the JS imported is blocking the browser's UI thread which would delay content rendering on our page. How do we know if our JS does that?

## Types of Embeds

JavaScript can be embedded in the head of the document, the body or with HTML5 script tags. One thing to remember from last semester is that HTML loads documents top down. It starts at the top of the document and the parser moves line by line all the way from the top, to the bottom parsing each line of syntax. If we place JS that takes some time to interpret in the head of the document, you can imagine how content would be blocked.

Well, how do we know then when to place something in the head of the document? Ideally, we don't want anything blocking our HTML from rendering. Unless you are working with tracking software or something specific for how the UI elements will be rendered, a library like bootstrap for instance, the most common place you'll be keeping JavaScript imports is just before your closing body tag.

:eyeglasses: Please see below for two examples. One is a script tag allowing us to write JavaScript right in our HTML document, the other is a one liner with a link to an external file containing JS.

```html
<body>
  <h1>Top Of The Document</h1>
  <p>Some important content here.</p>
  <!-- This is what it looks like when we have a script tag opened in our HTML
       It allows us to write JavaScript write in the code just like a file -->
  <script>
    // we can enter JavaScript here now just as we could in an imported file
    // and the HTML parser is going to interpret it as JS because of the script tag

    // console logs are used to report information to the console in your developer tools
    console.log('here is some JS being interpreted in an HTML document')
  </script>

  <!--Here is an example of us importing an external JS file into our HTML document-->
  <script src="./path/to/my.js"></script>
</body>
``` 

Since we want our JS ideally at the bottom of the document, so all of the HTML has a chance to load, your safest bet is placing the script tag there. Also, some times JS will want to mutate or interact with HTML elements on a page. JavaScript can't do this without allowing the HTML to be rendered on the page first. How would JS perform an operation on an HTML element if it's not there?

## Challenge :memo:

1. Open up your favorite editor and create to documents in the same directory
  - index.html
  - index.js
2. Write the markup needed to suffic a HTML document and create one tag. An H1 Tag will do as I showed in the example above.
3. Write a script tag that includes HTML in the body of the document (see where my console log is in the above snippet)
4. In your index.js add a console log with some text in there. Remember, text in JS is called a "string" and can come in the form or single, double quotes or backticks. Backticks offer special functionality but we'll talk about that later.
5. Import your external JavaScript 

After the challenge has been completed, we're going to add some HTML to our document and also talk about how we can declare variables.

If the challenge is done, feel free to move on. If it's not, take the 2 minutes it would take to complete and if you have any questions, please let me know in class or email jmorenstein@georgebrown.ca

## Variables & Values

Variables are a way for us to provide an easy to remember identifier to a more complex data type. To give you an example, it's much easier for me to reference `mySin` than continually having to type 827374657. We can store different types of values under aliased names. To create a variable we need 4 ingredients.

1. An initializer
2. An identifier
3. An assignment operator
4. A value

Let's take a look at each of these four ingredients in our variable salad and see how we can combine them to produce something delicious.

### initializer

Before we create a variable (an alias or name that stores a value), we must intialize it with a special keyword found in the JavaScript language. These intializers come in 3 differnt forms. `var`, `let` and `const`. Each intializer will impact the variable in different ways so it's important to know the distinction between them. I won't get into the semantics right now because all we want to do is declare a variable. Jut remember - to declare a variable we need to use one of these three options to initialize our variable. If we neglect it, the variable becomes known as global. This means it could be accessed anywhere in the application. This might sound like a good idea but it's not - trust me. It's a common way to introduce bugs so please remember that a variable will always start with either

* `var`
* `let`
* `const`

```javascript
var homeNumber
let mobileNumber

// const will through an error if we intiialize a variable name with out assigning a value
// const must take a value on assignment like so
const name = 'Babe Ruth'

// we won't assign a value to the two number variables at the top of this snippet yet.
// I just want to demonstrate how initializers look and how the prefix our identifier (variable name)
```
### identifier

An identifier is just an easy name that we can remember which contains a value or - at some point in time we expect it to contain a value. Let's pretend that we wanted to create a variable that will hold our name. Given the previous snippet we kind of have an idea of how this looks but let's declare a variable rather than just initialize two identifiers (variable names) as we did above with `homeNumber` and `mobileNumber`.

```javascript
// to declare a variable, we need the assignment operator and also a value
let school = 'George Brown College'
// above we initialized with let, identified with school and used the assignment operator (=) to assign a value to the variable. Now instead of typing out and remember what school all over a code base, we can reference it by school and have the value we need.
```

### assignment operator

The assignment operator is just an = character. It lives between our identifier (variable name) and the value we want assigned to the variable name.

```javascript
var emergency = 911
// here im making up a variable name and assigning it the value 911
```

### values

Values come in all shapes and sizes in JavaScript. Arguably, there are 6 primary data types.

  * Boolean
  * String
  * Number
  * Null 
  * Undefined
  * Symbol

Everything else in JavaScript is an object. The above list is what's known to be "primitive data types". Let's unpack each primitive a little bit and get explanation as to what kind of purpose it actually serves.

#### Boolean

Not to be confused with the Boolean object in JavaScript, the Boolean data type can be safely known to be `true` or `false`. Through coersion, JavaScript can make other data types boolen. Type `!!0` in your console and see what the output is. JS has a concept known as "truthy" and "falsy", these terms are used to represent something that would evaluate as true or false but really, they are not a true Boolean data type at the end of the day.

It can be tricky and Booleans are one quirk in JS where we have to treat true/false with caution. There are strict operators used when comparing values which we'll talk more about later

#### String

Fairly straight forward, Strings are the data type we use when we want to "string" together a group of characters to develop a word. Any word can be looked at as a string. To denote a string, we can wrap our value in "", '' or ``.

Wrapping strings with `` allows for string interpolation so we're able to evaluate variables in a string. An example of this would look something like below:

```javascript
const SIN = 77338892
const name = 'Bill'
const address = '88 Dunworth lane'
const role = 'admin'

console.log(`${name}'s SIN is ${SIN}, his address is ${address} and he's an ${role}`)
```

#### Number

When you need to perform some type of calculation, account for a numerical value or work with numbers, you're using the Number data type. There are a lot of methods to play with numbers which we'll be looking at over the next 12 weeks but know that whenever you see a value like the SIN in the snippet above, that's a number.

Sometimes we need to check if things are a number or not. We can use type coersion for this or some methods that are built into the language like isNaN() which will determine if you're value is a number or not depending on how you use the method.

#### Null

Remember in the boolean section we spoke of the notion of "truthy" and "falsy"? Null is an example of something that would be "falsy". Null represents the intentional absence of a value. Often times if a variable doesn't require a value at the time of initialization.

Null expresses a lack of identification, indicating that a variable points to no object. In APIs, null is often retrieved in a place where an object can be expected but no object is relevant. 