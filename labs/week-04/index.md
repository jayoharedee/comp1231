# Week 04 - Iterations (Make actions loop)

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

Many things can happen with `[]` like creating lists as we see above. Or causing an effect or change in our application or code.

One data type that we trade lightly on was array. We are going to look at it from a very hign level. 

Here is what you are going to need to know about array:
  * It can be assigned to a variable just like a string
  * It can hold, items or tasks... look at the code example above
  * Arrays are used to group items or tasks and execute them one-by-one
  * Arrays need to have a beginning and an end
  * If arrays don't have a starting point and and ending point, we create an 'infinite loop'

So, in week 4 wee talk about loops but it's not really possible to talk about loops without arrays, since we LOOPING over ARRAYS. worst case scenario, we just have stronger knowledge going into next week.

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
