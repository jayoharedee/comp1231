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

