// If player score does not exist in local storage, initialize it
if (!localStorage.getItem('playerScore')){
    localStorage.setItem('playerScore',0);
}

// If computer score does not exist in local storage, initialize it
if (!localStorage.getItem('computerScore')){
    localStorage.setItem('computerScore',0);
}

// Update the computer score
let compScore = document.getElementById('computerScore');
compScore.innerHTML = localStorage.computerScore;

// Update the player score
let playScore = document.getElementById('playerScore');
playScore.innerHTML = localStorage.playerScore;

// This function simulates a random computer hand selection
function compChoice(){
    return Math.floor(Math.random()*3)+1;
}

// This function finds which hand wins
function playerHand(playerChoice){
    // Find which hand the computer selects
    let computerChoice = compChoice()

    // Store the hands selected by the player as well as the computer in local storage
    localStorage.setItem('playerChoice', playerChoice)
    localStorage.setItem('computerChoice', computerChoice)
    
    // If both the players hand and the computer hand are the same, the result is a tie
    if (playerChoice == computerChoice){
        window.location.replace('tie.html')
    }
    // If the players hand beats the computer hand, the result is a win
    else if ((playerChoice === 1 && computerChoice === 2) || (playerChoice === 2 && computerChoice === 3) || (playerChoice === 3 && computerChoice === 1)){
        localStorage.playerScore = Number(localStorage.playerScore) + 1;
        window.location.replace('win.html')
    }
    // If the computer hand beats the player hand, the result is a loss
    else{
        localStorage.computerScore = Number(localStorage.computerScore) + 1;
        window.location.replace('lost.html')
    }
}