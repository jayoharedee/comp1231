# Cookies :cookie:

Looking back at the previous week we've been introduced to a concept known as key/value storage. A key is defined a value, and the value is retrieved when the key is called.

## Object Review
```js
// create object
const cookieJar = {}

// add properties to the object
cookieJar.count = 18
cookieJar.flavour = 'chocolate chip'

console.log(cookieJar)
// output: {count: 18, flavour: "chocolate chip"}

// dot notation to retrieve a value
console.log(cookieJar.count)
// output: 18

// breacket notation to retrieve a value
console.log(cookieJar['flavour'])
// output: 'chocolate chip'
```

If we observe two lines above, specificially where the key is assigned a value, and then pay attention to the retrieval of the value in the console logs, we can see an example of key/value storage being used.

One more example

```js
const cookieDough = {}
cookieDough.flavour = 'Birthday Cake'

console.log(cookieDough.flavour)
// output: 'Birthday Cake'
```

Just as we have objects to store and retreive data in JavaScript, we also have the notorious `cookie`. To be specific - a cookie is a small piece of data that a server can send to the users browser in order to transfer information. The data is sent in the form of key/value storage.

Cookies aren't just for HTTP use, we can also leverage them in our own applications. JavaScript has an odd API to offer when interacting with cookies but we'll get through it.

We've been introduced to the `document` object, used some methods found within it such as `.querySelector()` and `.getElementById()` to parse HTML elements with JS. The `document` object is filled with properties which represent the page that is loaded in the browser. For example, `document.location` will always return an object which provides details on the documents location. Try running it in your console.

## Cookie Introduction
Just like we can retrieve all the information on our documents location, we can do the same with `cookie`. To find out what cookies may have been set by the server or perhaps locally set with JS code, let's see what cookies are stored in our document's cookie property. What document are we on though? Let's sort that out.

1. Open a browser
2. Navigate to [Reddit](https://reddit.com)
3. Open Your developer tools
4. Ensure that you are in the dev tools console area

![web console](assets/img/console.png)

```js
const allTheCookies = document.cookie
console.log(allTheCookies)
"edgebucket=9a2uKIeIyenX2ZISiY;  csv=1; "
```

As you can see, I've truncrated a great portion of what's been logged in the console. What should be apparent here is that we have a key value storage pattern. It's not exactly the same as the previous example when we used object, but what we should notice is that the  left hand side is a variable meant to hold a value. The `=` is used to delimit the variable from the value. The semicolon terminates the key/value combination and makes it official.

How many cookies are stored in the above code snippet? If you said two, you are correct. The two cookies found in the `allTheCookies` variable were `edgebucket` and `csv`. Both of these keys are seperated from their value with an `=`. For example - the value for the `csv` key is `1`. Remember all of this is coming from the cookie object courtesy of `document`. We were able to observe this by executing document.cookie in the JS console. Try your favorite page, see what info they have hidden in their cookie object.

## Creating Cookies
If we were to take a close a look at a cookie which is in a `key=value;` format, we know that to create a cookie we must have 2 things.

  * A Key
  * A value associated with the key

Let's create some cookies that are relevant to this course
```js
document.cookie = 'course=comp1231'
console.log(document.cookie)
// output: course=comp1231;
```

Notice that we are using the assignment operator above to create this value. This operator would typically overwrite any previous data stored. `document.cookie` is engineered to be an object. When we console log `document.cookie` it's returns as a string but the property itself is actually an object. In computer science there are various patterns and cookie was engineered to make use of two, known as a 'getter' and a 'setter'. You don't need to know more than that when working with cookies. Just know because of it's development, cookies can be re-assigned values unlike regular variables.

You try it out in your browser.

```js
document.cookie = 'course=comp1231'
document.cookie = 'school=GBC'
document.cookie = 'class=javascript'
document.cookie = 'semester=2'

// outpuit: course=comp1231; school=GBC; class=javascript; semester=2;
```

Judging by the above snippet we should have re-assigned the value of document.cookie several times. However due to the mechanics of `document.cookie`, we're ale to continually add to the cookie object. Try pasting the above in your console and then calling the `document.cookie` object.

```js
document.cookie = 'dog_name=fluffy';
document.cookie = 'cat_name = garfield';
 
console.log(document.cookie); // "dog_name=fluffy; cat_name=garfield"
```

As you can see, even if we assign a new value for `document.cookie`, it gets handled by the setter. The space around the assignment operator is not mandatory.

Since it is all stored in one string, you need to figure out a way to get a very specific part of the cookie. You can do it in many ways since it is just operating on a string. Try being creative and find the key/value that you're looking for on a page of your choice. Feel free to use the method below to get a sense of how we can fetch cookies.

```js
// Fetch a cookie by name
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
```

## Reading Cookies
Reading cookies can be quite involved as we're searching a string for a key and/or value. Everyone has their own way of doing things, some choose to write their own implementations using loops while others will be using methods found from online resources. Looking up a cookie up by name is a common problem so it has become one of those problems that developers compete at solving most optimally. 

Now, if you wanted a nice utility method to set cookies, [Javascript Info](https://javascript.info/cookies), will have you covered. They also offer a solution using a regular expression to find a cookie by name, which you've used above.

Here we have a robust solution for creating cookies:

```js
function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // add other defaults here if necessary
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Example of use:
setCookie('user', 'John', {secure: true, 'max-age': 3600});
```

## Deleting Cookies
We have a few advantages using a string to store our key/pair values. When we set our cookies, we're assigning key/value pairs including a `;` to terminate the cookie, we can also pass some additional parameters for the security of our document.

Here are some of the attributes that can be included
  * path=path;
    * defaults to current path of document
  * domain=domain;
    * (e.g., 'example.com' or 'subdomain.example.com'). If not specified, this defaults to the host portion of the current document location
  * max-age=max-age-in-seconds;
    * e.g., 31536000 for a year 

Looking at the last option above, we can see cookies will accept a `max-age` option, so we can go back in time and essentially expire them. If we wanted to build a utility function that can be used to parse cookies, we can combine our previous method used to set cookies. Find `setCookie` invoked inside a new function called deleteCookie below. These two methods together will allow us to "delete" a cookie.

```js
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}
```
