var cardElements = document.querySelectorAll(".card");
var btnArray = document.querySelectorAll("#quiz-start, #submit-score, .answer-btn, #go-back");
var answerBtns = document.querySelectorAll(".answer-btn");
var answerHolder = document.querySelector(".answer-holder");
var countdown = document.querySelector("#countdown");
var score = 60;
var startBtn = document.querySelector("#quiz-start");
var countdownID;
var finalScoreCard = document.querySelector("#final-score-card");
var finalScore = document.querySelector("#final-score");
var submitbtn = document.querySelector("#submit-score");
var initialSaved = document.querySelector("#initials");
var scoreSubmit = document.querySelector("#score-submit");
var viewScore = document.querySelector("#view-score");
var highScoreList = document.querySelector("#high-score-list");
var highScores = [];
var createScoreEl = function(){};

var saveScore = function(){
    var newHighScore = {
        "initials": initialSaved.value,
        "score":score
    };

    highScores.push(newHighScore);
    displayHighScore(newHighScore, highScores.length);

    localStorage.setItem("highscore", JSON.stringify(highScores));
};

var loadScore = function(){
    highScores = localStorage.getItem("highscore");

    if(!highScores){
        highScores = [];
        return false;
    };

    highScores = JSON.parse(highScores);
    for(i=0; i < highScores.length; i++){
        displayHighScore(highScores[i], i + 1);
    };
};

var displayHighScore = function(highscore, index){
    var listItemEl = document.createElement("li");
    listItemEl.innerText = index + ". " + highscore.initials + " - " + highscore.score;
    highScoreList.appendChild(listItemEl);
};

var getCurrentCard = function(){
     return document.querySelector(".card:not([hidden])")
};

var showNextCard = function(event){
    // find where we are
    console.log(event.target)
    var currentCard = getCurrentCard();
    currentCard.hidden = true;

    // get next card
    var nextCard = currentCard.nextElementSibling;
    if(nextCard === null){
        nextCard = document.querySelector(".card:first-child");
    };

    nextCard.hidden = false;
    console.log(nextCard);
    if(nextCard === finalScoreCard && score >= 0){
        clearInterval(countdownID);
        finalScore.innerText = score;
    };
};

//it is called a timed quiz for a reason
var startTimer = function(event){
    score = 60;
    countdownID = setInterval(function(){
        score -= 1;
        countdown.innerText = score;
        if(score <= 0){
            var currentCard = getCurrentCard();
            clearInterval(countdownID);
            finalScoreCard.hidden = false;
            currentCard.hidden = true;
        };
    }, 1000);
    //time starts connected to start button
    // display time
};

var viewScoreHistory = function(event){
    var currentCard = getCurrentCard();

    scoreSubmit.hidden = false;
    currentCard.hidden = true;

    if(score >= 0){
        clearInterval(countdownID);
        score = "";
    };
};

var correctAnswer = function(event){
    // pull an answer
    var seekAnswer = event.target.dataset.correct

    answerHolder.hidden = false;

    if(!seekAnswer){
        answerHolder.innerText = "Wrong!";
        score = score - 5;
    } else {
        answerHolder.innerText = "Correct!";
    };

    setTimeout(function(){
        answerHolder.hidden = true
    }, 2000);
};

btnArray.forEach(function(elem){
    elem.addEventListener("click", showNextCard)
});

answerBtns.forEach(function(elem){
 elem.addEventListener("click", correctAnswer);
});

startBtn.addEventListener("click", startTimer);
submitbtn.addEventListener("click", saveScore);
viewScore.addEventListener("click", viewScoreHistory);
loadScore();
