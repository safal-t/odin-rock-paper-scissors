// computer choice function
//  what/purpose? -> choose between rock paper and sisccors
// why? -> for the user to be able to play a game of RPS
// HOW:

// when the function is called,
// it should choose between RPS
// generate a random number between 0-.99
// if that number is 0-.33:
    // console.log R
// if that number is .33-.66:
    // console.log P
// if that number is .66-.99:
    //console.log S


// human choice function
// what/purpose? -> To get user input
// HOW:

// create a new function
// ask the user for input
// console.log the user's input

// play round function'
// what/purpose?? -> To get human and computer input and simuylare a round of RPS
// HOW:

// store the human and computer inputs 

// call the function
// create a winner variable
// lowercase the human input
// if the human inputsed rock:
    // compare the computer input 
        // rock 
            // tie
        // paper 
            // comp wins
        // scissors 
            // human wins
// repeat for paper and scissors
// if human won increment the human score
// elif comp won increment the comp score
// else nothing
// if there is a winner log the winner and how they won


// play game function
// What/purpose? -> run multiple rounds to simulate a game
// HOW:

// create function
// call playRound function 5 times
// declare the winner

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

function getHumanChoice() {
    return(prompt())
}

function playRound(humanChoice, computerChoice) {
    let tie;
    let winner;
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock") {
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
    } else if (humanChoice == "paper") {
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
    } else if (humanChoice == "scissors") {
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
            console.log(`Human won. ${humanChoice} beats ${computerChoice}`)
            return "human"
        }
        case "computer": {
            console.log(`Computer won. ${computerChoice} beats ${humanChoice}`)

            return "computer"
        }
    }

    if (tie) {
        console.log(`Tie. both chose ${humanChoice} `)
        return "tie"
    }
    
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i <=5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(humanSelection, computerSelection);

        switch (result) {
            case "human": {
                humanScore++
                break
            }
            case "computer": {
                computerScore++
                break
            }
        }
    }

    if (humanScore > computerScore) {
        console.log("Human wins the game")
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game")
    } else {
        console.log("tie")
    }
}

playGame()