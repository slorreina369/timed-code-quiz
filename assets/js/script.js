// TODO: display one card at a time
// TODO: display one card after the other, after the user answers the question
// TODO: determine if an answer is right or wrong
// TODO: display if answer is right or wrong
// TODO: Set up timer, make timer count down - connect timer to "start" button
// TODO: If answer is wrong subtract time from the timer
// TODO: If all questions are answered, display remaining time as the user's score
// TODO: Display user's score 
// TODO: Present prompt to save current score, request user initials

var cardElements = document.querySelectorAll(".card");
var btnArray = document.querySelectorAll(".btn, .answer-btn");

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

// get start button
// add click event listener to start button (show next card)
// get answer buttons
// add click event listener to each answer button (show next card)
btnArray.forEach(function(elem){
    elem.addEventListener("click", showNextCard)
});