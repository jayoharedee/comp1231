/**
 * MOUSE EVENTS
 * 
 * In this exercise we will be creating all of our dom 
 * nodes with JS, well at least the first one.
 * 
 */
// get element on document with query selector
const h2 = document.querySelector('h2.header')
// create a p element with javascript
let box = document.createElement('p')
// assign an id to the element using javascript
box.id = 'box'

// give the p tag some height
box.style.height = '50vh'
// inject words into our p tag
box.innerHTML = 'Move Around Here'
// reference the h2 we captured and insert our box
h2.insertAdjacentElement('afterend', box)

// add event listener so document can listen to mouse movements
box.addEventListener('mousemove', function(event) {
  const min = 1 
  const max = 254

  let x = Math.floor(Math.random() * (max - min))
  let y = Math.floor(Math.random() * (max - min))
  let z = Math.floor(Math.random() * (max - min))

  box.style.backgroundColor = `rgb(${x},${y},${z})`
})

/**
 * Keyboard Events
 */
document.addEventListener('keydown', (event) => {
  const keyName = event.key

  if (keyName === 'Control') {
    // do not alert when only Control key is pressed.
    return
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (e.g., 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the same time.
    alert(`Combination of ctrlKey + ${keyName}`)
  } else {
    alert(`Key pressed ${keyName}`)
  }
}, false)

document.addEventListener('keyup', (event) => {
  const keyName = event.key

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released')
  }
}, false)

/**
 * 
 * Click Events
 * 
 * We will create a function that puts a strike through 
 * the text we click.
 */
const lineItem = document.querySelector('.line-item')
lineItem.addEventListener('click', function(event) {
  lineItem.style.textDecoration = 'line-through'
})


/**
 * 
 * Utility functions 
 */

/**
 * Returns a random number
 *
 * @param {number} number - takes a number which shouldn't exced 255
 * @returns
 */
function random(number) {
  return Math.floor(Math.random() * (number+1));
}

/**
 *
 * changes background colour using the above random colour
 */
function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}   