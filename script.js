function getComputerChoice() {
    const num = Math.random();
    if (num < 0.33) {
        return("rock");
    } else if (num < 0.66) {
        return("paper");
    } else {
        return("scissors");
    }
}

function playRound(humanChoice, computerChoice) {
    let tie;
    let winner;

    if (humanChoice === "rock") {
       switch (computerChoice) {
        case "rock": {
            tie = true;
            break
        }
        case "paper": {
            winner = "computer";
            break
        }
        case "scissors": {
            winner = "human";
            break
        }
       }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock": {
                winner = "human"
                break
            }
            case "paper": {
                tie = true;
                break
            }
            case "scissors": {
                winner = "computer";
                break
            }
           }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock": {
                winner = "computer"
                break
            }
            case "paper": {
                winner = "human";
                break
            }
            case "scissors": {
                tie = true;
                break
            }
           }
    } else {
        console.error("human choice was not valid")
    }

    switch (winner) {
        case "human": {
            roundResultText.innerText = `Human won. ${humanChoice} beats ${computerChoice}`
            return "human"
        }
        case "computer": {
            roundResultText.innerText = `Computer won. ${computerChoice} beats ${humanChoice}`
            return "computer"
        }
    }

    if (tie) {
        roundResultText.innerText = `Tie. both chose ${humanChoice} `
        return "tie"
    }
}

function updateScore(result) {
    switch (result) {
        case "human": {
            humanScore++
            humanScoreText.innerText = `Human Score: ${humanScore}`
            break
        }
        case "computer": {
            computerScore++
            computerScoreText.innerText = `Computer Score: ${computerScore}`
            break
        }
        case "tie" : {
            break
        }
    }
}

function winner() {
    winnerText.innerText = (humanScore > computerScore) ? 'Winner: Human' : 'Winner: Computer'
    endGame()
}

function handleClick(event) {
    let result = playRound(event.target.value, getComputerChoice())
    updateScore(result)
    if (humanScore >= 5 || computerScore >= 5) winner()
}

function endGame() {
    humanScore = 0;
    computerScore = 0;

    buttons.forEach(button => button.disabled = true)
    resetBtn.style.display = 'block'
}

// declare variables 

let humanScore = 0;
let computerScore = 0;

const humanScoreText = document.querySelector('.human-score');
const computerScoreText = document.querySelector('.computer-score');
const winnerText = document.querySelector('.winner');
const roundResultText = document.querySelector('.round-result');
const buttons = document.querySelectorAll(".option")
const resetBtn = document.querySelector('.reset-btn')
const resetDiv = document.querySelector('.reset-container')

resetBtn.style.display = 'none';

// add event liseners

buttons.forEach(button => button.addEventListener("click", handleClick))

resetBtn.addEventListener('click', () => location.reload())