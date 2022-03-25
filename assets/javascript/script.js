var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement = document.getElementById("question")
var answerButtonsElement = document.getElementById("answer-buttons")
var wrongAnswers = document.getElementById("wrong-answers")

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
  startButton.classList.add("hide")
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  setNextQuestion()
}

function setNextQuestion() {
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
}   else {
    startButton.innerText = "Restart"
    startButton.classList.remove ("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}}

var start = Date.now();
setInterval(function() {
    var delta = Date.now() - 75000; 
    var delta = Date.end() - 0;
    output (Math.floor(delta / 1000)); 
    output (new Date() .toUTCString());
}, 1000);


var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false},
            { text: "booleans", correct: false},
            { text: "numbers", correct: false},
            { text: "alerts", correct: true}
        ]
    },
    {
        question: "The condition of an if/else statement is enlcosed with     .:",
        answers: [
            { text: "quotes", correct: false},
            { text: "curly brackets", correct: false},
            { text: "parenthesis", correct: true},
            { text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in Javascript can be used to store:",
        answers: [
            { text: "numbers and strings", correct: false},
            { text: "other arrays", correct: false},
            { text: "alerts", correct: false},
            { text: "all of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within        when being assigned to variables:",
        answers: [
            { text: "commas", correct: false},
            { text: "curly brackets", correct: false},
            { text: "booleans", correct: false},
            { text: "quotes", correct: true}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "Javascript", correct: false},
            { text: "terminal/bash", correct: false},
            { text: "alerts", correct: false},
            { text: "console.log", correct: true}
        ]
    },

]