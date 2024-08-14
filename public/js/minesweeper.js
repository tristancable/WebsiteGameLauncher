//minesweeper functions
const EASY_TILES_WIDTH = 10;
const EASY_TILES_HEIGHT = 8;
const EASY_MINES = 20;

const MEDIUM_TILES_WIDTH = 20;
const MEDIUM_TILES_HEIGHT = 15;
const MEDIUM_MINES = 40;

const HARD_TILES_WIDTH = 25;
const HARD_TILES_HEIGHT = 20;
const HARD_MINES = 99;

let difficulty = 0;
let remianingMineCount = 0;
var mineArray;
let firstClick = false;

var a = document.getElementById("timer");

window.onload = function () {
    timer = new Stopwatch(a);
    resetGame();
}

function newGame() {
    generateTiles();
    generateMines();
}

function resetGame() {
    let dropDown = document.getElementById("difficulty");
    let tempMineCount = document.getElementById("mineCount");
    difficulty = dropDown.value;
    let barWidth;
    if (difficulty == 0) {
        tempMineCount.innerText = "Mines: " + EASY_MINES;
        barWidth = "250px";
    } else if (difficulty == 1) {
        barWidth = "500px";
        tempMineCount.innerText = "Mines: " + MEDIUM_MINES;
    } else if (difficulty == 2) {
        barWidth = "625px";
        tempMineCount.innerText = "Mines: " + HARD_MINES;
    }
    if (document.getElementById("board")) document.getElementById("board").remove();
    document.getElementById("topBar").style.width = barWidth;

    firstClick = false;
    timer.stop();
    timer.reset();
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
    mineArray = Array.from(Array(difficultyWidth), () => new Array(difficultyHeight));
    for (let j = 0; j < difficultyHeight; j++) {
        for (let i = 0; i < difficultyWidth; i++) {

            mineArray[i][j] = false;
            let tile = document.createElement("button");
            let idName = "tile" + i + "," + j;
            tile.id = idName;
            tile.className = "tile";
            tile.innerText = "";
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
            if (mineArray[width][height]);
            else {
                i++
                mineArray[width][height] = true;

                tempTile = document.getElementById("tile" + width + "," + height);
                tempTile.classList.add("tileBomb");
            }
        }
    } else if (difficulty == 1) {
        while (i < MEDIUM_MINES) {
            let width = getRandomInt(MEDIUM_TILES_WIDTH);
            let height = getRandomInt(MEDIUM_TILES_HEIGHT);
            if (mineArray[width][height]);
            else {
                i++
                mineArray[width][height] = true;
            }
        }
    } else if (difficulty == 2) {
        while (i < HARD_MINES) {
            let width  = getRandomInt(HARD_TILES_WIDTH);
            let height= getRandomInt(HARD_TILES_HEIGHT);
            if (mineArray[width][height]);
            else {
                i++
                mineArray[width][height] = true;
            }
        }
    }
                    // consol log HERE ---------------------------
                    console.log("mine,",mineArray);
}


function clickTile() {
    if (!firstClick) timer.start();
    let tempTile = document.getElementById(this.id);
    let tileNum = this.id.substr(4);
    console.log("myClick",tileNum);
    let nums = tileNum.split(',');
    let x = nums[0];
    let y = nums[1];
    if (mineArray[x][y]) {
        tempTile.classList.add("tileBomb");
        onGameOver();
    } else {
        tempTile.classList.add("tileClear");
        //console.log(x,y);
        let num = checkNearby(x,y);
        
        tempTile.innerText = num;
        tempTile.disabled = true;

    }
    firstClick = true; // cant click bomb 1st click
}


// function flagTile() {
//     let tempTile = document.getElementById(this.id);
//     tempTile.classList.add("tileFlagged");

// }


function checkNearby(x, y) {
    let nearbyMineCount = 0;

    x = parseInt(x);
    y = parseInt(y);
    
    
    if (findMines(x - 1, y + 1)) nearbyMineCount++;
    if (findMines(x - 1, y - 1)) nearbyMineCount++;
    if (findMines(x + 1, y - 1)) nearbyMineCount++;
    if (findMines(x + 1, y + 1)) nearbyMineCount++;
    if (findMines(x - 1, y)) nearbyMineCount++;
    if (findMines(x + 1, y)) nearbyMineCount++;
    if (findMines(x, y - 1)) nearbyMineCount++;
    if (findMines(x, y + 1)) nearbyMineCount++;
    

    return nearbyMineCount;
}


function findMines(newX, newY) {
    if (newX < 0 || newX >= mineArray.length || newY < 0 || newY >= mineArray[0].length) {
        return false;
    }

    if (mineArray[newX][newY]) return true;
    else return false;
}

function findMinesTest(newX, newY) {
    console.log(newX,newY);
    if (newX < 0 || newX >= mineArray.length || newY < 0 || newY >= mineArray[0].length) {
        return;
    }

    if (mineArray[newX][newY]){ 
        console.log("mineNear",newX,newY);
        return true;}
    else return false;
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
    timer.stop();
    let tempTile;
    for (let i = 0; i < mineArray.length; i++) {
        for (let j = 0; j < mineArray[i].length; j++) {
            tempTile = document.getElementById("tile" + i + "," + j);
            tempTile.disabled = true;
            if (mineArray[i][j]) tempTile.classList.add("tileBomb");
        }
    }

}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//right click stuff
// if (event.button == 0) {selectTile();console.log("left");}
// else if (event.button == 2) {flagTile();console.log("right");}






//found a cool example of a stopwatch online
// https://stackoverflow.com/questions/20318822/how-to-create-a-stopwatch-using-javascript

var Stopwatch = function (elem, options) {
    var timer = createTimer(),
        offset,
        clock,
        interval;

    // startButton = createButton("start", start),
    // stopButton = createButton("stop", stop),
    // resetButton = createButton("reset", reset),

    // default options
    options = options || {};
    options.delay = options.delay || 1;

    // append elements     
    elem.appendChild(timer);
    // elem.appendChild(startButton);
    // elem.appendChild(stopButton);
    // elem.appendChild(resetButton);

    // initialize
    reset();

    function createTimer() {
        return document.createElement("span");
    }

    function start() {
        if (!interval) {
            offset = Date.now();
            interval = setInterval(update, options.delay);
        }
    }

    function stop() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    function reset() {
        clock = 0;
        render(0);
    }

    function update() {
        clock += delta();
        render();
    }

    function render() {
        timer.innerHTML = clock / 1000;
    }

    function delta() {
        var now = Date.now(),
            d = now - offset;

        offset = now;
        return d;
    }

    // public API
    this.start = start;
    this.stop = stop;
    this.reset = reset;
};