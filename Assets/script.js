// When I click on start, the timer starts and the first question pops up.
// After question is answered, another question pops up.
// If question is answered incorrectly, time is subtracted from the clock.
// If all questions are answered or time reaches 0, then game is over. 
// When game is over, score can be saved in "highscores" area.


var qanda = {
    qOne: "What House is Harry Potter in?",
    oOne: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    aOne: "Gryffindor",
    qTwo: "What is Harry's cousin's name?",
    oTwo: ["Diggles", "Doofy", "Derrick", "Dudley"],
    aTwo: "Dudley",
    qThree: "What kind of pet does Harry own?",
    oThree: ["Bat", "Owl", "Cat", "Toad"],
    aThree: "Owl",
    qFour: "Which of these is NOT one of Albus Dumbledore's middle names?",
    oFour: ["Percival", "Wulfric", "Montgomery", "Brian"],
    aFour: "Montgomery",
    qFive: "What is the name of the school Harry attends?",
    oFive: ["Hogwash", "Hogwarts", "Warthog", "Pigfarts"],
    aFive: "Hogwarts",

};

var quiz = document.getElementById("qanda");
var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("btn");
var finScore = document.getElementById("finalscore");
var highScore = document.getElementById("highscores");

function startTimer () {

    var secondsLeft = 100;

    var timeInterval = setInterval(function() {
        if (secondsLeft > 1) {
            timeEl.textContent = secondsLeft;
            secondsLeft--;
        } else {
            timeEl.textContent = " ";
            clearInterval(timeInterval);
        }
        
    }, 1000);
    
};

function startQuiz() {
   
    
}

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuiz);
