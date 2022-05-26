function computerPlay(){
    let number = Math.floor(Math.random()*3+1)
    switch(number){
        case(1):{
            return "Rock"
        }
        case(2):{
            return "Paper"
        }
        case (3):{
            return "Scissors"
        }
    }
}

console.log(computerPlay())