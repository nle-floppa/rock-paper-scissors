`use strict`

function getComputerChoice() {
    let outcome;
    let numOutcome = Math.floor(Math.random() * 3);
    if (numOutcome === 0) {
        outcome = "Rock";
    } else if (numOutcome === 1) {
        outcome = "Paper";
    } else {
        outcome = "Scissors";
        }
    return outcome;
    }

console.log(getComputerChoice())

function getHumanChoice() {
    const choice = prompt("Rock, Paper, or Scissors?");
    return choice;
}

console.log(getHumanChoice());