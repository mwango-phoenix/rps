let plays = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (computerSelection == playerSelection) {
        return "Tie game!";
    } else if (
        (computerSelection == "rock" && playerSelection == "paper") ||
        (computerSelection == "scissors" && playerSelection == "rock") ||
        (computerSelection == "paper" && playerSelection == "scissors")
    ) {
        return ("Congrats, you win! " + playerSelection + " beats " + computerSelection + ".");
    } else {
        return ("Oh no, try again. " + computerSelection + " beats " + playerSelection + ".");
    }
}

function game() {
    let compScore = 0;
    let playerScore = 0;
    for (let i=0; i < 5; ++i) {
        while(true) {
            let playerSelection = window.prompt("Rock, Paper, or Scissors: ");
            if (plays.includes(playerSelection)) {
                break;
            } 
            console.log("Hey, that's not a move!");
        }
        let computerSelection = computerPlay();
        oneRound(playerSelection, computerSelection);
    }
}
