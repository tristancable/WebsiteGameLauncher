const startGameDiv = document.getElementById("startGame");
const gameBoardTable = document.getElementById("gameBoardTable");
const buttonX = document.getElementById("buttonX");
const buttonO = document.getElementById("buttonO");
const playerTurn = document.getElementById("playerTurn");
const resetGame = document.getElementById("resetGame");
const buttons = [
    document.getElementById("button1"),
    document.getElementById("button2"),
    document.getElementById("button3"),
    document.getElementById("button4"),
    document.getElementById("button5"),
    document.getElementById("button6"),
    document.getElementById("button7"),
    document.getElementById("button8"),
    document.getElementById("button9")
];
let playerOne;
let playerTwo;
let turn;
let turnLetter;
let turnText;

buttonX.addEventListener("click", startGame);
buttonO.addEventListener("click", startGame);
resetGame.addEventListener("click", refreshPage);
buttons.forEach(button => button.addEventListener("click", onClick));

window.onload = function () {
    startGame();
    gameLogic();
}

function getRandomPlayer() {
    turn = Math.floor((Math.random() * 2) + 1);
    if (turn == 1) {
        turnLetter = playerOne;
    } else if (turn == 2) {
        turnLetter = playerTwo;
    }
    turnText = "Player " + turn + "'s turn";
    return turn;
}

function startGame(event) {
    let clickedButton;

    if (event && event.target) {
        clickedButton = event.target;
    }

    if (clickedButton.id === "buttonX") {
        startGameDiv.style.display = "none";
        gameBoardTable.style.display = "table";
        playerOne = "X";
        playerTwo = "O";
    } else if (clickedButton.id === "buttonO") {
        startGameDiv.style.display = "none";
        gameBoardTable.style.display = "table";
        playerOne = "O";
        playerTwo = "X";
    }

    getRandomPlayer();
    playerTurn.innerText = turnText;
    buttons.forEach(button => button.innerText = "");
}

function gameLogic(tempButton) {
    if (!tempButton.innerText) {
        tempButton.innerText = turnLetter;

        if (winCondition()) {
            playerTurn.innerText = "Player " + turn + " wins!";
            resetGame.style.display = "block";
            disableBoard();
            return;
        } else if (isDraw()) {
            playerTurn.innerText = "It's a draw!";
            resetGame.style.display = "block";
            return;
        }

        if (turn === 1) {
            turn = 2;
            turnLetter = playerTwo
            turnText = "Player " + turn + "'s turn";
        } else if (turn === 2) {
            turn = 1;
            turnLetter = playerOne;
            turnText = "Player " + turn + "'s turn";
        }

        playerTurn.innerText = turnText;
    }
}

function onClick() {
    let tempButton = document.getElementById(this.id);
    gameLogic(tempButton);
}

// ChatGPT was used to help with the win condition function
function winCondition() {
    const winCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];

    for (let combination of winCombinations) {
        const [a, b, c] = combination;
        if (buttons[a].innerText &&
            buttons[a].innerText === buttons[b].innerText &&
            buttons[a].innerText === buttons[c].innerText) {
            return true;
        }
    }
    return false;
}

function isDraw() {
    return buttons.every(button => button.innerText !== "") && !winCondition();
}

function disableBoard() {
    buttons.forEach(button => button.removeEventListener("click", onClick));
}

function refreshPage() {
    window.location.reload();
}