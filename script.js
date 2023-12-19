/* Build a Quiz */

/*
Step 1: Create an html document with a form element that the user will select from choices
Step 2: Style html page with css
Step 3: Create a function in javascript that will allow the user to submit their answers from the multiple choice answers and
print a message informing them if their answer was right or wrong.
*/


/*
First thing I did was get the 'quiz-form' form element by the id from the dom that the user will be interfacing with.

Next, I used an eventlistener to allow the user to submit their answers on line 34. 

To keep the submit button from submitting the form and refreshing to a new page, on line 37, I used the preventDefault method on the function when called.

With lines 40-42, I declared variables for the answers and assigned the user's selected choices from the 'quiz-form' to them. 

On lines 46-48, I used conditional statements to determine if the questions were answered the checkAnswer function would be called to display feedback to the user.

One line 50, If the user did not select all the answers before submitting an alert to answer all questions will be displayed.

I defined the checkAnswer function with the selected answer, the correct value and Id as arguments. This function will let the user know if they were correct or wrong
on their selected choices.

The function compares the user's selected answer's value with the correct value and if they match, the text in the p element from the html doc will print 'Correct!!!' and change its
color to green. Else, the message will print 'Wrong!' and present the correct answer and change the text color to red.


*/


const quizForm = document.getElementById('quiz-form');

quizForm.addEventListener('submit', function(event) {
	event.preventDefault();
	

const answer1 = document.querySelector('input[name="question1"]:checked');
const answer2 = document.querySelector('input[name="question2"]:checked');
const answer3 = document.querySelector('input[name="question3"]:checked');


if (answer1 && answer2 && answer3) {
	checkAnswer(answer1, 'q1-a', 'question1-feedback');
	checkAnswer(answer2, 'q2-d', 'question2-feedback');
	checkAnswer(answer3, 'q3-a', 'question3-feedback');
  } else {
	alert('Please answer all the questions.');
  }
});

function checkAnswer(answer, correctValue, feedbackId) {
	const feedback = document.getElementById(feedbackId);
	if (answer.value === correctValue) {
		feedback.textContent = 'Correct!!!';
		feedback.style.color = 'green';
	} else{
		feedback.textContent = 'Wrong! The correct answer is ' + document.querySelector('label[for="' + correctValue + '"]').textContent + '.';
		feedback.style.color = 'red';
	}
}




































/*
document.getElementById('quiz-form').addEventLister('submit', questionSubmit(e) {
	e.preventDefault();
	
	const question1Answer = document.querySelector('button[name="question1"]:checked').value;
	if(question1Answer === 'A') {
		document.getElementById('question1-feedback').textContent = 'Correct!';
	} else {
		document.getElementById('question1-feedback').textContent = 'Incorrect, the correct answer was A.';
	}


	});
	*/