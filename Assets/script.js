// First question pops up after timer starts. 
// Questions/Answers defined as objects
// After question is answered, another question pops up.
// If question is answered incorrectly, time is subtracted from the clock.
// If all questions are answered or time reaches 0, then game is over. 
// When game is over, score can be saved in "highscores" area.


var qanda = {
    qOne: "What House is Harry Potter in?",
    aOne: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    qTwo: "What is Harry's cousin's name?",
    aTwo: ["Diggles", "Doofy", "Derrick", "Dudley"],
    qThree: "What kind of pet does Harry own?",
    aThree: ["Bat", "Owl", "Cat", "Toad"],
    qFour: "Which of these is NOT one of Albus Dumbledore's middle names?",
    aFour: ["Percival", "Wulfric", "Montgomery", "Brian"],
    qFive: "What is the name of the school Harry attends?",
    aFive: ["Hogwash", "Hogwarts", "Warthog", "Pigfarts"],

};

var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("btn");
console.log(startBtn)

function startQuiz () {

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

startBtn.addEventListener("click", startQuiz);

var qanda = {
    qOne: "What House is Harry Potter in?",
    aOne: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
    qTwo: "What is Harry's cousin's name?",
    aTwo: ["Diggles", "Doofy", "Derrick", "Dudley"],
    qThree: "What kind of pet does Harry own?",
    aThree: ["Bat", "Owl", "Cat", "Toad"],
    qFour: "Which of these is NOT one of Albus Dumbledore's middle names?",
    aFour: ["Percival", "Wulfric", "Montgomery", "Brian"],
    qFive: "What is the name of the school Harry attends?",
    aFive: ["Hogwash", "Hogwarts", "Warthog", "Pigfarts"],

};

