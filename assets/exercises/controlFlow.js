// A block stataement is used to group zero or more statements. The block is delimited by a pair of curly braces

var x = 1;
let y = 1;

if (true) {
  var x = 2;
  let y = 2;
}

console.log(x)
// expected output: 2

console.log(y)
// expected output: 1

// Since var doesn't respect block scoping, the value was able to be changed in the if statement.
// the declaration of y in our if statement did not leave the block due to the scoping of let
// if we declare let or const in a block statement, it does not live outside of the block

function declarations() {
  let x = 1

  // a block statement can be produced with two curly's as below, no if needed (not common only for demonstration)
  {
    let x = 2
  }

  console.log(x) // logs 1

  // let x = 2 is limited by it's scope due to the block it was defined in (the curly braces)

  // the same is true for const

  const c = 1
  {
    const c = 2
  }

  console.log(c) // logs 1 and does not throw a syntax error

  /**
   * Note that the block-scoped const c = 2 does not throw a SyntaxError: Identifier 'c' has alread been declared 
   * because it can be declared uniquely within the block
   */
}