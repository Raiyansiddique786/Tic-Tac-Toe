let boxes = document.querySelectorAll (".box");
let restBtn = document.querySelector("#reset-btn");

let turnO = true ; // player0

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// adding eventListener to all the boxes:
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        // to remove the loop hole(problem)
        // do not change the pattern if once set (like X to O to X ....)
        // once set (either O or X) it can't be changed.

        box.disabled = true;

        checkWinner();
    });
});



