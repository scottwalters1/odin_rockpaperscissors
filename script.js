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

    let rock_btn = document.querySelector('#rock');
    let paper_btn = document.querySelector('#paper');
    let scissors_btn = document.querySelector('#scissors');

    rock_btn.addEventListener('click', () => {
        let result = playRound("rock", getComputerChoice());
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        let scorecounter = document.querySelector('#scorecounter');
        scorecounter.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
        if (humanScore === 5) {
            scorecounter.textContent += " HUMAN WON";
        } else if (computerScore === 5) {
            scorecounter.textContent += " COMPUTER WON";
        }
    });

    paper_btn.addEventListener('click', () => {
        let result = playRound("paper", getComputerChoice());
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        let scorecounter = document.querySelector('#scorecounter');
        scorecounter.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
        if (humanScore === 5) {
            scorecounter.textContent += " HUMAN WON";
        } else if (computerScore === 5) {
            scorecounter.textContent += " COMPUTER WON";
        }
    });

    scissors_btn.addEventListener('click', () => {
        let result = playRound("scissors", getComputerChoice());
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }
        let scorecounter = document.querySelector('#scorecounter');
        scorecounter.textContent = "Human Score: " + humanScore + " Computer Score: " + computerScore;
        if (humanScore === 5) {
            scorecounter.textContent += " HUMAN WON";
        } else if (computerScore === 5) {
            scorecounter.textContent += " COMPUTER WON";
        }
    });


    

    // if (humanScore > computerScore) {
    //     console.log("Human won!")
    // } else if (computerScore > humanScore) {
    //     console.log("Computer won!")
    // } else {
    //     console.log("Game Tie!")
    // }

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
        return "human";
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        return "computer";
    }

    
}

playGame();



// console.log(playRound("Rock", "rock"));

// made a change for branch test