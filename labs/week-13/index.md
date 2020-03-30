# Events - How to trigger code with user interaction

Ever click on a button and have a modal or pop-up appear displaying additional information? How about scroll down on a page and find that new content is loaded in place? These are examples of events. This week we'll be looking at events and how we can utilize them in JavaScript. Please read on for event examples and see how we can make them use of Events for everything from network requests to UI enhancements.

## DOM - Document Object Model

The DOM (or Document Object Model) is a tree-like representation of the contents of a webpage - a tree of “nodes” with different relationships depending on how they’re arranged in the HTML document.

```html
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
```

In the above example, the `<div class="display"></div>` is a “child” of `<div id="container"></div>` and a sibling to `<div class="controls"></div>`. Think of it like a family tree. `<div id="container"></div>` is a parent, with its children on the next level, each on their own “branch”.

## Targeting Nodes with Selectors

When working with the DOM, you use “selectors” to target the nodes you want to work with. You can use a combination of CSS-style selectors and relationship properties to target the nodes you want. Let’s start with CSS-style selectors. In the above example, you could use the following selectors to refer to `<div class="display"></div>`:

  * div.display
  * .display
  * #container > .display
  * div#container > div.display

You can also use relational selectors (i.e. firstElementChild or lastElementChild etc.) with special properties owned by the nodes.

```js
const container = document.querySelector('#container');
// select the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// select the first child of #container => .display

const controls = document.querySelector('.controls');   
// select the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display
```

So you’re identifying a certain node based on its relationships to the nodes around it.

## DOM Methods

When your HTML code is parsed by a web browser, it is converted to the DOM as was mentioned above. One of the primary differences is that these nodes are objects that have many properties and methods attached to them. These properties and methods are the primary tools we are going to use to manipulate our webpage with JavaScript. We’ll start with the query selectors - those that help you target nodes.

### Query Selectors
  * element.querySelector(selector) returns reference to the first match of selector
  * element.querySelectorAll(selectors) returns a “nodelist” containing references to all of the matches of the selectors
  
> There are several other, more specific queries, that offer potential (marginal) performance benefits, but we won’t be going over them now.

It’s important to note that when using querySelectorAll, the return value is not an array. It looks like an array, and it somewhat acts like an array, but it’s really a “nodelist”. The big distinction is that several array methods are missing from nodelists. One solution, if problems arise, is to convert the nodelist into an array. You can do this with Array.from() or the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

