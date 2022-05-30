// TODO: determine if an answer is right or wrong
// TODO: display if answer is right or wrong
// TODO: Set up timer, make timer count down - connect timer to "start" button
// TODO: If answer is wrong subtract time from the timer
// TODO: If all questions are answered, display remaining time as the user's score
// TODO: Display user's score 
// TODO: Present prompt to save current score, request user initials

var cardElements = document.querySelectorAll(".card");
var btnArray = document.querySelectorAll(".btn, .answer-btn");
var answerBtns = document.querySelectorAll(".answer-btn");
var answerHolder = document.querySelector(".answer-holder");

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

var correctAnswer = function(event){
    // pull an answer
    var seekAnswer = event.target.dataset.correct

    answerHolder.hidden = false;
    // if/else what happens next
    if(!seekAnswer){
        console.log("wrong");
        answerHolder.innerText = "Wrong!";
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
