//minesweeper functions
const EASY_TILES_WIDTH = 8;
const EASY_TILES_HEIGHT = 10;
const EASY_MINES = 20;
let remianingMineCount = 0;
var floodFill;

window.onload = function() {
    newGame();
}

function newGame() {
    generateTiles();
    generateMines();
}

function generateTiles() {
    floodFill = Array.from(Array(EASY_TILES_WIDTH), () => new Array(EASY_TILES_HEIGHT));
    for (let i = 0; i < EASY_TILES_WIDTH; i++) {
        for (let j = 0; j < EASY_TILES_HEIGHT; j++) {
            
            floodFill[i][j] = false;
            let tile = document.createElement("button");
            let idName = "tile" + i + "," + j;
            tile.id = idName;
            tile.className = "tile";
            tile.addEventListener("mousedown", clickTile);
            document.getElementById("board").appendChild(tile);
        }
    }
}

function generateMines() {
    let i = 0;
    while (i < EASY_MINES) {
        let width = getRandomInt(EASY_TILES_WIDTH);
        let height = getRandomInt(EASY_TILES_HEIGHT);
        // let tempTile = "tile" + width + "," + height;
        // console.log(tempTile);
        if (floodFill[width][height]);
        else {
            i++
            floodFill[width][height] = true;
        }
    }


}

function clickTile(){
    let tempTile = document.getElementById(this.id);
    let tileNum = this.id.substr(4);
    console.log(tileNum);
    let nums = tileNum.split(',');
    let x = nums[0];
    let y = nums[1];
    if (floodFill[x][y]) {
        tempTile.classList.add("tileBomb");
        //onGameOver();
    } else {
        tempTile.classList.add("tileClear");
        //console.log(x,y);
        //let num = findNearbyMines(x,y);
        // appendChild to change text of number
        tempTile.disabled = true;
        
        let text = document.createElement("span");
        text.className = "mineText";
        tempTile.appendChild(text);
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
    console.log(mineArray[x][y]);
    if (x < 0 || x >= mineArray.length || y < 0 || y >= mineArray[0].length ||
        mineArray[x][y]) {
    return;
    }

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

// function floodFill(x,y) {
//     let nearbyMineCount = 0;
//     //console.log(mineArray[x][y]);
//     if (x < 0 || x >= floodFill.length || y < 0 || y >= floodFill[0].length ||
//         mineArray[x][y]) {
//     return;
//     }

//     if (floodFill(x + 1, y + 1)) nearbyMineCount++;
//     if (floodFill(x - 1, y - 1)) nearbyMineCount++;
//     if (floodFill(x - 1, y + 1)) nearbyMineCount++;
//     if (floodFill(x + 1, y - 1)) nearbyMineCount++;
//     if (floodFill(x - 1, y)) nearbyMineCount++;
//     if (floodFill(x + 1, y)) nearbyMineCount++;
//     if (floodFill(x, y - 1)) nearbyMineCount++;
//     if (floodFill(x, y + 1)) nearbyMineCount++;

//     return nearbyMineCount;
// }



function onGameOver() {
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//right click stuff
// if (event.button == 0) {selectTile();console.log("left");}
// else if (event.button == 2) {flagTile();console.log("right");}