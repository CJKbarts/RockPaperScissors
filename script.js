const playerScoreElm = document.querySelector(".playerScoreContainer .score");
const playerDisplayDiv = document.querySelector(".playerDisplayDiv");
let currentPlayerDisplay = null;
let playerScoreValue = 0;

const computerScoreElm = document.querySelector(".computerScoreContainer .score");
const computerDisplayDiv = document.querySelector(".computerDisplayDiv");
let currentComputerDisplay = null;
let computerScore = 0;

const selectionButtons = document.querySelectorAll(".selection");
const buttonContainer = document.querySelector(".buttonContainer");
const content = document.querySelector(".content");
const resultMessage = document.createElement("div");
resultMessage.classList.add("resultContainer");

selectionButtons.forEach(
    (button) => {
        button.addEventListener("click", () => {
            let result = playRound(button.id);
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
    displayPlayerChoice(playerChoice);
    displayComputerChoice(computerChoice);
    let result = isWinner(playerChoice, computerChoice);

    if (result === "Draw"){
        resultMessage.textContent = "It's a tie!!";
    }
    else if (result){
        playerScoreElm.textContent = `Player Score: ${++playerScoreValue}`;
        resultMessage.textContent = `You Won!! \n${playerChoice} beats ${computerChoice}`;
    } else {
        computerScoreElm.textContent = `Computer Score: ${++computerScore}`;
        resultMessage.textContent = `You lost! \n${computerChoice} beats ${playerChoice}`;
    }

    content.insertBefore(resultMessage, buttonContainer);
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

function capitalizeFirstLetter(string){
    return (string[0].toUpperCase() + string.slice(1))
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