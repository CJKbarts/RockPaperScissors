const playerScoreElm = document.querySelector(".playerScoreContainer .text");
let playerScore = 0;
const playerDisplayDiv = document.querySelector(".playerDisplayDiv");
let currentPlayerDisplay = null;

const computerScoreElm = document.querySelector(".computerScoreContainer .text");
let computerScore = 0;
const computerDisplayDiv = document.querySelector(".computerDisplayDiv");
let currentComputerDisplay = null;

const buttonContainer = document.querySelector(".buttonContainer");
const content = document.querySelector(".content");

const resultMessage = document.querySelector(".resultMessage");

const selectionButtons = document.querySelectorAll(".selection");
selectionButtons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            let result = playRound(button.id);
            if (playerScore === 3 || computerScore === 3){
                displayEndGameOverlay(playerScore > computerScore);
            }
        })
    }
);

function getComputerChoice (){
    let choiceNum = Math.floor(Math.random() * 3);
    let choice;
    switch (choiceNum) {
        case 0:
            choice = "rock";
            break;

        case 1:
            choice = "paper";
            break;

        case 2:
            choice = "scissors";
            break;
    }

    return choice;
}

function playRound (playerChoice){
    let computerChoice = getComputerChoice();
    let result = isWinner(playerChoice, computerChoice);

    displayPlayerChoice(playerChoice);
    displayComputerChoice(computerChoice);

    if (result === "Draw"){
        resultMessage.textContent = "It's a tie!!";
    }
    else if (result){
        playerScoreElm.textContent = `Player Score: ${++playerScore}`;
        resultMessage.textContent = `You Won!! \n${playerChoice} beats ${computerChoice}`;
    } else {
        computerScoreElm.textContent = `Computer Score: ${++computerScore}`;
        resultMessage.textContent = `You lost! \n${computerChoice} beats ${playerChoice}`;
    }
}

function isWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice) return "Draw";
    else if (playerChoice === "rock") {
        if (computerChoice === "scissors") return true;
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "rock") return true;
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "paper") return true;
    }

    return false;
}

function displayPlayerChoice(playerChoice){
    if (currentPlayerDisplay === null){
        playerDisplayDiv.classList.toggle(playerChoice);
    }
    else if (currentPlayerDisplay !== playerChoice){
        playerDisplayDiv.classList.toggle(currentPlayerDisplay);
        playerDisplayDiv.classList.toggle(playerChoice);
    }

    currentPlayerDisplay = playerChoice;
}

function displayComputerChoice(computerChoice){
    if (currentComputerDisplay === null) {
        computerDisplayDiv.classList.toggle(computerChoice);
    }

    else if (currentComputerDisplay !== computerChoice){
        computerDisplayDiv.classList.toggle(currentComputerDisplay);
        computerDisplayDiv.classList.toggle(computerChoice);
    }

    currentComputerDisplay = computerChoice;
}


const overlay = document.querySelector("#overlay");
const overlayMessage = document.querySelector("#overlay .text");
function displayEndGameOverlay(playerWon){
    overlay.style.display = "flex";
    if (playerWon) overlayMessage.textContent = "YOU WON!!";
    else overlayMessage.textContent = "YOU LOST!!";
}

const restartButton = document.querySelector(".restartButton");
restartButton.addEventListener("click", restartGame);

function restartGame(){
    overlay.style.display = "none";
    resetScoreboard();
}

function resetScoreboard(){
    playerScore = 0;
    playerScoreElm.textContent = "Player Score: 0";
    computerScore = 0;
    computerScoreElm.textContent = "Computer Score: 0";
    resultMessage.textContent = "Make your selection";
    displayPlayerChoice(null);
    displayComputerChoice(null);
}