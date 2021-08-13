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

for (i=0; i<5; i++) {
  for (j=0; j<5; j++) {
    console.log('*');
  }
}
