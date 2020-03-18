// don't touch
const cookie = document.cookie
// don't touch

/**
 * pass in document.cookie and return the number of cookies
 *
 * @param {*} cookie
 * @return {number} number of cookies
 */
function countCookie(cookie) {
  
}

// uncomment function when finished, remember the console is your friend
// don't touch
// countCookie(cookie) 
// don't touch

/**
 * find persistent cookies
 *
 * See if the cookie has a max-age above 30000 and reset
 * @param {*} cookie
 * @return {number} number of cookies
 */
function findPersistantCookies(cookie) {

}

// don't touch
// findPersistantCookies(cookie) 
// don't touch

// set a cookie, not in a function, that will be accessible across the entire domain using JavaScript.
//console.log(document.cookie) // on completion





/***********
 * 
 */
// utility method used for example
/**
 * Sets a cookie by name, value and any associated options
 *
 * @param {*} name
 * @param {*} value
 * @param {*} [options={}]
 */
function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    // add other defaults here if necessary
    ...options
  }

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString()
  }

  let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

  for (let optionKey in options) {
    updatedCookie += '; ' + optionKey
    let optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }

  document.cookie = updatedCookie
}



setCookie('user', 'John', { secure: true, 'max-age': 3600 })
setCookie('points', 36, { secure: true, 'max-age': 3600 })
setCookie('weapons', 'none', { secure: true, 'max-age': 3600 })
setCookie('level', 13, { secure: true, 'max-age': 3600 })