const startGameDiv = document.getElementById("startGame");
const gameBoardTable = document.getElementById("gameBoardTable");
const buttonX = document.getElementById("buttonX");
const buttonO = document.getElementById("buttonO");
const playerTurn = document.getElementById("playerTurn");
let playerOne;
let playerTwo;

buttonX.addEventListener("click", startGame);
buttonO.addEventListener("click", startGame);

window.onload = function () {
    startGame();
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
    } else if (clickedButton.id === "buttonO") {
        startGameDiv.style.display = "none";
        gameBoardTable.style.display = "table";
        playerOne = "O";
    }
}