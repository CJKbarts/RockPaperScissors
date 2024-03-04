
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

    if (playerChoice === computerChoice) return "Draw";
    else if (playerChoice === "rock") {
        if (computerChoice === "scissors") return true;
        else return false;
    }

    else if (playerChoice === "paper") {
        if (computerChoice === "rock") return true;
        else return false;
    }

    else if (playerChoice === "scissors") {
        if (computerChoice === "paper") return true;
        else return false;
    }
}

function playGame (){
    let playerScore = 0;
    let computerScore = 0;

    let playerChoice;
    let computerChoice;
    

    for(let i = 0; i < 5; i++){
        playerChoice = prompt("Rock, Paper, or Scissors: ");
        computerChoice = getComputerChoice();
        
        let result = playRound(playerChoice, computerChoice);
        let message = result? `You win! ${playerChoice} beats ${computerChoice}` : 
            `You lose! ${computerChoice} beats ${playerChoice}`;

        if (result === "Draw") {
            i--;
            console.log("Draw! Play again!")
            continue;
        }

        if (result){
            playerScore++;
        }

        else {
            computerScore++;
        }
        console.log(message)

        if (playerScore === 3 || computerScore === 3) break;
    }

    console.log((playerScore > computerScore) ? "You win!": "You lose!")
}
