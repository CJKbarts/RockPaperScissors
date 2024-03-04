
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

function playRound (playerChoice, computerChoice){
    playerChoice = playerChoice.toLowerCase();
    let winMessage = `You win! ${playerChoice} beats ${computerChoice}`;
    let loseMessage = `You lose! ${computerChoice} beats ${playerChoice}`;

    if (playerChoice === computerChoice) return "Draw";
    else if (playerChoice === "rock") {
        if (computerChoice === "scissor") return winMessage;
        else return loseMessage;
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "rock") return winMessage;
        else return loseMessage;
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "paper") return winMessage;
        else return loseMessage;
    }
}