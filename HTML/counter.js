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
