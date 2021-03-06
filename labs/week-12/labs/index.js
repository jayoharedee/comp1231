/** 
 * Coookies can be created in a number of ways. In our first exercise   
 * we'll take a look at the most common use case for creating cookies.
*/

// Note: to reference the cookie object you can use the variable below
const cookie = document.cookie

// Exercise 1 - Creating cookies using the document object

// using the document object which represents our page, we have a setter property known as `.cookie`. Let's create a cookie using this method.
document.cookie = 'bgColor=red'
document.cookie = 'user_ip=192.168.0.0.10'
document.cookie = 'geoLocation=Moldova'
document.cookie = 'browser=firefox'

// create two more cookies using the above syntax.
// create a function that will alert all the cookies in the document.

/**
 * pass in the cookie object and alert the argument using the alert   
 * method
 *
 * @param {*} cookie
 */
function alertCookie(cookie) {
  alert(cookie)
}

//alertCookie()

// Exercise 2 - Reading Cookies
/** in the console perform the operation needed to read all cookies in 
 * the document object. Change the background colour from red to 
 * aquamarine in the bgColor cookie. Remember from the lecture notes, a 
 * cookie must be expired before it can be set or you may wind up with 
 * two cookies of the same name (browser dependent). Please reference 
 * the method provided in the lecture material for expiring cookies. 
 * 
*/
document.cookie = 'bgColor=aquamarine'

// Exercise 3 - Fetching Specific Cookies
/**
 * at times, you'll have to find a specific cookie in the document.
 * cookie object. In this exercise you will be coming up with your own 
 * solution to fetch one singular cookie from the list of cookies. The 
 * cookie we are looking for is the 'user_ip' cookie. Once 
 * found, you'll want to log it to the console.
 */
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)'
    )
  )
  return matches ? decodeURIComponent(matches[1]) : undefined
}

const deleteIpCookie = getCookie('user_ip')
console.log(deleteIpCookie)

 // Exercise 4 - Setting domain paths in your cookie.
 /**
  * As we've discovered, cookies can be set for specific domains. We 
  * will be referencing the lecture material and assign a path to our 
  * document cookie. The path that we want is for the root domain AKA '/'
  */
document.cookie = 'path=/;'
  // Exercise 5 - Deleting Cookies
  /**
   * Referencing the lecture material, find the method responsible for 
   * expiring cookies. Expire all cookies except for the bgColor cookie.
   */
function deleteAllCookies() {
  var cookies = document.cookie.split(';')

  for (var i = 0; i < cookies.length; i++) {
    if (name === 'bgColor') {
      continue
    }

    var cookie = cookies[i]
    var eqPos = cookie.indexOf('=')
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}

// deleteAllCookies()
  // Exercise 6 - Using Cookies
  /**
   * In this exercise we will be reading the value from the bgColor 
   * cookie and setting it as the background. Remember, there a number 
   * of methods provided in the lecture material. Please reference them 
   * to help complete this process.
   */
//document.body.style.backgroundColor = yourVariableHere