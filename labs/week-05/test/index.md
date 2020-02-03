* The code must be in an external JavaScript file called REPLACE_WITH_STUDENT_ID.js 
* The javaScript code must be uploaded to gblearn.com in a folder path "comp1231/lab/tests/test1". You also have to use the similarity test to submit at my.gblearn.com 
  * Students must select an assigned version when uploading their code to my.gblearn.com 
        * Jordan's Versions E, F, G, H


Above is instructions from Maziar, below I have instructions for the test.

1. You will be given a variable that provides a random boolean. Do not touch or change this.
2. If the variable evaluates to true, please use the date functions.
  a) Have a variable containing, minutes, seconds and hours
3. Concatinate all the values together and console.log a time stamp.

Part Two
1. You will also be given the same Math object we've been using for the past couplw weeks.
2. Create an else statement on the if responsible for creating a timestamp
3. In the else, create an if...else statement like we have previously in class
4. Capture the randomly generated number and console log out the value

Here is some boiler plate to help get you off the gound

```js
// DO NOT TOUCH
let randomBoolean = Math.random() >= 0.5
// LEAVE ALONE

if (randomBoolean) {
  // an example of how we can get the hour in JS
  const hour = new Date().getHours()
  // get the minutes
  // and the seconds as well

  // console log a timestamp by contactinating the 
  // time strings. You can use string literals ``, single quotes
  // '' or double quotes ""
} else {
  // DO NOT TOUCH
  let randomNumber = Math.floor(Math.random() * 100)
  // LEAVE LONE

  // in previous exercises we caught a random number 
  // using if...else statements please do the same here
}

```