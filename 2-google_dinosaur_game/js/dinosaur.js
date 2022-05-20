let player = document.querySelector("#player");
let body = document.querySelector("body");
let block = document.querySelector("#block");
let score = document.querySelector("#score");
let title = document.querySelector("#title");

let reload = () => {
    if(title.innerHTML != ""){
        location.reload();
    }
}

let jump = () => {
    if(player.classList != "jump"){
        player.classList.add("jump");
    }

    setTimeout(function(){
        player.classList.remove("jump");
        if(title.innerHTML == ""){
            score.innerHTML++;
        }
    },750)
}

let checkDead = setInterval(function(){
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(playerTop > 195 && blockLeft < 150 && blockLeft > 100){
        block.style.animation = "none";
        player.style.display = "none"
        block.style.display = "none";
        title.innerHTML = "You Died! <br> <span id='restart'>click and restart</span>"
        body.addEventListener("click",reload)
        score.innerHTML = "0";
    }
},10)