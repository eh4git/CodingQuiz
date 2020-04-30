//General Variables
var questIndex = 0;
var allAnswers = "";
var timeOnClock = 75;
var points = 0;
var playerInput = document.querySelector("#initialEnter")

var savedScore = [];

var questArray = [
    {
        question: "What is an element?",
        answer: ["A number", "A type of variable", "A list of variables", "The name for a node in a html document"],
        correctAns: "The name for a node in a html document"
    },
    {
        question: 'What is the "DOM"?',
        answer: ["A tree like representation of the structre of a html document", "A set of functions", "An array that contains objects", "A place where vilians hide."],
        correctAns: "A tree like representation of the structre of a html document"
    },
    {
        question: "What is console.log used for?",
        answer: ["To check for spelling errors", "To help the developer check values of variables and isolate bugs", "To let your computer know how you really feel", "To apply css to html elements"],
        correctAns: "To help the developer check values of variables and isolate bugs"
    },
    {
        question: "Whats is a boolean?",
        answer: ["A type of object", "Something to make soup with", "A variable that is true or false", "Gold or silver ingots of a standard weight"],
        correctAns: "A variable that is true or false"
    },
    {
        question: "What color do the names of functions have when using Visual Studio Code?",
        answer: ["Yellow", "Blue", "Green", "Orange"],
        correctAns: "Yellow"
    },
    {
        question: "Whats is JQuery?",
        answer: ["The name of a programming language", "A type of loop", "A type of bird", "A JavaScript Library"],
        correctAns: "A JavaScript Library"
    },
    {
        question: "What does API stand for?",
        answer: ["All Pizza Ingredients", "Automatic Programming Interface", "Application Programming Interface", "Application Perfered Interface"],
        correctAns: "Application Programming Interface"
    },
    {
        question: "What can be used to comment out text in CSS",
        answer: ["/*Text Here*/", "*Text Here*", "<!--Text Here-->", "!!!---Text Here---!!!"],
        correctAns: "/*Text Here*/"
    },
    //this is a dummy question to fix logic
    {
        question: "",
        answer: ["", "", "", ""],
        correctAns: "NONE"
    },
]


//initiate quiz
function startQuiz() {
    if (localStorage.getItem("savedScore")) {
        savedScore = JSON.parse(localStorage.getItem("savedScore"))
    }
    //timer
    var timerStop = setInterval(function () {
        timeOnClock--;
        var timerEl = document.querySelector("#time");
        timerEl.textContent = timeOnClock;
        //console.log(timeOnClock)
        if (timeOnClock <= 0) {
            clearInterval(timerStop);
            document.querySelector('.right-wrong').classList.add('hide');
            document.querySelector('.right-wrong').classList.remove('show');
            var endScreen = document.querySelector('#gameOver');
            endScreen.classList.remove('hide');
            endScreen.classList.add('show');
            var endHidden = document.querySelector("#question-container");
            endHidden.classList.remove('show')
            endHidden.classList.add('hide');
        }
        if (questIndex === 9) {
            clearInterval(timerStop);
            document.querySelector('.right-wrong').classList.add('hide');
            document.querySelector('.right-wrong').classList.remove('show');
            var endScreen = document.querySelector('#gameOver');
            endScreen.classList.remove('hide');
            endScreen.classList.add('show');
            var endHidden = document.querySelector("#question-container");
            endHidden.classList.remove('show')
            endHidden.classList.add('hide');

            points = timeOnClock;
            finalScoreEl.textContent = points;

            console.log('******game over');
        }
    }, 1000);
    //console.log("Timer: " + timeOnClock, "");

    //hide start elements
    var startEl = document.querySelector('.startUp');
    startEl.classList.add('hide');
    var startEl1 = document.querySelector(".start");
    startEl1.classList.add('hide');
    var startEl2 = document.querySelector("#highScoreDiv");
    startEl2.classList.add("hide");

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

}
var highscoreDirect = function (event) {
    event.preventDefault();
    var playerText = playerInput.value;
    console.log(playerText);
    console.log(playerInput)
    var playerObject = {
        playerInitials: playerText,
        points: points
    }
    console.log(playerObject);
    savedScore.push(playerObject);
    window.location.href = "./highscores.html";
    localStorage.setItem("savedScore", JSON.stringify(savedScore))
    console.log(highscoreDirect)
}

var answerClickHandler = function () {
    //indicate right answer or wrong answer
    if (event.target.className.indexOf('correct') > -1) {
        //if you get it right then add 5 to time
        timeOnClock = timeOnClock + 10;
        //add display showing "correct"
        document.querySelector('.right-wrong').classList.remove('hide');
        document.querySelector('.right-wrong').classList.add('show');
        document.querySelector('.right-wrong').textContent = "correct!";
    } else {
        //else substract 5 secs
        timeOnClock = timeOnClock - 10;
        //add display showing "wrong"
        document.querySelector('.right-wrong').classList.remove('hide');
        document.querySelector('.right-wrong').classList.add('show');
        document.querySelector('.right-wrong').textContent = "wrong!";
    }
    //render next quesstion
    questionSelection()

}


//add start btn function to initialize quiz
var startBtn = document.querySelector(".startUp");
startBtn.addEventListener("click", startQuiz);

//setting up parent delegator   aplies event listener to the answer buttons without
document.querySelector('#question-container').addEventListener('click', function () {
    //checking for right className
    if (event.target.className.indexOf('answer') > -1) {
        answerClickHandler(); // do something
    }
});

var initalSub = document.querySelector('#subBtn');
initalSub.addEventListener("click", highscoreDirect);




//1. html add a score and initial input 
//2. submit score button => local storage of {} of score and name

//highscores html you will render the local stoarge content.
//get local stoage data and show on page