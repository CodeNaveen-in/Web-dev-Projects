// Use document.getElementById for single elements as it's more direct.
const buttonWrapper = document.getElementById("button-wrapper");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

// The game state
let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"];

/**
 * Returns a random choice for the computer.
 * @returns {string} The computer's choice.
 */
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/**
 * Determines the winner of a single round and updates the score.
 * @param {string} playerChoice The player's choice.
 * @param {string} computerChoice The computer's choice.
 */
function playRound(playerChoice, computerChoice) {
    // Check for a tie
    if (playerChoice === computerChoice) {
        resultEl.textContent = `It's a tie! Both chose ${playerChoice}.`;
    } 
    // Check for a win
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        userScoreEl.textContent = playerScore;
        resultEl.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } 
    // Otherwise, it's a loss
    else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        resultEl.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

// --- Event Handling using Event Delegation ---
buttonWrapper.addEventListener("click", (event) => {
    // Check if the clicked element is one of the buttons
    if (event.target.id === "rock" || event.target.id === "paper" || event.target.id === "scissors") {
        const playerChoice = event.target.id;
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
});