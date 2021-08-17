function printTable() {
  var userTableValue = getUserValue('table-input');
  var userRangeValue = getUserValue('range');

  printDesiredTable(userTableValue, userRangeValue);
}

function getUserValue (elementId) {
  var element = document.getElementById(elementId);
  var parsedValue = parseInt(element.value);

  return parsedValue;
}

function printDesiredTable (userChoice, userLimit) {
  for (i = 1; i <= userLimit; i++) {
    console.log(userChoice + ' X ' + i + ' = ' + (userChoice * i))
  }
}

var letters = ["a", "b" , "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function printLetters () {
  for (i=0; i<=25; i++) {
    console.log(letters[i])}
  }



// Nested Loops (FOR)

// Dry-run

/*
  i = 0; true; [j = 0; true, j = 1, true, .... j = 10; false;]
  i = 1; true; [j = 0; true, j = 1, true, .... j = 10; false;]

  |1  2  3|
  |4  5  6|
  |7  8  9|

  [1][1]

  a = [1][1]
  b = [2][1]
  c = [2][2]
  .
  .
  .
  o = [5][5]

  a
  bc 
  def
  ghij
  klmno

  *
  **
  ***
  ****
  *****

  *****
  ****
  ***
  **
  *

  i = 1; j MUST HAVE 1 iteration
  i = 2; j MUST HAVE 2 iteration
  .
  .
  .
  i = 5; j MUST HAVE 5 iteration

  \n => newline
  \r => Carriage return
  \n

  i=0; j=0;
  i=0; j=1;
  i=0; j=2;
  .
  i=0; j=4;

  i=1; j=0;
  .
  .
  i=1; j=4;
  .
  .
  .
  i=4; j=4;

  i=5; j=0;
*/

for (i=1; i<=5; i++) {
  for (j=1; j<=i; j++) {
    document.write('*');
  }
  document.write('<br>');
}

/* dry run

i=1; true; j=1 true; print *; break;
i=2; true; j=1 true; print *;
i=2; true; j=2 true; print *; break;
i=3; true; j=1 true; print *;
i=3; true; j=2 true; print *;
i=3; true; j=3 true; print *; break;
i=4; true; j=1 true; print *;
i=4; true; j=2 true; print *;
i=4; true; j=3 true; print *;
i=4; true; j=4 true; print *; break;
i=5; true; j=1 true; print *;
i=5; true; j=2 true; print *;
i=5; true; j=3 true; print *;
i=5; true; j=4 true; print *;
i=5; true; j=5 true; print *; break;

*/

for (i=5; i>=1; i--) {
  for (j=i; j>=1; j--) {
    document.write('*');
  }
  document.write('<br>');
}

/* 
i=5; true; j=5 true; print *; 
i=5; true; j=4 true; print *;
i=5; true; j=3 true; print *;
i=5; true; j=2 true; print *;
i=5; true; j=1 true; print *; break;
i=4; true; j=4 true; print *; 
i=4; true; j=3 true; print *;
i=4; true; j=2 true; print *;
i=4; true; j=1 true; print *; break;
i=3; true; j=3 true; print *; 
i=3; true; j=2 true; print *;
i=3; true; j=1 true; print *; break;
i=2; true; j=2 true; print *;
i=2; true; j=1 true; print *; break
i=1; true; j=1 true; print *; break;

*/


/*
  While loop (also known as conditional loop)
  for (counter loop)

  initialization
  while(condition) {
    // statements
    increment/decrement
  }

  do..while
  initialization

  do {
    // statements
  } while(condition) {
    // statements
    increment/decrement
  }
*/

var i = 0;
do {
  document.write('Printed 1st time..');
  i++;
} while(i <= 5);
