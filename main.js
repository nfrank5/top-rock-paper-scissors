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
            return "You Lose! Paper beats rock"
        
        case(playerSelection==="rock"&&computerSelection==="rock"):
            return "It's a tie"
           
        case(playerSelection==="rock"&&computerSelection==="scissors"):
            return "You Won! Rock beats scissors"
             
        case(playerSelection==="paper"&&computerSelection==="paper"):
            return "It's a tie"
                
        case(playerSelection==="paper"&&computerSelection==="rock"):
            return "You Won! Paper beats rock"
                
        case(playerSelection==="paper"&&computerSelection==="scissors"):
            return "You Lose! Scissors beats paper"
                
        case(playerSelection==="scissors"&&computerSelection==="paper"):
            return "You Won! Scissors beats paper"
               
        case(playerSelection==="scissors"&&computerSelection==="rock"):
            return "You Lose! Rock beats scissors"
                
        case(playerSelection==="scissors"&&computerSelection==="scissors"):
            return "It's a tie"
    }
}

const playerSelection = computerPlay();
const computerSelection = computerPlay();


console.log(computerPlay())
console.log(playRound(playerSelection, computerSelection));
