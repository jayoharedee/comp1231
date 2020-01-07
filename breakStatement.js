/**
 * The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
 */

var i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i);
// expected output: 3

/**
 * Description

The break statement includes an optional label that allows the program to break out of a labeled statement. The break statement needs to be nested within the referenced label. The labeled statement can be any block statement; it does not have to be preceded by a loop statement.
A break statement, with or without a following label, cannot be used within the body of a function that is itself nested within the current loop, switch, or label statement that the break statement is intended to break out of.
 */

 