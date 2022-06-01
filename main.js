let playerPoints = 0;
let computerPoints = 0;
let currentImage = null;
const buttons = document.querySelectorAll("button");
const message = document.querySelector(".message");
const images = document.querySelectorAll("img");
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".player-score")

buttons.forEach(button => button.addEventListener("click", playGame))
images.forEach(image => image.addEventListener('transitionend', removeTransition))


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

function round(playerSelection, computerSelection){
    switch(true){
        case(playerSelection==="rock"&&computerSelection==="paper"):
            message.textContent = "You Lose! Paper beats rock";
            return -1
        case(playerSelection==="rock"&&computerSelection==="scissors"):
            message.textContent = "You Won! Rock beats scissors";
            return 1         
        case(playerSelection==="paper"&&computerSelection==="rock"):
            message.textContent = "You Won! Paper beats rock";
            return 1
        case(playerSelection==="paper"&&computerSelection==="scissors"):
            message.textContent = "You Lose! Scissors beats paper";
            return -1
        case(playerSelection==="scissors"&&computerSelection==="paper"):
            message.textContent = "You Won! Scissors beats paper";
            return 1             
        case(playerSelection==="scissors"&&computerSelection==="rock"):
            message.textContent = "You Lose! Rock beats scissors";
            return -1
        default:
            message.textContent = "It's a tie";
            return 0
    }
}

function getWinner(playerScore, computerScore){
    if(playerScore>=5){
        message.textContent = "You won the game!";
       
    } else if(computerScore>=5){
        message.textContent = "The computer won the game!";
    }
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function reload(){
    window.location.reload();
}

function playGame(e){
    currentImage = document.querySelector(`img[class~='${e.target.classList.value}']`)
    currentImage.classList.add('playing');
    let playerPlay = e.target.classList.value;
    switch(round(playerPlay , computerPlay())){
        case(1):
            playerPoints+=1
            break;
        case(-1):
            computerPoints+=1
            break; 
        case(0):
            break;
    }
    computerScore.textContent = computerPoints;
    playerScore.textContent = playerPoints;
    getWinner(playerPoints,computerPoints)
    if(computerPoints>=5||playerPoints>=5){
        buttons.forEach(button => button.setAttribute("disabled",""));
        const reloadButton = document.createElement("button");
        message.appendChild(reloadButton);
        reloadButton.textContent = "New Game?"
        reloadButton.addEventListener("click", reload);
    }
    
}