# Week 10 - Working with Objects

### [BACK](../../)

We can now have a fluent conversation about JavaScript after Working with Objects. The backbone of the language is designed on a *simple* object-based paradigm. Remember your `array.length` or `Math.random()`? These are both the product of objects.

Using the example from the Math lib, Math is the object and random is the value. Here is some pseudo-code.

### Methods
```js
// create an object
const Math = {}

// create a method
Math.random = function() {
  // logic here... 
  return RANDOM_NUMBER
}

// Invoke method from the Math Object
Math.random()
// output: 77464
```

### Properties
```js
const arr = [1, 2]
console.log(arr)
// [ 1, 2 ]

// length property, you can assign or retrieve a value
arr.length = 5 // set array length property to 5 while currently 2.
console.log(arr)
// [ 1, 2, <3 empty items> ]

arr.forEach(element => console.log(element))
// 1
// 2
```

An object is a collection of properties, methods, and keys that are assigned to values. Some objects come pre-rolled in the your browser like the `document` or `window` object.
In this document we'll be taking a look at how objects are used, properties, functions and methods are created. 

### Table Of Contents
  * [Week One](#Week-One)
  * [Week Two](#Week-Two)
  * [Week Three](#Week-Three)
  * [Week Four](#Week-Four)
  * [Week Five](#Week-Five)
  * [Week Six And Seven](#Week-Six-And-Seven)
  
#### Objects overview

Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life. The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with properties and type. Compare it with a bag, for example. A bag is an object, with properties. A bag has a color, a design, weight, a material it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

#### Objects and properties

A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:

`objectName.propertyName`

Like all JavaScript variables, both the object name (which could be a normal variable) and property name are case sensitive. You can define a property by assigning it a value. For example, let's create an object named myCar and give it properties named make, model, and year as follows:

```js
// create object
const user = {}

// assign properties
user.ip = '192.168.0.33'
user.name = 'Bob'
user.address = '21 Sesame Street'
user.age = 22
```

Unassigned properties of an object are undefined, just like a regular varibale (and not null)
`user.gender // undefined`

An object property name can be any valid JavaScript string, or anything that can be converted to a string, including the empty string. However, any property name that is not a valid JavaScript identifier (for example, a property name that has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation. This notation is also very useful when property names are to be dynamically determined (when the property name is not determined until runtime). Examples are as follows:

```js
// four variables are created and assigned in a single go, 
// separated by commas
var myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object()

myObj.type              = 'Dot syntax'
myObj['date created']   = 'String with space'
myObj[str]              = 'String value'
myObj[rand]             = 'Random Number'
myObj[obj]              = 'Object'
myObj['']               = 'Even an empty string'

console.log(myObj)
```

Please note that all keys in the square bracket notation are converted to strings unless they're Symbols, **since JavaScript object property names (keys) can only be strings or Symbols**. For example, in the above code, when the key obj is added to the myObj, JavaScript will call the obj.toString() method, and use this result string as the new key.

You can also access properties by using a string value that is stored in a variable:

```js
var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';
```

You can use the bracket notation with for...in to iterate over all the enumerable properties of an object. To illustrate how this works, the following function displays the properties of the object when you pass the object and the object's name as arguments to the function:

```js
function showProps(obj, objName) {
  const result = ``
  for (let i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`
    }
  }
  return result
}

showProps(myCar)
// output: 'Mustang'
```

#### Creating objects with Functions
Alternatively, you can create an object with these two steps:

1. Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
2. Create an instance of the object with new.

To define an object type, create a function for the object type that specifies its name, properties, and methods. For example, suppose you want to create an object type for cars. You want this type of object to be called Car, and you want it to have properties for make, model, and year. To do this, you would write the following function:

```js
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
```

Notice the use of this to assign values to the object's properties based on the values passed to the function.

Now you can create an object called mycar as follows:

```js
const mycar = new Car('Eagle', 'Talon TSi', 1993)
const kenscar = new Car('Nissan', '300ZX', 1992)
const vpgscar = new Car('Mazda', 'Miata', 1990)
```

**Challenge:**
Make an object using any of the examples listed above and include the following properties in the object.

  * name
  * age
  * gender

After you've created your object, update the Car example to include a new property titled `owner`.

After you've created the object with the `owner` property, we'll be creating new instances of car.

```js
function Car(make, model, year, owner) {
  this.make = make
  this.model = model
  this.year = year
  this.owner = owner
}

const rand = new Person('Rand McKinnon', 33, 'M')
const ken = new Person('Ken Jones', 39, 'M')

const car1 = new Car('Eagle', 'Talon TSi', 1993, rand)
const car2 = new Car('Nissan', '300ZX', 1992, ken)
```

Note that you can always add a property to a previously defined object. For example, the statement
`car1.color = 'black'`

adds a property color to car1, and assigns it a value of "black." However, this does not affect any other objects. To add the new property to all objects of the same type, you have to add the property to the definition of the Car object type.

Notice that instead of passing a literal string or integer value when creating the new objects, the above statements pass the objects rand and ken as the arguments for the owners. Then if you want to find out the name of the owner of car2, you can access the following property:
`car2.owner.name`

#### Inheritance
All objects in JavaScript inherit from at least one other object. The object being inherited from is known as the prototype, and the inherited properties can be found in the prototype object of the constructor.

ECMAScript 5 introduced a new method: Object.create(). Calling this method creates a new object. The prototype of this object is the first argument of the function:

```js
const a = {a: 1}; 
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null

console.log(b.a); // 1 (inherited)

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); 
// undefined, because d doesn't inherit from Object.prototype
```

We will be exploring inheritance and the prototype chain more in-depth in future classes, but for now, have fun creating objects and accessing their values.