
let Boxes = document.querySelectorAll(".Box");
let resetBtn = document.querySelector(".re-btn");
let nwBtn = document.querySelector(".nw-btn");
let mainContainer = document.querySelector(".main");
let masg = document.querySelector(".msg");


let turnO = true;   //playerX //playerO 
const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ]

    const reset = () => {
        turnO = true;
        enableBox();
        mainContainer.classList.add("hide");
    }

    Boxes.forEach((box) =>{
    box.addEventListener("click",function(){

    if(turnO){
        box.innerText = "O";
        turnO = false
       // box.disabled = true;
    }
    else{
        box.innerText = "X";
        turnO = true;
        //box.disabled = true;
    }
    box.disabled = true;

    checkWinner();
    }) 
});

const disableBox = () => {
    for ( let box of Boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for ( let box of Boxes){
        box.disabled = false;
        box.innerText = " ";
    }
}

const showWinner =( (winner) => {
    masg.innerText = `Congratulation, Winner ${winner}`;
    mainContainer.classList.remove("hide");
    disableBox();
});

const checkWinner = () =>{
    for(let pattern of winPattern){
        let posVal1 = Boxes[pattern[0]].innerText;
        let posVal2 = Boxes[pattern[1]].innerText;
        let posVal3 = Boxes[pattern[2]].innerText;

        if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if(posVal1 == posVal2 && posVal2 == posVal3){
                console.log("Winner",posVal1);
                showWinner(posVal1);
            }
        }
    }
}

nwBtn.addEventListener("click", reset);
resetBtn.addEventListener("click",reset);