//minesweeper functions
const EASY_TILES_WIDTH = 8;
const EASY_TILES_HEIGHT = 10;
const EASY_MINES = 20;

const MEDIUM_TILES_WIDTH = 15;
const MEDIUM_TILES_HEIGHT = 20;
const MEDIUM_MINES = 40;

const HARD_TILES_WIDTH = 20;
const HARD_TILES_HEIGHT = 25;
const HARD_MINES = 99;

let difficulty = 0;
let remianingMineCount = 0;
var floodFill;

window.onload = function () {
    newGame();
}

function newGame() {
    generateTiles();
    generateMines();
}

function resetGame() {
    let dropDown = document.getElementById("difficulty");
    difficulty = dropDown.value;
    document.getElementById("board").remove();
    newGame();
}

function generateTiles() {
    if (difficulty == 0) {
        createBoard("easyBoard");
        generateTilesDifficulty(EASY_TILES_WIDTH, EASY_TILES_HEIGHT);
    }
    else if (difficulty == 1) {
        createBoard("mediumBoard");
        generateTilesDifficulty(MEDIUM_TILES_WIDTH, MEDIUM_TILES_HEIGHT);
    }
    else if (difficulty == 2) {
        createBoard("hardBoard");
        generateTilesDifficulty(HARD_TILES_WIDTH, HARD_TILES_HEIGHT);
    }
}

function createBoard(strDifficulty) {
    let board = document.createElement("div");
    let idName = "board";
    board.id = idName;
    board.className = strDifficulty;
    document.getElementById("boardTemp").appendChild(board);
}

function generateTilesDifficulty(difficultyWidth, difficultyHeight) {
    floodFill = Array.from(Array(difficultyWidth), () => new Array(difficultyHeight));
    for (let i = 0; i < difficultyWidth; i++) {
        for (let j = 0; j < difficultyHeight; j++) {

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
    if (difficulty == 0) {
        while (i < EASY_MINES) {
            let width = getRandomInt(EASY_TILES_WIDTH);
            let height = getRandomInt(EASY_TILES_HEIGHT);
            if (floodFill[width][height]);
            else {
                i++
                floodFill[width][height] = true;
            }
        }
    } else if (difficulty == 1) {
        while (i < MEDIUM_MINES) {
            let width = getRandomInt(MEDIUM_TILES_WIDTH);
            let height = getRandomInt(MEDIUM_TILES_HEIGHT);
            if (floodFill[width][height]);
            else {
                i++
                floodFill[width][height] = true;
            }
        }
    } else if (difficulty == 2) {
        while (i < HARD_MINES) {
            let width = getRandomInt(HARD_TILES_WIDTH);
            let height = getRandomInt(HARD_TILES_HEIGHT);
            if (floodFill[width][height]);
            else {
                i++
                floodFill[width][height] = true;
            }
    }
    }


}

function clickTile() {
    let tempTile = document.getElementById(this.id);
    let tileNum = this.id.substr(4);
    console.log(tileNum);
    let nums = tileNum.split(',');
    let x = nums[0];
    let y = nums[1];
    if (floodFill[x][y]) {
        tempTile.classList.add("tileBomb");
        onGameOver();
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

function findNearbyMines(x, y) {


    mineCount = floodFill(x, y);
    return mineCount;
}

function floodFill(x, y) {
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
    let tempTile;

    for (let i = 0; i < floodFill.length; i++) {
        for (let j = 0; j < floodFill[i].length; j++) {
            tempTile = document.getElementById("tile" + i + "," + j);
            tempTile.disabled = true;
            if (floodFill[i][j]) tempTile.classList.add("tileBomb");
        }
    }

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//right click stuff
// if (event.button == 0) {selectTile();console.log("left");}
// else if (event.button == 2) {flagTile();console.log("right");}