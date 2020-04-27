
var questIndex = 0;
var allAnswers = "";
var 
timeOnClock = 75;

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
function startQuiz() {
    // var timerStop =  setInterval(setTime, 1000);
    questionSelection();
    questIndex++;
            console.log("Timer: "+ timeOnClock,"");
};
var timerStop = setInterval(setTime, 1000);
function setTime() {
    timeOnClock--;
    var timerEl = document.querySelector("#time");

    timerEl.textContent = timeOnClock;
    console.log(timeOnClock)

    if (timeOnClock === 0) {
        clearInterval(timerStop);

    }
}



function questionSelection() {
    var questEl = document.querySelector("#quizQuestion");
    questEl.textContent = questArray[questIndex].question
    var answer1El = document.querySelector("#answer1")
    answer1El.textContent = questArray[questIndex].answer[0]
    var answer2El = document.querySelector("#answer2")
    answer2El.textContent = questArray[questIndex].answer[1]
    var answer3El = document.querySelector("#answer3")
    answer3El.textContent = questArray[questIndex].answer[2]
    var answer4El = document.querySelector("#answer4")
    answer4El.textContent = questArray[questIndex].answer[3]
    allAnswers = document.querySelectorAll("#answer")

    var rightAns = questArray[questIndex].correctAns
    for (i = 0; i > allAnswers.lenght; i++) {
        var answerTxt = allAnswers[i].textContent;
        if (answerTxt === rightAns) {

        }
    }

}


var startBtn = document.querySelector(".start");
startBtn.addEventListener("click", startQuiz);
//   for(i=timeOnClock; i > 0; i--){setInterval(runTimer,1000);{
//          timeOnClock--;
//         var timerEl = document.querySelector("#time");
//         timerEl.textContent = timeOnClock;
//     }
// }