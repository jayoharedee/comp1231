# Week 05 - Lab Test

### [BACK](../../)

**:squirrel: If you're looking for the [exercise](./exercises/index.md), that link will take your there. If you're after the [challenge](./challenges/index.md), you will find it there**

## Iterating
We'll be talking about arrays this week but we also have a test to take care of.

Remember when we were looking at how the built-in Math Library can be used to generate random numbers?

We're going to be doing the same thing in our test today but instead of Math, we'll be using Date. The syntax will be the exact same. Here is an example.

```js
// the value for Minutes creates a new Date Object and then calls a method to get the current minutes
let minutes = new Date().getMinutes()
console.log(minutes)
// current minute

// the same is said for hours
let hours = new Date().getHours()
console.log(hours)
//current hour

// and seconds
let seconds = new Date().getSeconds()
//current second
```

Try Running in your web dev console and see the outcome.