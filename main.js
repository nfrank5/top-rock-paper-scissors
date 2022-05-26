function computerPlay(){
    let number = Math.floor(Math.random()*3+1)
    switch(number){
        case(1):
            return "rock"
        case(2):
            return "paper"
        case (3):
            return "scissors"
    }
}

function playRound(playerSelection, computerSelection){

    switch(true){
        case(playerSelection==="rock"&&computerSelection==="paper"):
            console.log("You Lose! Paper beats rock");
            return -1
        case(playerSelection==="rock"&&computerSelection==="rock"):
        console.log("It's a tie");
            return 0
        case(playerSelection==="rock"&&computerSelection==="scissors"):
            console.log("You Won! Rock beats scissors");
            return 1         
        case(playerSelection==="paper"&&computerSelection==="paper"):
            console.log("It's a tie");
            return 0
        case(playerSelection==="paper"&&computerSelection==="rock"):
            console.log("You Won! Paper beats rock");
            return 1
        case(playerSelection==="paper"&&computerSelection==="scissors"):
            console.log("You Lose! Scissors beats paper");
            return -1
        case(playerSelection==="scissors"&&computerSelection==="paper"):
            console.log("You Won! Scissors beats paper");
            return 1             
        case(playerSelection==="scissors"&&computerSelection==="rock"):
            console.log("You Lose! Rock beats scissors");
            return -1
        case(playerSelection==="scissors"&&computerSelection==="scissors"):
            console.log("It's a tie");
            return 0
    }
}

function getWinner(playerScore, computerScore){
    if(playerScore>computerScore){
        console.log("You won the game!");
    } else if(playerScore<computerScore){
        console.log("The computer won the game!");
    } else {
        console.log("End of Game.\nIt's a tie!");
    }


}

const OPTIONS = ["rock", "paper", "scissors"]

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    let playerPlay;
    for (let i = 0; i < 5; i++){
        
        playerPlay = prompt("Choose Rock, Paper or Scissors");
        while(!OPTIONS.includes(playerPlay.toLowerCase())){
            playerPlay = prompt("Please check the spelling.\nChoose Rock, Paper or Scissors.");
        }

        switch(playRound(playerPlay , computerPlay())){
            case(1):
                playerPoints+=1
                break;
            case(-1):
                computerPoints+=1
                break;
            case(0):
                break;
        }
        console.log(`Current score: You:${playerPoints} Computer:${computerPoints}`)
     }
     console.log(`Final score: You:${playerPoints} Computer:${computerPoints}`);
     getWinner(playerPoints, computerPoints);
}

game();