/*
Project found on OdinProject to test what I have learned. 
This particular project is aimed to creating a 'Rock, Paper, Scissors' project to play against computer
*/

// Function to get the computer choice
let getComputerChoice = () => {
    let random = Math.floor(Math.random() * 3);
    if(random === 0){
        return 'Rock';
    } else if (random === 1){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Function to get the human choice
let getHumanChoice = () => {
    let userInput = prompt('Rock, Paper, or Scissors?');
    userInput = userInput.toLowerCase();

    if (userInput === "rock") {
        return 'Rock';
    } else if (userInput === "paper") {
        return 'Paper';
    } else if (userInput === "scissors") {
        return 'Scissors';
    } else {
        return 'Invalid choice, please enter Rock, Paper, or Scissors.';
    }
}

// Function to play a single round
let playRound = (computerChoice, humanChoice) => {
    if (humanChoice === 'Invalid choice, please enter Rock, Paper, or Scissors.') {
        return humanChoice;
    }

    if (computerChoice === humanChoice) {
        return `It's a DRAW, you both chose ${computerChoice}!`;
    } else if (
        (computerChoice === 'Rock' && humanChoice === 'Scissors') ||
        (computerChoice === 'Paper' && humanChoice === 'Rock') ||
        (computerChoice === 'Scissors' && humanChoice === 'Paper')
    ) {
        return `You LOSE, ${computerChoice} beats ${humanChoice}!`;
    } else {
        return `You WIN, ${humanChoice} beats ${computerChoice}!`;
    }
}

// Function to play the entire game
let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        const result = playRound(computerSelection, humanSelection);
        console.log(result);

        if (result.includes('WIN')) {
            humanScore++;
        } else if (result.includes('LOSE')) {
            computerScore++;
        }
    }

    console.log(`Final Scores: Human - ${humanScore}, Computer - ${computerScore}`);

    if (humanScore > computerScore) {
        console.log('Congratulations, you won the game!');
    } else if (computerScore > humanScore) {
        console.log('Sorry, you lost the game. Better luck next time!');
    } else {
        console.log('The game is a draw!');
    }
}

// Start the game
playGame();