function printTable() {

}

function handleClick() {
  ele = document.getElementById('user-input');
  var userInput = ele.value;
  var parsedInput = parseInt(userInput);

  for (i = 1; i <= 10; i++) {
    console.log('ele.value X' + i + '=' + (ele.value * i))
  }
}