let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player0

// to show the Draw Game:
let count =0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// reset game
const resetGame = () =>{
    turnO = true;
    count =0;

    enabledBoxes();
    msgContainer.classList.add("hide");
}

// adding eventListener to all the boxes:
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box was clicked");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        // to remove the loop hole(problem)
        // do not change the pattern if once set (like X to O to X ....)
        // once set (either O or X) it can't be changed.

        box.disabled = true;

        count++;

        let isWinner = checkWinner();

        if(count ===9 && !isWinner){
            gameDraw();
        }
    });
});

// disabling all button when winner is declared
const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// Enalbling all button when reset button press:
const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation, winner is : ${winner}`;
    msgContainer.classList.remove("hide");

    disabledBoxes();
};

// when there is no result 
const gameDraw = () =>{
   msg.innerText = `Game Draw!`;
   msgContainer.classList.remove("hide");
   disabledBoxes();
};

function checkWinner() {
    // finding individual pattern
    for (let pattern of winPatterns) {
        // printing boxes with its position
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        // check if any position is empty 
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            // then check are all position same ?
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner!", pos1Val);

                showWinner(pos1Val);
            }
        }
    }
};

// after clicking either (reset button & newGameBtn)
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

