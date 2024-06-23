// Initialize scores for human and computer
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// Function to get a random choice for the computer
const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to play a single round and determine the result
const playRound = (humanChoice) => {
    if (gameOver) return;

    const computerChoice = getComputerChoice();

    let resultMessage = '';

    if (computerChoice === humanChoice) {
        resultMessage = `It's a DRAW, you both chose ${computerChoice}!`;
    } else if (
        (computerChoice === 'Rock' && humanChoice === 'Scissors') ||
        (computerChoice === 'Paper' && humanChoice === 'Rock') ||
        (computerChoice === 'Scissors' && humanChoice === 'Paper')
    ) {
        computerScore++;
        resultMessage = `You LOSE, ${computerChoice} beats ${humanChoice}!`;
    } else {
        humanScore++;
        resultMessage = `You WIN, ${humanChoice} beats ${computerChoice}!`;
    }

    // Update the history display
    updateHistory(humanChoice, computerChoice, resultMessage);

    // Return the result message
    return resultMessage;
}

// Function to update the results and scores in the DOM
const updateResults = (message) => {
    document.querySelector('#result-message').innerText = message;
    document.querySelector('#human-score').innerText = humanScore;
    document.querySelector('#computer-score').innerText = computerScore;

    // Check if either player has reached 5 points
    if (humanScore === 5) {
        document.querySelector('#result-message').innerText += ' Congratulations, you won the game!';
        gameOver = true;
    } else if (computerScore === 5) {
        document.querySelector('#result-message').innerText += ' Sorry, you lost the game. Better luck next time!';
        gameOver = true;
    }
}

// Function to update the history display in the DOM
const updateHistory = (humanChoice, computerChoice, resultMessage) => {
    const historyList = document.querySelector('#history-list');
    const historyItem = document.createElement('li');
    historyItem.innerText = `Human: ${humanChoice}, Computer: ${computerChoice} - ${resultMessage}`;
    historyList.appendChild(historyItem);
}

// Function to reset the game scores and update the DOM
const resetGame = () => {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;
    document.querySelector('#history-list').innerHTML = ''; // Clear the history
    updateResults('Game reset. Start playing again!');
}

// Function to toggle night mode
const toggleNightMode = () => {
    document.body.classList.toggle('night-mode');
}

// Add event listeners to the buttons for user interaction
document.querySelector('#rock').addEventListener('click', () => {
    if (gameOver) return;
    const result = playRound('Rock');
    updateResults(result);
});

document.querySelector('#paper').addEventListener('click', () => {
    if (gameOver) return;
    const result = playRound('Paper');
    updateResults(result);
});

document.querySelector('#scissors').addEventListener('click', () => {
    if (gameOver) return;
    const result = playRound('Scissors');
    updateResults(result);
});

// Add event listener to the night mode toggle button
document.querySelector('#night-mode-toggle').addEventListener('click', toggleNightMode);

// Add event listener to the restart game button
document.querySelector('#restart-game').addEventListener('click', resetGame);