### Element Creation
  * document.createElement(tagName[, options]) creates a new element of tag type tagName. [options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point.
  
```js
const div = document.createElement('div');
```

This function does NOT put your new element into the DOM - it simply creates it in memory. This is so that you can manipulate the element (by adding styles, classes, ids, text etc.) before placing it on the page. You can place the element into the DOM with one of the following methods.

### Append Elements
  * parentNode.appendChild(childNode) appends childNode as the last child of parentNode
  * parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode

### Altering Elements
When you have a reference to an element, you can use that reference to alter the element’s own properties. This allows you to do many useful alterations, like adding/removing and altering attributes, changing classes, adding inline style information and more.

```js
const div = document.createElement('div');                     
// create a new div referenced in the variable 'div'
```

### Adding inline style
```js
div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white');    
// adds several style rules
```
Note that if you’re accessing a kebab-cased css rule from JS, you’ll either need to use camelcase or you’ll need to use bracket notation instead of dot notation.

```js
div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the divs background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white" // ok in a string
```

### Working with classes
```js
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// remove "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it
```
It is often standard (and more clean) to toggle a CSS style rather than adding and removing inline CSS.

### Adding text content
```js
div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div
```

### Adding HTML content
```js
div.innerHTML = '<span>Hello World!</span>';                   
// renders the html inside div
```

> Note that textContent is preferable for adding text, and innerHTML should be used sparingly as it can create security risks if misused.

Let’s take a minute to review what we’ve covered and give you a chance to practice this stuff before moving on. Check out this example of creating and appending a DOM element to a webpage.

```html
<!-- your html file: -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container"></div>
</body>
```
```js
// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);
```

In the JavaScript file, first we get a reference to the container div that already exists in our HTML. Then we create a new div and store it in the variable content. We add a class and some text to the content div and finally append that div to container. All in all it’s a simple process. After the JavaScript code is run, our DOM tree will look like this:

```html
<!-- The DOM -->
<body>
  <h1>
    THE TITLE OF YOUR WEBPAGE
  </h1>
  <div id="container">
  	<div class="content">
      This is the glorious text-content!
    </div>
  </div>
</body>
```

Keep in mind that the JavaScript does not alter your HTML, but the DOM - your HTML file will look the same, but the JavaScript changes what the browser renders.

**Important note:** Your JavaScript, for the most part, is run whenever the JS file is run, or when the script tag is encountered in the HTML. If you are including your JavaScript at the top of your file, many of these DOM manipulation methods will not work because the JS code is being run before the nodes are created in the DOM. The simplest way to fix this is to include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created.

# Exercise
Copy the example above into files on your own computer. To make it work you’ll need to supply the rest of the HTML skeleton and either link your javascript file, or put the javascript into a script tag on the page. Make sure everything is working before moving on!

Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

  1. a <p> with red text that says “Hey I’m red!”
  2. an <h3> with blue text that says “I’m a blue h3!”
  3. a <div> with a black border and pink background color with the following elements inside of it:
     1. another <h1> that says “I’m in a div”
     2. a <p> that says “ME TOO!”
     3. Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

## Events
Now that we have a handle on manipulating the DOM with JavaScript, the next step is learning how to make that happen dynamically, or on demand! Events are how you make that magic happen on your pages. Events are actions that occur on your webpage such as mouse-clicks or keypresses, and using JavaScript we can make our webpage listen and react to these events.

There are three primary ways to go about this: you can attach functions attributes directly on your HTML elements, you can set the “on_event_” property on the DOM object in your JavaScript, or you can attach event listeners to the nodes in your JavaScript. Event listeners are definitely the preferred method, but you will regularly see the others in use, so we’re going to cover all three. 

### method 1
```html
<button onclick="alert('Hello World')">Click Me</button>
```
This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only have 1 “onclick” event per element.

### method 2
```html
<!-- the html file -->
<button id="btn">Click Me</button>
```

```js
// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
```
This is a little better. We’ve moved the JS out of the HTML and into a JS file, but we still have the problem that a DOM element can only have 1 “onclick” property.

### method 3
**(need to review arrow functions? [LINK](https://javascript.info/arrow-functions-basics))**
```html
<!-- the html file -->
<button id="btn">Click Me</button>
```
```js
// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});
```

Now, we maintain separation of concerns, and we also allow multiple event listeners if need arise. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.

Note that all 3 of these methods can be used with named functions like so:
```html
<!-- the html file -->
<!-- METHOD 1 -->
<button onclick="alertFunction()">CLICK ME BABY</button>
```
```js
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);
```

Using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places.

With all three methods we can access more information about the event by passing a parameter to the function that we are calling. Try this out on your own machine:

```js
btn.addEventListener('click', function (event) {
  console.log(event);
});
```

The `event` in that function is an object that references the event itself. Within that object you have access to many useful properties and functions such as which mouse button or key was pressed, or information about the event’s target - the DOM node that was clicked.

Try this:
```js
btn.addEventListener('click', function (event) {
  console.log(event.target);
});
```

and now this:
```js
btn.addEventListener('click', function (event) {
  event.target.style.background = 'blue';
});
```

pretty cool eh?

#### Attaching listeners to groups of nodes
This might seem like a lot of code if you’re attaching lots of similar event listeners to many elements. There’s a few ways to go about doing that more efficiently. We learned above that we can get a nodelist of all of the items matching a specific selector with querySelectorAll('selector'). In order to add a listener to each of them we simply need to iterate through the whole list like so:
```html
<div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
</div>
```

```js
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});
```
This is just the tip of the iceberg when it comes to DOM manipulation and event handling, but it’s enough to get you started with some exercises. In our examples so far we have been using the ‘click’ event exclusively, but there are many more available to you.

## This
A function's this keyword behaves a little differently in JavaScript compared to other languages. It also has some differences between strict mode and non-strict mode.

In most cases, the value of this is determined by how a function is called (runtime binding). It can't be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

```js
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42
```

Above, the syntax used in func is `this.func`. A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.

In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true

a = 37;
console.log(window.a); // 37

this.b = "GBC";
console.log(window.b)  // "GBC"
console.log(b)         // "GBC"
```

Inside a function, the value of this depends on how the function is called. 

Since the following code is not in strict mode, and because the value of this is not set by the call, this will default to the global object, which is window in a browser.
```js
function f1() {
  return this;
}

// In a browser:
f1() === window; // true
```
In strict mode, however, if the value of this is not set when entering an execution context, it remains as undefined, as shown in the following example:

```js
function f2() {
  'use strict'; // see strict mode
  return this;
}

f2() === undefined; // true
```

>In the second example, this should be undefined, because f2 was called directly and not as a method or property of an object (e.g. window.f2()). This feature wasn't implemented in some browsers when they first started to support strict mode. As a result, they incorrectly returned the window object.

### Arrow Functions & this
In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object:
```js
var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
```

### As an object method
When a function is called as a method of an object, its this is set to the object the method is called on.

In the following example, when o.f() is invoked, inside the function this is bound to the o object.
```js
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
```

### As a DOM event handler
When a function is used as an event handler, its this is set to the element on which the listener is placed (some browsers do not follow this convention for listeners added dynamically with methods other than addEventListener()).
```js
// When called as a listener, turns the related element blue
function bluify(e) {
  // Always true
  console.log(this === e.currentTarget);
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', bluify, false);
}
```

### Removing an Event Listener
Given an event listener previously added by calling addEventListener(), you may eventually come to a point at which you need to remove it. Obviously, you need to specify the same type and listener parameters to removeEventListener()

If we were to use the previous example, we would need to ensure that the signature for the event listener is identical to the removeEventListener. If we were to leave out `false` on the previous method, we would fail to remove the event listener.

```js
for (var i = 0; i < elements.length; i++) {
  elements[i].removeEventListener('click', bluify, false);
}
```