# Week 04 - Iterations (Make actions loop)

### [BACK](../../)

**If you're looking for the [exercise](./exercises/index.md), that link will take your there. If you're after the [challenege](./challenges/index.md), you will find it there**

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

Let's take apart some JavaScript below

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

# Do While