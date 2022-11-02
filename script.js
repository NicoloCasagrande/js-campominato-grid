"use strict";
const playBoard = document.querySelector('.board');
let difficult = 100;
startGame(difficult);

function startGame(difficult){
    playBoard.innerHTML = "";
    for (let i = 1; i <= difficult; i++) {
        const playNumber = document.createElement("div");
        playNumber.innerHTML = i;
        playNumber.classList.add('board__number');  
        playNumber.addEventListener("click", function(){
            this.classList.add('selected');
        });
        if(difficult === 100){
            playNumber.style.width = calc(100 % 9);
        }else if(difficult === 81){
            playNumber.style.width = 100 % 7;
        }else{
            playNumber.style.width = 100 % 7;
        }
        playBoard.append(playNumber);
    }
}

// creo la tabella con tutti i numeri





// console.log(this);
// this.classList.add();