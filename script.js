function getComputerChoice() {
    randomNum = Math.random();

    if (randomNum < .33) {
        return "rock";
    } else if (randomNum >= .33 && randomNum < .66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    return choice;
}


function playGame() {

    let humanScore = 0;

    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Human won!")
    } else if (computerScore > humanScore) {
        console.log("Computer won!")
    } else {
        console.log("Game Tie!")
    }

    function playRound(humanChoice, computerChoice) {
        let won = false;
        let humanChoice1 = humanChoice.toLowerCase();
    
        if (humanChoice1 === computerChoice) {
            console.log("Tie!")
            return;
        }
        switch (humanChoice1) {
            case "rock": 
                if (computerChoice === "scissors"){
                    won = true;
                }
                break;
            case "paper": 
                if (computerChoice === "rock"){
                    won = true;
                }
                break;
            case "scissors": 
                if (computerChoice === "paper"){
                    won = true;
                }
                break;
        }
        if (won) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

}

playGame();

// console.log(playRound("Rock", "rock"));

// made a change for branch test