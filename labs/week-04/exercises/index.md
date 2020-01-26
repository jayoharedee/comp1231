

# Week 03 - Working with Conditional Statements

When we need to make decisions with code, we rely on something known as conditional statements. Conditional statements are nothing more than using special syntax to help is make a decision. Let's take a look at an example together using an if statement.

```js
// assign a variable to a boolean value
const weAreInSchool = true

if (weAreInSchool) {
  // this gets executed because the variable in the if block has a value of true
  console.log('when does it end?')
}
```

Since the value assigned to `weAreInSchool` is a boolean value which is set to true, our conditional statement (lines 9-11) will evaluate to true. The opposite will happen if we had a value that was set to false.

```js
const weAreNotInSchool = false

if (weAreNotInSchool) {
  // this will not get executed as the condition will not evaluate due to the variables value being set to false
  console.log('When does it start?')
}
```

Using conditionals we also have the ability to chain decisions together. This is done with an if/else syntax. Please see below for an example of this.

```js
const weAreNotInSchool = false

if (weAreNotInSchool) {
  // this will not get executed as the condition will not evaluate due to the variables value being set to false
  console.log('When does it start?')
} else {
  // this block will be executed as the previous one will fail
  console.log('We are still in school')
}
```

If we need more than an if/else combo, we can utilize another form of conditional logic called `else if`. Check below for an example of this.

```js
const weAreNotInSchool = false
const itsLunchTime = true
if (weAreNotInSchool) {
  // this will not get executed as the condition will not evaluate due to the variables value being set to false
  console.log('When does it start?')
} else if (itsLunchtime) {
  // this block will be executed as the previous one will fail due to the value being set to false
  // because itsLunchTime is set to true this code block will evaluate
  console.log('Lunch is starting soon')
}
```

If you're using an if/else if statement, you can still end things with an else should none of the conditions evaluate to true. Let's see an example so we know what it looks like.

```js
const weAreNotInSchool = false
const itsLunchTime = false
if (weAreNotInSchool) {
  // this will not get executed as the condition will not evaluate due to the variables value being set to false
  console.log('When does it start?')
} else if (itsLunchtime) {
  // this block will be executed as the previous one will fail due to the value being set to false
  // because itsLunchTime is set to true this code block will evaluate
  console.log('Lunch is starting soon')
} else {
  // the final block is executed as the two previous variables evaluated to false
  console.log('This is all that\'s left')
}

```