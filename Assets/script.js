// This program will create a timed quiz about coding.
// User hits a start button which starts the timer countdown.
// First question pops up after timer starts. 
// After question is answered, another question pops up.
// If question is answered incorrectly, time is subtracted from the clock.
// If all questions are answered or time reaches 0, then game is over. 
// When game is over, score can be saved in "highscores" area.



var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("btn");


function startTimer () {

    var secondsLeft = 100;

    var timeInterval = setInterval(function() {
        if (secondsLeft > 0) {
            timeEl.textContent = secondsLeft;
            secondsLeft--;
        } else (secondsLeft === 0) {
            timeEl.textContent = " ";
            clearInterval(timeInterval);
        }
        
    }, 1000);
}
