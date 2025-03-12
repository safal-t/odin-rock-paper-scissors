// computer choice function
//  what/purpose? -> choose between rock paper and sisccors

// why? -> for the user to be able to play a game of RPS
// HOW:

// when the function is called,
// it should choose between RPS

// generate a random number between 0-.99
// if that number is 0-.33:
    // return R
// if that number is .33-.66:
    // return P
// if that number is .66-.99:
    //return S

function getComputerChoice() {
    const num = Math.random();
    if (num < 0.33) {
        return "rock";
    } else if (num < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
