let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn");
let msg_container = document.querySelector(".msg-container");
let count = 0;

let turnO = true; //playerX playerO

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let counting = () => {
    count++;
    if(count == 9){
        msg_container.classList.remove("hide");
        msg.innerHTML = `GAME DRAW`; 
        disableBoxes();  
    }
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg_container.classList.add("hide");
    count=0;
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
            
        }
        else{
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
           
        } counting();
        box.disabled = true;

        checkWinner();
        });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const show_Winner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is  ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
} 

const checkWinner = () => {
    for(let pattern of winPatterns){
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3){
            if(pos1 === pos2 && pos2 === pos3){
                show_Winner(pos1);
            }
        }
    }

}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
