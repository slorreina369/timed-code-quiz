// TODO: If answer is wrong subtract time from the timer
// TODO: If all questions are answered, display remaining time as the user's score
// TODO: Display user's score 
// TODO: Present prompt to save current score, request user initials

var cardElements = document.querySelectorAll(".card");
var btnArray = document.querySelectorAll(".btn, .answer-btn");
var answerBtns = document.querySelectorAll(".answer-btn");
var answerHolder = document.querySelector(".answer-holder");
var countdown = document.querySelector("#countdown");
var score = 60;
var startBtn = document.querySelector("#quiz-start");

var showNextCard = function(event){
    // find where we are
    var currentCard = event.target.closest(".card");
    currentCard.hidden = true;
    // get next card
    var nextCard = currentCard.nextElementSibling;
    if(nextCard === null){
        nextCard = document.querySelector(".card:first-child");
    };
    nextCard.hidden = false;
    console.log(nextCard);
};
var timedQuiz = function(event){
    var finalScoreCard = document.querySelector("#final-score-card");
    var countdownID = setInterval(function(){
        score -= 1;
        countdown.innerText = score;
        if(score <= 0){
            var endQuiz = document.querySelector(".card:not([hidden])")
            clearInterval(countdownID);
            console.log("womp womp");
            finalScoreCard.hidden = false;
            endQuiz.hidden = true;
            
        }
        
    
    }, 1000);

    //time starts connected to start button
    // display time
}
var correctAnswer = function(event){
    // pull an answer
    var seekAnswer = event.target.dataset.correct

    answerHolder.hidden = false;
    // if/else what happens next
    if(!seekAnswer){
        console.log("wrong");
        answerHolder.innerText = "Wrong!";
        score = score - 5;

    } else {
        console.log("correct");
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
startBtn.addEventListener("click", timedQuiz);
