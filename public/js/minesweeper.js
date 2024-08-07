//minesweeper functions
const EASY_TILES_WIDTH = 5;
const EASY_TILES_HEIGHT = 5;
const EASY_MINES = 10;
let remianingMineCount = 0;
var mineArray;

window.onload = function() {
    newGame();
}

function newGame() {
    generateTiles();
    generateMines();
}

function generateTiles() {
    mineArray = Array.from(Array(EASY_TILES_WIDTH), () => new Array(EASY_TILES_HEIGHT));
    for (let i = 0; i < EASY_TILES_WIDTH; i++) {
        for (let j = 0; j < EASY_TILES_HEIGHT; j++) {
            
            mineArray[i][j] = false;
            let tile = document.createElement("button");
            let idName = "tile" + i + j;
            tile.id = idName;
            tile.className = "tile";
            tile.addEventListener("mousedown", clickTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}

function generateMines() {
    let rand = getRandomInt(2);
    let i = 0;
    while (i < EASY_MINES) {
        let width = getRandomInt(EASY_TILES_WIDTH);
        let height = getRandomInt(EASY_TILES_HEIGHT);
        //let tempTile = "tile" + width + height;
        //console.log(tempTile);
        if (mineArray[width][height]);
        else {
            i++
            mineArray[width][height] = true;
        }
    }


}

function clickTile(){
    let tempTile = document.getElementById(this.id);
    let tileNum = this.id.substr(tile01);
    let x = tileNum.charAt(4);
    let y = tileNum.charAt(5);
    if (mineArray[x][y]) {
        tempTile.classList.add("tileBomb");
        onGameOver();
    }
    else {tempTile.classList.add("tileClear");
        //let num = findNearbyMines(x,y);
        tempTile.disabled = true;
        tempTile.setValue = "2";
    }
}


function flagTile() {
    let tempTile = document.getElementById(this.id);
    tempTile.classList.add("tileFlagged");

}

function findNearbyMines(x,y) {

    mineCount = floodFill(x,y);

    return mineCount;
}

function floodFill(x,y) {
    let nearbyMineCount = 0;

    if (mineArray[x - 1][y - 1]) nearbyMineCount++;
    if (mineArray[x + 1][y - 1]) nearbyMineCount++;
    if (mineArray[x + 1][y + 1]) nearbyMineCount++;
    if (mineArray[x - 1][y + 1]) nearbyMineCount++;
    if (mineArray[x - 1][y]) nearbyMineCount++;
    if (mineArray[x + 1][y]) nearbyMineCount++;
    if (mineArray[x][y - 1]) nearbyMineCount++;
    if (mineArray[x][y + 1]) nearbyMineCount++;

    return nearbyMineCount;
}

function onGameOver() {

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//right click stuff
// if (event.button == 0) {selectTile();console.log("left");}
// else if (event.button == 2) {flagTile();console.log("right");}