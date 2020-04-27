var timerEl = document.getElementById("time");
var quizDisplay = document.getElementById("quizArea");


var quizQuestion1={
    quizDisplay=""
}


// timeLeft = 75;
// for(i=0; i > 0; i++){
//     setInterval(1000);
//     timerEl--;
//     console.log("Timer: "+ timer)
// }

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = timeLeft;
      console.log(timeLeft)
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  setTime;