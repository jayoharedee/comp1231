// Nested Loops

//1-d Arrays
const initialArray = []; // Empty 1D array
// 1D array contains some strings
const profiles = ["Ali", "Bruce", "Carolyn", "Donna"] 
// 1D array contains some digits
const profileSINs = [834685835, 837469365, 837486835, 837465835] 
// 1D array contains some strings
const ipAddress = [
  '1.92.168.0.1',
  '1.92.168.0.2',
  '1.92.168.0.3',
  '1.92.168.0.4',
]

// multi-dimensional arrays are: arrays inside arrays

// We can use the push() method which will add elements at the end of an array and return the new length of the array.

// let's push 3 arrays into 1 array
initialArray.push(profiles, profileSINs, ipAddress)

// we've pushed 3 arrays into 1 array, let's see what initialArray now holds
console.info('*** WHATS IN STATE ***');
console.log(initialArray) 

// We now need to use whats known as "indexed notation" to access nested array elements
// indexed notation looks like this: [0][2]

// if we we're to apply this notation to our `initialArray` variable it would look like this
const result = initialArray[0][2]  // output: "carolyn"
const resultExample = initialArray[1][2] // output: 837486835

console.info('*** ACCESSING STATE EXAMPLES ***');
console.log(result, resultExample);

// we could concatenate the output of these two variables together using string interpolation
const carolyn = result
carolynsIp = resultExample
const carolynsIpString = `${carolyn}'s ip address is ${carolynsIp}`

// more examples
console.log('*** concatenating examples ***');
console.log(carolynsIpString);

// we could have also concatenated using th += notation. the above would look like
const ipExample = carolyn + '\'s ip address is' + carolynsIp
// or if your a fan of double quotes so you don't have to worry about escape characters like we did above, it would look like this
const doubleQuoteExample = carolyn + "'s ip address is" + carolynsIp

// for us to loop through our multi-dimensional array, we must have a loop inside of a loop. Better known as nesting loops. A loop inside of a loop.

// for us to see what's in our `initialArray` variable we need to loop over whatever `initialArray` contains. If we follow our code, we can see the use of the push method and we pushed three arrays in; profiles, profileSINs, ipAddress. 

console.log('*** LOOPING EXAMPLES ***');
// looping over state array
for (let firstIndex = 0; firstIndex < initialArray.length; firstIndex++) {
  // each iteration of the loop gives us one of the arrays from `initial array`
  const elementArray = initialArray[firstIndex];
  console.log(elementArray);

  // we now have more arrays to loop over using the `elementArray` variable
  for (let secondIndex = 0; secondIndex < elementArray.length; secondIndex++) {
    const element = elementArray[secondIndex];
    // we now have the element of the multi-dimensional array
    console.log('*** second dimension of the array ***');
    console.log(element, 'is index number', secondIndex);
  }
}


// lets create a function that is able to accept one parameter which will be a multi-dimenssional array

/**
 * Loops through a mutli-dimensional array
 *
 * @param {array} multiArray
 * @returns array
 */
function loopMultiArrays(multiArray) {
  for (let i = 0; i < multiArray.length; i++) {
    const arrayElement = multiArray[i];
    
    console.log('the element is', arrayElement, "and it's index", i)

    // loop over the arrays inside of the initial array
    for (let j = 0; j < arrayElement.length; j++) {
      const element = arrayElement[j]

      console.log('the element is', element, 'and it\'s index is', j)
    }
  }

  return multiArray
}

const multiArrayLooped = loopMultiArrays(initialArray)
console.log(multiArrayLooped) 


/**
 * Try the following:
 * 
 * 1. create a variable that holds an empty string
 * 2. create a variable containing an empty array (initialArray)
 * 3. create 3 more arrays, all containing 5 random words
 * 4. push the 3 random word arrays into the empty array
 * 5. loop over the initial array
 * 6. loop over each element that the intial array contains
 * 7. using the empty string variable created earlier, concatenate each 
 * element in the 2nd dimension of the initial loop.
 * 8. console log the string once the nested loop finishes 
 * concatenating each element
 */

 // the code to get your feet off the ground would look something like this
console.log('*** practise example ***');
 const state = []
 let emptyString = ''

 const rainbowColours = ["roy", "gee", "biv", "is an", "acryonym"]
 const college = ["gee", "bee", "see", "is an ", "acronym"]
 const topLevelDomains = [".com", ".net", ".org", ".ca", "are TLD's"]

 // push three arrays into your empty array
 state.push(rainbowColours, college, topLevelDomains)

 // loop over the arrays
 for (let i = 0; i < state.length; i++) {
   const element = state[i];
   for (let j = 0; j < element.length; j++) {
     const word = element[j]
     console.log(word)
   }
 }