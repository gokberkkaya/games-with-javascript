let block = document.querySelector("#block");
let body = document.querySelector("body");
let hole = document.querySelector("#hole");
let character = document.querySelector("#character");
let message = document.querySelector("#message");
let score = document.querySelector("#score");
let jumping = 0;
let scoreNumber = 0;

// yeniden baslatmak icin
let reload = () => {
    location.reload();
}

// blocklarin icindeki deliklerin konumunu rastgele degistirme
// animationiteration: css'teki animationu döndürür ve döngüden her gelen için:
hole.addEventListener('animationiteration', () => {
    let random = Math.random()*320 + 150; // delik en altta olamayacagi icin +150
    hole.style.bottom = random + "px";
    scoreNumber++;
    score.innerHTML = scoreNumber;
})

// yercekimini ayarlayalim
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping == 0){
        character.style.top = (characterTop + 3) + "px";
    }

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeBottom = parseInt(window.getComputedStyle(hole).getPropertyValue("bottom"));

    let cBottom = 500 - characterTop;

    if((characterTop > 485) // cercevenin zeminine degerse
        || ((blockLeft < 65) && (blockLeft > -5) // block'un sol disinda veya sag disina carparsa
             && ((cBottom < holeBottom - 140) || (cBottom > holeBottom))) // deligin asagisinda veya yukarisindaysa
      ){
        // oyunu bitir
        character.style.display = "none";
        block.style.display = "none";
        hole.style.display = "none";
        score.style.display = "none";
        message.innerHTML = `score: ${scoreNumber}<br/><br/><br/> click and restart`;
        message.style.display = "block";

        body.addEventListener("click",reload);
    }

},10)

function jump(){
    jumping = 1;
    let jumpCount = 0;

    let jumpInterval = setInterval(function(){
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

        // oyun alaninin ustune cikmasin(sınır = 10px) 
        // click olduktan sonra max 1.5 saniye yukari ciksin 
        if((characterTop>10) && (jumpCount<15)){                                       
            character.style.top = (characterTop-5) + "px"; // 5px yukari zipla
        }
        if(jumpCount > 20){  //eger 2 saniye boyunca click olmazsa yercekimi etki etsin ve dusmeye baslasin
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    },10);
    
}

