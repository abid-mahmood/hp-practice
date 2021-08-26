function getUserGrade () {
	userInput = document.getElementById('marks');
	userValue = userInput.value;
	grade = parseFloat(userValue);

	if (isNaN(grade)) {
		console.log("Only numbers are supported atm!")
	} else if (grade >= 90 && grade <= 100) {
		console.log("Excellent! You achieved A+ grade")
	}
	else if (grade >= 85 && grade <= 89) {
		console.log("Great! You achieved A- grade")
	}
	else if (grade >= 80 && grade <= 84) {
		console.log("Well done! You achieved A grade")
	}
	else if (grade >= 75 && grade <= 79) {
		console.log("Good! You achieved B+ grade")
	}
	else if (grade >= 70 && grade <= 74) {
		console.log("Good! You achieved B- grade")
	}
	else if (grade >= 65 && grade <= 69) {
		console.log("Good! You achieved B grade")
	}
	else if (grade >= 60 && grade <= 64) {
		console.log("You achieved C+ grade. You can do better than this")
	}
	else if (grade >= 55 && grade <= 59) {
		console.log("You achieved C grade. Put More efforts")
	}
	else if(grade >= 50 && grade <= 54) {
		console.log("You achieved D grade. Needs Hardwork")
	}
	else if(grade >= 0 && grade <= 49) {
		console.log("You achieved F grade. Attempt again and do more hardwork")
	}
}