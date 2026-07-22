`use strict`

let computerChoice;
function getComputerChoice() {
    let outcome;
    let numOutcome = Math.floor(Math.random() * 3);
    if (numOutcome === 0) {
        computerChoice = "rock";
    } else if (numOutcome === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
        }
    return computerChoice;
    }


let humanChoice
function getHumanChoice() {
    humanChoice = prompt("Rock, Paper, or Scissors?");
    console.log(humanChoice);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // make sure to lowercase conditions in if statement before checking them
    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore++;
        } else {
            console.log("Tie! No points awarded");
        }

    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore++;
        } else if (computerChoice === "rock") {
            console.log("You win! Rock beats paper");
            humanScore++;
        } else {
            console.log("Tie! No points awarded");
        }

    } else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beats paper");
            humanScore++;
        } else {
            console.log("Tie! No points awarded");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);