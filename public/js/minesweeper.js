//minesweeper functions
const EASY = 5;
let remianingMineCount = 0;

window.onload = function() {
    setGame();
}

function setGame() {
    generateTiles();

}

function generateTiles() {

    for (let i = 0; i < EASY; i++) {
        for (let j = 0; j < EASY; j++) {
            let tile = document.createElement("button");
            let idName = "tile" + i + j;
            tile.id = idName;
            tile.className = "tile";
            tile.addEventListener("click", selectTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectTile(){
    let tempTile = this.id;
    
    console.log(tempTile);

    document.getElementById(tempTile).classList.add("tileBomb");

    //document.getElementById(tempTile).classList.add("tileClear");

}