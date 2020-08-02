"use strict";

function startGame(e) {
    window.userScore = 0;
    window.computerScore = 0;
    let div = document.createElement('div');
    div.textContent = 'Game started';
    let startButton = document.querySelector('button[id="startButton"]');
    startButton.parentNode.appendChild(div);
    startButton.remove();

    let roundCounter = document.querySelector('#roundCounter');
    let round = 1;
    roundCounter.textContent = `Round: ${round}`;

    let playerCounter = document.querySelector('#playerCounter');
    let playerScore = 0;
    playerCounter.textContent = `You have ${playerScore} points`;

    let computerCounter = document.querySelector('#computerCounter');
    let computerScore = 0;
    computerCounter.textContent = `They have ${computerScore} points`;

    let buttonContainer = document.querySelector('#buttonContainer');

        let rockButton = document.createElement('button');
        rockButton.setAttribute("data-button", "rock");
        rockButton.textContent = "Rock";
        buttonContainer.appendChild(rockButton);
        rockButton.addEventListener('click', playRoundTest);

        let paperButton = document.createElement('button');
        paperButton.setAttribute("data-button", "paper");
        paperButton.textContent = "Paper";
        buttonContainer.appendChild(paperButton);
        paperButton.addEventListener('click', playRoundTest);

        let scissorsButton = document.createElement('button');
        scissorsButton.setAttribute("data-button", "scissors");
        scissorsButton.textContent = "Scissors";
        buttonContainer.appendChild(scissorsButton);
        scissorsButton.addEventListener('click', playRoundTest);

}

function computerPlay() {
    let moves = [
        "rock",
        "paper",
        "scissors",
    ]
    let choice = Math.floor(Math.random()*3);
    return moves[choice];
}

function playRoundTest(e) {
    let playerChoice = e.srcElement.dataset['button'];
    
    let computerChoice = computerPlay();
    
    let playerOutcome = document.querySelector('#playerOutcome');
    playerOutcome.textContent = `You chose: ${playerChoice}`;

    let computerOutcome = document.querySelector('#computerOutcome');
    computerOutcome.textContent = `They chose: ${computerChoice}`;

    let roundOutcome = document.querySelector('#roundOutcome');
    let roundOutcomeString;

    if (playerChoice == computerChoice) {
        roundOutcomeString = "It was a draw";
        nextRound();
    }

    if ( (playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper") ) {
        roundOutcomeString = "You won";
        nextRound();
        playerWon();
        
    }

    if ( (computerChoice == "rock" && playerChoice == "scissors") || (computerChoice == "paper" && playerChoice == "rock") || (computerChoice == "scissors" && playerChoice == "paper") ) {
        roundOutcomeString = "You lost";
        nextRound();
        computerWon();   
    }

    roundOutcome.textContent = roundOutcomeString;
}

function playerWon() {
    let playerScore = playerCounter.textContent[9];
    playerScore++;
    if(playerScore == 5){ 
        gameOver("player");
        return;
    }
    playerCounter.textContent = `You have ${playerScore} points`;
}

function computerWon() {
    let computerScore = computerCounter.textContent[10];
    computerScore++;
    if(computerScore == 5){
        gameOver("computer");
        return;
    }
    computerCounter.textContent = `They have ${computerScore} points`;

}

function gameOver(whoWon) {
    let winnerStatement = document.createElement('p');
    let body = document.querySelector('body');
    if (whoWon == "player") {
        winnerStatement.textContent = "You won the game!";
    }
    if (whoWon == "computer") {
        winnerStatement.textContent = "You lost the game!";
    }
    while (body.hasChildNodes()) {
        body.removeChild(body.lastChild);
    }
    
    body.appendChild(winnerStatement);
    let startButton = document.createElement('button');
    startButton.id = "startButton";
    startButton.textContent = "Start game";
    body.appendChild(startButton);
    startButton.addEventListener('click', startGame);
    console.log(startButton.parentNode);


}

function nextRound() {
    let string = roundCounter.textContent;
    if (string.length == 8) {
        let round = roundCounter.textContent[7];
        round++;
        roundCounter.textContent = `Round: ${round}`;
    }

    if (string.length == 9) {
        let round = +(roundCounter.textContent[7] + roundCounter.textContent[8]);
        round++;
        roundCounter.textContent = `Round: ${round}`;
    }

}

let startButton = document.querySelector('button[id="startButton"]');
startButton.addEventListener('click', startGame);





