let options = ["assets/rockPc.png","assets/paperPc.png","assets/scrissorsPc.png"];

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scrissors = document.getElementById("scrissors");
let computerTurn = document.getElementById("computerTurn");
let getResult = document.getElementById("result");
let pcScore = document.querySelector(".pcScore");
let yourScore = document.querySelector(".youScore");

rock.onclick = choose;
paper.onclick = choose;
scrissors.onclick = choose;

function choose(){
    let userChoose = this.dataset.id;
    let pc = randomNumber();
    let result;
    rock.className = "hands"
    paper.className = "hands"
    scrissors.className = "hands"

    if(userChoose == pc){
        result = "-Scoreless-";
        getResult.className = ""
    }
    else if(userChoose == 0 && pc == 1){
        result = "You Lose!"
        pcScore.innerHTML++;
        rock.className = "hands lose"
        getResult.className = "lose"
    }
    else if(userChoose == 0 && pc == 2){
        result = "You Win!"
        yourScore.innerHTML++;
        rock.className = "hands win"
        getResult.className = "win"
    }
    else if(userChoose == 1 && pc == 0){
        result = "You Win!"
        yourScore.innerHTML++;
        paper.className = "hands win"
        getResult.className = "win"
    }
    else if(userChoose == 1 && pc == 2){
        result = "You Lose!"
        pcScore.innerHTML++;
        paper.className = "hands lose"
        getResult.className = "lose"
    }
    else if(userChoose == 2 && pc == 0){
        result = "You Lose!"
        pcScore.innerHTML++;
        scrissors.className = "hands lose"
        getResult.className = "lose"
    }
    else if(userChoose == 2 && pc == 1){
        result = "You Win!"
        yourScore.innerHTML++;
        scrissors.className = "hands win"
        getResult.className = "win"
    }

    getResult.innerHTML = result;
}

function randomNumber(){
    let number = Math.round(Math.random()*2);
    computerTurn.src = options[number];
    computerTurn.className = "pcChoose";
    return number;
}