// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
/**
 * Variables declared with var or created by function declarations in non-strict mode do not have block scope. 
 * Variables introduced within a block are scoped to the containing function or script, and the effects of setting them persist beyond the block itself. 
 * In other words, block statements do not introduce a scope. For example:
 */

var x = 1;
{
  var x = 2;
}
console.log(x); // logs 2

/**
 * This logs 2 because the var x statement within the block is in the same scope as the var x statement before the block.
 * In non-strict code, function declarations inside blocks behave strangely. Do not use them.
 */

 // By contrast, identifiers declared with let and const do have block scope:

let x = 1;
{
  let x = 2;
}

console.log(x); // logs 1
// The x = 2 is limited in scope to the block in which it was defined.

// The same is true of const:
const c = 1;
{
  const c = 2;
}
console.log(c); // logs 1 and does not throw SyntaxError...

/**
 * Note that the block-scoped const c = 2 does not throw a SyntaxError: Identifier 'c' 
 * has already been declared because it can be declared uniquely within the block.
 */