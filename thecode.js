let plays = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
    let play = plays[Math.floor(Math.random() * plays.length)];
    console.log(play);
}