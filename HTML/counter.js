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

