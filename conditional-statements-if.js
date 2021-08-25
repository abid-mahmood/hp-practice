/**
 * IF
 * Syntax:
      if (condition && condition) {
        // statements
      }

      if (condition || condition) {
        // statements
      }

      if (!condition) {
        // statements
      }

 * IF .. ELSE
 * Syntax:
      if (condition) {

      } else {

      }
  
  * IF .. ELSE .. IF
  * Syntax:
      if (condition) {

      } else if (condition) {

      } else {

      }
 */

 i = 0;
 if (i == 2) {
   document.write('Wow! it is 2')
 }

 i = 0;
 if (i == 2) {
  document.write('Wow! it is 2')
 } else {
  document.write('Ooops! it\'s not 2')
 }

 i = 0;
 if (i == 1) {
  document.write('It is 1!') 
 } else if (i == 2) {
  document.write('Wow! it is 2')
 } else if (i == 3) {
  document.write('Hey, it is 3!')
 } else {
  document.write('Ooops! it\'s something else')
 }

 i = 0;
 if (i == 1) {
  document.write('It is 1!') 
 }

 if (i == 2) {
  document.write('Wow! it is 2')
 }
 
 if (i == 3) {
  document.write('Hey, it is 3!')
 } else {
  document.write('Ooops! it\'s something else')
 }


var grade= 50

 if (grade >= 90 && grade <= 100) {
	document.write("Excellent! You achieved A+ grade")
}
else if (grade >= 85 && grade <= 89) {
	document.write("Great! You achieved A- grade")
}
else if (grade >= 80 && grade <= 84) {
	document.write("Well done! You achieved A grade")
}
else if (grade >= 75 && grade <= 79) {
	document.write("Good! You achieved B+ grade")
}
else if (grade >= 70 && grade <= 74) {
	document.write("Good! You achieved B- grade")
}
else if (grade >= 65 && grade <= 69) {
	document.write("Good! You achieved B grade")
}
else if (grade >= 60 && grade <= 64) {
	document.write("You achieved C+ grade. You can do better than this")
}
else if (grade >= 55 && grade <= 59) {
	document.write("You achieved C grade. Put More efforts")
}
else if(grade >= 50 && grade <= 54) {
	document.write("You achieved D grade. Needs Hardwork")
}
else if(grade >= 0 && grade <= 49) {
	document.write("You achieved F grade. Attempt again and do more hardwork")
}
else (false) {
	document.write("Please give the correct input")
}
