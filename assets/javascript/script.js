//view high scores link in top right of page
var timeleft = 75;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown-timer").innerHTML = "Finished";
  } else {
    document.getElementById("countdown-timer").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

//time limit for quiz posted in top right of page. 75 seconds.

//1st question
var questions= [
    {
        question :'commonly used data types DO not include:',
        choiceA:  'strings',
        choiceB: 'booleans',
        choiceC: 'alerts',
        choiceD: 'numbers',
        answer: 'alerts'

    },
    {
        question :'The condition of an if/else statement is enlcosed with      . ',
        choiceA: 'quotes',
        choiceB: 'curly brackets',
        choiceC: 'parenthesis',
        choiceD: 'square brackets',
        answer: 'parenthesis'

    },
    {
        question :'Arrays in Javascript can be used to store:',
        choiceA: 'numbers and strings',
        choiceB: 'other arrays',
        choiceC: 'alerts',
        choiceD: 'all of the above',
        answer: 'all of the above'

    },
    {
        question :'String values must be enclosed within        when being assigned to variables',
        choiceA: 'commas',
        choiceB: 'curly brackets',
        choiceC: 'booleans',
        choiceD: 'quotes',
        answer: 'parenthesis'

    },
    {
        question :'A very useful tool used during development and debugging for printing content to the debugger is:',
        choiceA: 'Javascript',
        choiceB: 'terminal/bash',
        choiceC: 'alerts',
        choiceD: 'console.log',
        answer: 'console.log'

    }

];


console.log(questions);
// commonly used data types DO not include:
// 1.strings
// 2.booleans
// 3.alerts
// 4.numbers

//alert whether wrong or correct
//if wrong subtract 10 seconds from timer

//2nd question

// The condition of an if/else statement is enlcosed with      . 
// 1.quotes
// 2.curly brackets
// 3.parenthesis
// 4.square brackets

//alert whether wrong or correct
//if wrong subtract 10 seconds from timer

//3rd question

// Arrays in Javascript can be used to store:
// 1.numbers and strings
// 2.other arrays
// 3.booleans
// 4.all of the above

//alert whether wrong or correct
//if wrong subtract 10 seconds from timer

//4th question

// String values must be enclosed within        when being
// assigned to variables.
// 1.commas
// 2.curly brackets
// 3.quotes
// 4.parenthesis

//alert whether wrong or correct
//if wrong subtract 10 seconds from timer

//5th question

// A very useful tool used during development and debugging 
// for printing content to the debugger is:
// 1.Javascript
// 2.terminal/bash
// 3.for loops
// 4.console.log

//alert whether wrong or correct
//if wrong subtract 10 seconds from timer

//score/enter intitals screen

// All Done!
// your final score is :
// enter initials :
// submit button

//end screen

// High Scores:
// Go Back button
// Clear High Scores button