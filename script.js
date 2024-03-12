const playerScoreContainer = document.querySelector(".playerScoreContainer");
let playerScore = 0;

const computerScoreContainer = document.querySelector(".computerScoreContainer");
let computerScore = 0;

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
    if (isWinner(playerChoice)){
        playerScoreContainer.textContent = `Player Score: ${++playerScore}`;
    } else {
        computerScoreContainer.textContent = `Computer Score: ${++computerScore}`
    }
}

function isWinner(playerChoice){
    let computerChoice = getComputerChoice();

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

const selectionbtns = document.querySelectorAll(".selection");

selectionbtns.forEach(
    (button) => {
        button.addEventListener("click", () => {
            let result = playRound(button.id);
        })
    }
)