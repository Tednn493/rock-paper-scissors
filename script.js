function getComputerChoice() {
    const choice= Math.floor(Math.random()*3)
    
    if ( choice === 0) {
        return "rock"
    }else if (choice == 1){
        return "paper"
    }else {
        return "scissors"
    }
}



function playRound(pChoice, cChoice) {
    if (cChoice===pChoice){
        return "It's a tie!"
    } else if (cChoice==="rock" && pChoice==="paper"){
        return "You won!"
    }else if (cChoice==="rock" && pChoice==="scissors"){
        return "You lost!"
    }else if (cChoice==="paper" && pChoice==="scissors"){
        return "You won!"
    }else if (cChoice==="paper" && pChoice==="rock"){
        return "You lost!"
    }else if (cChoice==="scissors" && pChoice==="rock"){
        return "You won!"
    }else if (cChoice==="scissors" && pChoice==="paper"){
        return "You lost!"
    }
  }

  const computerSelection = getComputerChoice();
  const playerSelection = prompt().toLowerCase();
  
  console.log(computerSelection)
  console.log(playRound(playerSelection, computerSelection));