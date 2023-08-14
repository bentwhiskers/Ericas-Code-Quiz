// If all questions are answered or time reaches 0, then game is over. 
// When game is over, score can be saved in "highscores" area.

// array of questions 
var questions = [
    {
        q: "What House is Harry Potter in?",
        o: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
        a: "Gryffindor",
    }, {
        q: "What is Harry's cousin's name?",
        o: ["Diggles", "Doofy", "Derrick", "Dudley"],
        a: "Dudley",
    }, {
        q: "What kind of pet does Harry own?",
        o: ["Bat", "Owl", "Cat", "Toad"],
        a: "Owl",
    }, {
        q: "Which of these is NOT one of Albus Dumbledore's middle names?",
        o: ["Percival", "Wulfric", "Montgomery", "Brian"],
        a: "Montgomery",
    }, {
        q: "What is the name of the school Harry attends?",
        o: ["Hogwash", "Hogwarts", "Warthogs", "Pigfarts"],
        a: "Hogwarts",
    }
];

var quiz = document.getElementById("qanda");
var timeEl = document.getElementById("timer");
var startBtn = document.getElementById("btn");
var intro = document.getElementById("intro");
var finScore = document.getElementById("finalscore");
var highScore = document.getElementById("highscores");
var qCounter = 0;
var statusDiv = document.getElementById("status");
var secondsLeft = 100;
var initials = document.getElementById("initials");
var saveBtn = document.getElementById("save");
var scoreList = JSON.parse(localStorage.getItem("highscores")) || [];
var scoreCounter = document.querySelector(".score");


function startTimer () {

    var timeInterval = setInterval(function() {
        if (secondsLeft > 1) {
            timeEl.textContent = secondsLeft;
            secondsLeft--;
        } else if (qCounter >= questions.length || secondsLeft <= 0) {
            timeEl.textContent = " ";
            clearInterval(timeInterval);
            showFinalScore();
        }
        
    }, 1000);

};

function startQuiz() {
   
    document.getElementById("intro").style.display = "none";
    
    showQuestions();
};

function showQuestions() {
    if (qCounter >= questions.length) {
        showFinalScore();
        return; // exit the function if no more questions
    }
    var question = document.createElement('h3');
    question.textContent = questions[qCounter].q;
    quiz.innerHTML = " ";
    quiz.append(question);
    for (var i = 0; i < questions[qCounter].o.length; i++) {
        var options = document.createElement('button');
        options.textContent = questions[qCounter].o[i];
        quiz.append(options);
        options.addEventListener("click", function(event) {
            if (event.target.textContent !== questions[qCounter].a) {
                wrongAnswer();
            } else if (event.target.textContent == questions[qCounter].a && event.target.textContent == questions[4].a) {
                saveScore();
            } else {
                correctAnswer();
            }
        });
    };


};
// After that you want the user to click on one of the answer buttons, you need to check if that answer is correct or not, and run a function accordingly.
function correctAnswer() {
    var correct = document.createElement("p");
    correct.textContent = "Correct!";
    statusDiv.innerHTML = " ";
    statusDiv.append(correct);
    qCounter++;
    showQuestions();
};

function wrongAnswer() {
    var wrong = document.createElement("p");
    wrong.textContent = "Wrong!";
    statusDiv.innerHTML = " ";
    statusDiv.append(wrong);
    secondsLeft -= 10;

};

function saveScore() {
    var data = {
        initials: initials.value,
        score: secondsLeft,
    };
    scoreList.push(data);

    localStorage.setItem("highscores", JSON.stringify(scoreList));

    document.getElementById("qanda").style.display = "none";

    document.getElementById("status").style.display = "none";
    document.getElementById("form").removeAttribute("hidden");
    
    showHighScoresList();
}

// function to show final score of user to user
function showFinalScore() {
    document.getElementById("qanda").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById("form").removeAttribute("hidden");
    finScore.textContent = "Your score: " + secondsLeft;
}
// function to show highscores in a list using a for loop over the scoreList
function showHighScoresList() {
    highScore.innerHTML = " ";
    for (var i = 0; i < scoreList.length; i++) {
        var list = document.createElement("li");
        list.textContent = scoreList[i].initials + ": " + scoreList[i].score;
        highScore.appendChild(list);
    }
}

function getScore() {
    var storedScore = localStorage.getItem("")
}

startBtn.addEventListener("click", startTimer);
startBtn.addEventListener("click", startQuiz);
saveBtn.addEventListener("click", saveScore);