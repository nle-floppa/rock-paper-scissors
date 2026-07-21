`use strict`

function getComputerChoice() {
    let outcome;
    let numOutcome = Math.floor(Math.random() * 3);
    if (numOutcome === 0) {
        outcome = "rock";
    } else if (numOutcome === 1) {
        outcome = "paper";
    } else {
        outcome = "scissors";
        }
    return outcome;
    }

console.log(getComputerChoice())