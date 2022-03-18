let plays = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let play = plays[Math.floor(Math.random() * plays.length)];
    return play;
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (!plays.includes(playerSelection)){
        return "Hey, that's not a move!"
    } else if (computerSelection == playerSelection) {
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
