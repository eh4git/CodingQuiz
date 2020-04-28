var questIndex = 0;
var allAnswers = "";
var timeOnClock = 5;
var points = 0;

var questArray = [
    {
        question: "Whats my fav color?",
        answer: ["a", "b", "c", "d"],
        correctAns: "d"
    },
    {
        question: "Whats your fav color?",
        answer: ["green", "blue", "red", "orange"],
        correctAns: "blue"
    },
    {
        question: "Whats his fav color?",
        answer: ["green", "blue", "red", "orange"],
        correctAns: "green"
    },
    {
        question: "Whats her fav color?",
        answer: ["green", "blue", "red", "orange"],
        correctAns: "orange"
    },
    {
        question: "Whats their fav color?",
        answer: ["green", "blue", "red", "orange"],
        correctAns: "red"
    },
    {
        question: "Whats its fav color?",
        answer: ["green", "blue", "red", "orange"],
        correctAns: "blue"
    },
    {
        question: "Whats our fav color?",
        answer: ["green", "blue", "red", "orange"],
        correctAns: "green"
    },
    {
        question: "Whats everyone's fav color?",
        answer: ["green", "blue", "red", "orange"],
        correctAns: "red"
    },
]

var setTime = function(timerStop) {
    timeOnClock--;
    var timerEl = document.querySelector("#time");
    timerEl.textContent = timeOnClock;
    //console.log(timeOnClock)
    if (timeOnClock === 0) {
        clearInterval(timerStop);
    }
}

//initiate quiz
function startQuiz() {

    //timer
    var timerStop = setInterval(setTime, 1000);
    //console.log("Timer: " + timeOnClock, "");
    setTime(timerStop);

    //hide start elements
    var startEl = document.querySelector('.startUp');
    startEl.classList.add('hide');
    var startEl1 = document.querySelector(".start");
    startEl1.classList.add('hide');

    //show question elements
    var questionEl = document.querySelector('#question-container');
    questionEl.classList.remove('hide');
    questionEl.classList.add('show');

    //show first question
    questionSelection();

};

// this function "grabs" #quizQuestion and sets it equal to questEl1
// and "grabs" each of the answers in the answer array and sets them equal
// to a variable of their own
// then it sets the text of of the variables to the corresponding item as
//specified by the for loop.

function questionSelection() {
    //remove correct tag
    var allAnswers = document.querySelectorAll(".answer"); // get array of all choices
    for (i = 0; i < allAnswers.length; i++) { // loop trough choices and check if the choice is right
        allAnswers[i].classList.remove('correct'); 
    }

    //populated the html with question data
    var questEl = document.querySelector("#quizQuestion");
    questEl.textContent = questArray[questIndex].question;
    var answer1El = document.querySelector("#answer1");
    answer1El.textContent = questArray[questIndex].answer[0];
    var answer2El = document.querySelector("#answer2");
    answer2El.textContent = questArray[questIndex].answer[1];
    var answer3El = document.querySelector("#answer3");
    answer3El.textContent = questArray[questIndex].answer[2];
    var answer4El = document.querySelector("#answer4");
    answer4El.textContent = questArray[questIndex].answer[3];

    //loop through the choices and tag with a correct one
    var rightAns = questArray[questIndex].correctAns; // in questArray
    for (i = 0; i < allAnswers.length; i++) { // loop trough choices and check if the choice is right
        var answerTxt = allAnswers[i].textContent; // store in a variable the text of each choice
        if (answerTxt === rightAns) { //check/compare choice text with stored answer
            allAnswers[i].classList.add('correct'); // if check is passed then add correct class
        }
    }

    questIndex++;

    if (questIndex > 7) {
        //calc point
        points = timeOnClock;
        //redirect the html to load highscores html
        window.location.href ="./highscores.html";

        console.log('******game over');
    }

}

var answerClickHandler = function() {
    //indicate right answer or wrong answer
    if (event.target.className.indexOf('correct') > -1) {
        //if you get it right then add 5 to time
        timeOnClock = timeOnClock + 5;
    } else {
        //else substract 5 secs
        timeOnClock = timeOnClock + 5;
    }

    //render next quesstion
    questionSelection()

}

//add start btn function to initialize quiz
var startBtn = document.querySelector(".startUp");
startBtn.addEventListener("click", startQuiz);

//setting up parent delegator   aplies event listener to the answer buttons without
document.querySelector('#question-container').addEventListener('click',function() {
    //checking for right className
    if (event.target.className.indexOf('answer') > -1) {
        answerClickHandler(); // do something
    }
})

//1. html add a score and initial input
//2. submit score button => local storage of {} of score and name

//highscores html you will render the local stoarge content.
//get local stoage data and show on page