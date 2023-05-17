let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random()*10);
}

// test above function
// console.log(generateTarget());

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    if (Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber)) {
        return true;
    } else {
        return false;
    }
}

// test above function
// console.log(compareGuesses(4,6,2))

const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
}

//test above function
// updateScore('human')
// console.log(humanScore)

const advanceRound = () => {
    currentRoundNumber ++
}