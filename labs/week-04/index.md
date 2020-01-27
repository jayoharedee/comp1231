# Week 04 - Iterations (Make actions loop)

### [BACK](../../)

**:squirrel: If you're looking for the [exercise](./exercises/index.md), that link will take your there. If you're after the [challenge](./challenges/index.md), you will find it there**

## Iterating

Have you ever had an list of actions that you wish you could handle every action at once? Or more properly advocated, have you ever wished you had a list of actions you could finish without having to worry about it? This is where things start to get interesting after we talk about variables and making decisions with code.

With special syntax (like `if, ||, &&, var, let, const` ) we are able to loop over a list of actions. So if I could lean on some pseudo code here. It would concetually look something like thi:

```js
[
  takeGarbageout, // happens first and the done
  cookSupper, // hapens second, then done
  eatFood,  // finish third and then complete too
  doHomework // last but not least
].forEach(complete)

```

like I said, it's pseudo code but imagine having a structure similar to that. With code, you could compelete each one of those items **iteratively**. Check the order in which the actions would be *iterated* over. I've commendted each line in the array. Oh yeah, in JavaScript to write an array object its done using these characters `[]`.

Many things can happen when we're using the `[]` like creating lists as we see above. Or causing an effect or change in our application code. The ease of being able to have a stack of actions run at once, is quite nice. 

One value that we tread lightly on was array. We are going to look at it from a very hign level. 

Here is what you are going to need to know about array:
  * It can be assigned to a variable just like a string
  * It can hold, items or tasks... look at the code example above
  * Arrays are used to group items or tasks and execute them one-by-one
  * Arrays need to have a beginning and an end
  * If arrays don't have a starting point and and ending point, we create an 'infinite loop'

So, in week 4 we talk about loops but it's not really possible to talk about loops without arrays, since we are LOOPING over ARRAYS. worst case scenario, we just have stronger knowledge going into next week.

Let's take apart some JavaScript below.

Table of Loop Contents to bounce around easier
**[For Loops](#for-loops)**

**[While Loops](#while-loops)**

**[Do While](#do-while)**

# For Loops

```js
// the is an array. notice the value, it is assign to reserved characters []
// [] means array, it means it can hold things inside of it, like strings (and much more complex items)
const groceryList = [
  'cherries',
  'bananas',
  'mangos',
  'rice',
  'blueberries',
  'avacado'
]

// if we wanted to print out our grocery list, we could do so with a loop
// loops allow us to iterate over data
// there are different types of loops, lets look at the for loop first
for (let index = 0; index < groceryList.length; index++) {
  const element = groceryList[index];
  console.log(element)
}
```

Note the variable in the `for` block called index. Index is a number that represents each iteration of a loop. So because we have six items in our grocery bag, the first index would 0, then it would be 1 and then 2... all the way up to six. An index represents the number of times the loop has... looped.

Next to the `let index = 0;` part of the four block, we see a condition. The condition is saying; has the number of times we've looped (AKA what number is index at) greater than the items in our grocer list. `index < groceryList.length` is the condition we were just speaking of. Remember index is the loop number and grocerList, is our array.

What does .length do? Well, without going down the rabits whole right now, .length provides us with the number of items in an array. So if we had an array called `array` we could go `array.length` and the number of items would be returned to us.

If you notice in the for block, there is our very last operation. `for (let i = 0; i < array.length; i++). The infamous ++. In computer science ++ is known as an incrementer. It increments a value, so if we look at a stack of for loops and how the `i++` increments the value, lets take a closer look.

```js
for (let i = 0; i < array.length; i++) // increment one
for (let i = 1; i < array.length; i++) // i = 1 because of the incrementer at the end i++
for (let i = 2; i < array.length; i++) // 1 incremeneted by 1 is 2
for (let i = 3; i < array.length; i++) // 2++ = 3
for (let i = 4; i < array.length; i++) // 4++ = 5
for (let i = 5; i < array.length; i++) // 5++ = 6
for (let i = 6; i < array.length; i++) // 5++ = 6
```

# While
We should know have a general tha whenever you see () in JavaScript syntax, it means we can feed values in it.

Just as we were able to increment a list with a for loop, we can do the same thing using a different syntax. `for` is the most common but `while` and `do..while` is also used. Let's get into them since we built a foundationg with `if` statements, seen conditions applied to `for` loops which repeated actions for us. 


## While Loops
We have conditions. We've seen them in `if` statements, console logs `console.log(typeof phone === 'string')`, we'eve seen conditions in `for` loops as well (index < array.length).

No we'll see conditions in while loops. Cause as long as a loop has a condition, it will continue iterating (looping). Let's have a peak at how we can use the incrementer value we just played with in our for floop and see, using a while loop if we can increment a value.

As long as the condition or test in between the `(numberToGrow)` evaluates to true, whatever is inside the while block will evaluate. Thus letting us get an output of 6.
```js
let numberToGrow = 0

while (numberToGrow < 6) {
  numberToGrow++
}

console.log(numberToGrow);
// expected output: 6
```

Here is one more example where the variable assignment must look funny. **Ask me questions if you dont understand, I do not bite.**

```js
let numberToGrow = 0
let numberToAdd = 0;

while (n < 3) {
  numberToGrow++;
  numberToAdd += numberToGrow;
}
```

To provide some details, each iteration of the while loop, we have `numberToGrow` and `numberToAdd` take on the followinf values.

* After the first pass: numberToGrow = 1 and numberToAdd = 1
* After the second pass: numberToGrow = 2 numberToAdd = 3
* after the third pass: numberToGrow = 3 and numberToAdd = 6

If you don't belive me, through in some console logs. It's what I and many other developers use to watch values change and ensure the change takes place in the right order.

```js
let numberToGrow = 0
let numberToAdd = 0;

while (n < 3) {
  numberToGrow++;
  numberToAdd += numberToGrow;

  console.log(`numberToGrow is currently ${numberToGrow}`)
  console.log(`numberToAdd is currently ${numberToAdd}`)
}
```

Whiles, I haven't seen too many of them in the wild, a `for, forEach, map` or  `filter` is more commonly used but you will still be tested on whiles and they're important to understand. WIth the knowledge gained, you can develop a better understanding of looping which makes your life easier.

# Do While

`do...while`'s are kind of like a while statement, you still pass a condition to a keyword called `while` but you explicitly tell that machine what to *do* with another special keyword in the JavaScript language. This is known as `do` and can be used in conjunction with while so the `do` tasks have an end and a beginning to know when to stop. Thus, preventing infinite loops.

```js
// basic do while
let result = ''
let i = 0

do {
  // this gets executed so long that while remains true.
  // notice we are incrementing i by adding but we could
  // use a short hand evaluator if we were lazy
  index = index + 1
  // or index++, they both do the same. you decide your style

  result = result + index
} while (i < 5)

console.log(result)
// expected result: "12345"
```

Here is a more complex example as we are using a boolean opperand in our condition.
```js
var result = ''
var index = 0
do {
   index += 1
   result += index + ' '
} while (index > 0 && index < 5)

console.log(`The value of ressult is ${result}`)
// 1 2 3 4 5
```

Loops work great when we want to fill arrays with data. We can make some pretty interesting stuff happen like web scraping data we need and adding it to a list.
