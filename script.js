"use strict";
const playBoard = document.querySelector('.board');

const playButton = document.querySelector('button');
const playDifficult = document.querySelector('select');


let difficult = "easy";
let maxNumber = 100;
startGame(difficult);

function startGame(difficult){
    playBoard.innerHTML = "";

    if(difficult === "easy"){
        maxNumber = 100;
    }else if(difficult === "medium"){
        maxNumber = 81;
    }else{
        maxNumber = 49;
    }
    
    for (let i = 1; i <= maxNumber; i++) {
        const playNumber = document.createElement("div");
        playNumber.innerHTML = i;
        playNumber.classList.add('board__number');  
        playNumber.addEventListener("click", function(){
            this.classList.add('selected');
        });

        if(difficult === "easy"){
            playNumber.style.width = "calc(100%/10)";
            playNumber.style.height = "calc(100%/10)";
        }else if(difficult === "medium"){
            playNumber.style.width = "calc(100%/9)";
            playNumber.style.height = "calc(100%/9)";
        }else{
            playNumber.style.width = "calc(100%/7)";
            playNumber.style.height = "calc(100%/7)";
        }
        console.log(playNumber);
        playBoard.append(playNumber);
    }
}

playButton.addEventListener("click", function(){
    difficult = playDifficult.value;
    startGame(difficult);
    console.log(difficult);
});



// creo la tabella con tutti i numeri





// console.log(this);
// this.classList.add();