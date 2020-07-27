"use strict";

function computerPlay() {
    let moves = [
        "rock",
        "paper",
        "scissors",
    ]
    let choice = Math.floor(Math.random()*3);
    return moves[choice];
}

function playRound(playerSelection, computerSelection) {
    let calc = playerSelection.toLowerCase() + computerSelection.toLowerCase();
    
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "It was a draw!";
    }

    switch(calc) {
        case "rockpaper":
            return "You lose!";
            break;
        case "rockscissors":
            return "You win!";
            break;
        case "paperrock":
            return "You win!";
            break;
        case "paperscissors":
            return "You lose!";
            break;
        case "scissorsrock":
            return "You lose!";
            break;
        case "scissorspaper":
            return "You win!";
            break;
        default: 
            return "Invalid entry parameters";
            break;
    }
    

}

function game() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        let computerSelection = computerPlay();
        console.log("Computer chose: " + computerSelection);
        let userSelection = prompt("Rock, paper, scissors?", "");
        console.log("Player chose: " + userSelection);
        let round = playRound(userSelection, computerSelection);

        switch(round) {
            case "It was a draw!":
                console.log("Draw");
                break;
            case "You win!":
                console.log("Player wins");
                playerWins += 1;
                break;
            case "You lose!":
                console.log("Player loses");
                computerWins += 1;
                break;
        }
    }

    if (playerWins > computerWins) {
        return "You win!";
    }
    else if (computerWins > playerWins) {
        return "You lose!";
    }
    else {
        return "Game over";
    }
}

alert(game());