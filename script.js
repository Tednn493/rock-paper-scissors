const buttons= document.querySelectorAll('button');
const scoreboard = document.querySelector('.scoreboard');
var playerSelection = " ";
var computerSelection = " ";
var playerScore = 0
var computerScore = 0 

function updateScoreboard(){
    if (playerScore===5){
        scoreboard.textContent = "You win!";
    }else if (computerScore===5){
        scoreboard.textContent = "Computer wins!"
    }else{
        scoreboard.textContent = `PLAYER:${playerScore} AI:${computerScore}`
    }
}

function playerChoice(e){
  playerSelection = this.classList.value;
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
} ;


function getComputerChoice() {
    const choice= Math.floor(Math.random()*3)
    
    if ( choice === 0) {
        return "rock"
    }else if (choice == 1){
        return "paper"
    }else {
        return "scissors"
    };
};


function playRound(pChoice, cChoice) {
    if (cChoice===pChoice){
        console.log("It's a tie!");
    } else if ((cChoice==="rock" && pChoice==="paper") || (cChoice==="paper" && pChoice==="scissors") || (cChoice==="scissors" && pChoice==="rock")){
        console.log("You won!");
        playerScore++;
        updateScoreboard();
    }else{
        console.log("You lost!");
        computerScore++;
        updateScoreboard();
    };
  };


  
  buttons.forEach(button => button.addEventListener('click',playerChoice));
