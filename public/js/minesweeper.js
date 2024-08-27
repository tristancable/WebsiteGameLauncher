const EASY_TILES_WIDTH = 10;
const EASY_TILES_HEIGHT = 8;
const EASY_MINES = 10;

const MEDIUM_TILES_WIDTH = 20;
const MEDIUM_TILES_HEIGHT = 15;
const MEDIUM_MINES = 40;

const HARD_TILES_WIDTH = 25;
const HARD_TILES_HEIGHT = 20;
const HARD_MINES = 99;

let difficulty = 0;
let mineCount = 0;
var mineArray;
let firstClick = true;
var a = document.getElementById("timer");

// When you load the minesweeper page
window.onload = function () {
    timer = new Stopwatch(a);
    resetGame();
}

// New game, is called from resetGame() <-- which also means the new Game Button
function newGame() {
    generateTiles();
    generateMines();
}

// will set size of the game to the appropiate size for the difficulty, and the mine count, and resets the values, including the timer
function resetGame() {
    let dropDown = document.getElementById("difficulty");
    let mineCountTxt = document.getElementById("mineCount");
    difficulty = dropDown.value;
    let barWidth;
    if (difficulty == 0) {
        mineCount = EASY_MINES;
        barWidth = "304px";
    } else if (difficulty == 1) {
        barWidth = "604px";
        mineCount = MEDIUM_MINES;
    } else if (difficulty == 2) {
        barWidth = "754px";
        mineCount = HARD_MINES;
    }
    mineCountTxt.innerText = mineCount;
    if (document.getElementById("board")) document.getElementById("board").remove();
    document.getElementById("topBar").style.width = barWidth;

    firstClick = true;
    timer.stop();
    timer.reset();
    newGame();
}

// calls function to generate tiles depending on the difficulty
function generateTiles() {
    createBoard();
    if (difficulty == 0) generateTilesDifficulty(EASY_TILES_WIDTH, EASY_TILES_HEIGHT);
    else if (difficulty == 1) generateTilesDifficulty(MEDIUM_TILES_WIDTH, MEDIUM_TILES_HEIGHT);
    else if (difficulty == 2) generateTilesDifficulty(HARD_TILES_WIDTH, HARD_TILES_HEIGHT);
}

// creates the board where the tiles will be placed
function createBoard() {
    let board = document.createElement("div");
    board.id = "board";
    document.getElementById("boardTemp").appendChild(board);
}

// makes an 2d array with the current difficulty's size, for loops through it creating each tile, with a unique id
//      assigning it the correct class and an eventlistener, finishing it with appending it to the board
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

// will generate the mines into random tiles depending on the difficulty,
// I have a different 2D array with same size but is boolean with if bomb
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
            let width = getRandomInt(HARD_TILES_WIDTH);
            let height = getRandomInt(HARD_TILES_HEIGHT);
            if (mineArray[width][height]);
            else {
                i++
                mineArray[width][height] = true;
            }
        }
    }
}

// when you click on a tile it will check if it's the first click, it will not be a bomb and will clear a chunk
// left click for clearing, right for setting flags
// if click bomb gameOver(), else clear tile set text to nearby bomb count
function clickTile(event) {
    if (event.button === 0 || !firstClick) { //left click
        let tempTile = document.getElementById(this.id);
        let tileNum = this.id.substr(4);
        let nums = tileNum.split(',');
        let x = nums[0];
        let y = nums[1];
        if (firstClick) {
            while (mineArray[x][y] || checkNearby(x, y) != 0) {
                resetGame();
            }
            timer.start();
        }
        if (event.button === 0) { //left click
            if (mineArray[x][y] && !tempTile.classList.contains("tileFlagged")) {
                tempTile.classList.add("tileBomb");
                onGameOver();
            } else if (!tempTile.classList.contains("tileFlagged")) {
                let num = checkNearby(x, y);
                if (num == 0) {
                    tempTile.innerText = "";
                    clearChunk(x, y);
                    firstClick = false; // cant click bomb 1st click
                } else {
                    tempTile.classList.add("tileClear");
                    tempTile.innerText = num;
                }
                tempTile.disabled = true;
            }
        } else if (event.button === 2) { //right click
            flagTile(tempTile);
        }
    }
    if (mineCount === 0) checkWin();
}

// sets or unsets flag tiles
function flagTile(tempTile) {
    if (tempTile.classList.contains("tileFlagged")) {
        tempTile.classList.remove("tileFlagged");
        mineCount++;
    } else {
        tempTile.classList.add("tileFlagged");
        mineCount--;
    }
    let text = document.getElementById("mineCount");
    text.innerText = mineCount;
}

//checks each nearby tile if bomb nearbyMineCount++ returns that value
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

// Will clear the whole chunk, flood fills until it clears a number then checks other directions
function clearChunk(x, y) {
    var fillStack = [];
    let tempTile;

    fillStack.push([x, y]);
    while (fillStack.length > 0) {
        var [cx, cy] = fillStack.pop(); //current x, (cx)
        cx = parseInt(cx);
        cy = parseInt(cy);

        if (cx < 0 || cx >= mineArray.length || cy < 0 || cy >= mineArray[0].length || mineArray[cx][cy])
            continue;

        tempTile = document.getElementById("tile" + cx + "," + cy);
        if (tempTile.classList.contains("tileClear")) continue;

        let nearby = checkNearby(cx, cy);
        tempTile.classList.add("tileClear");
        tempTile.disabled = true;
        if (nearby == 0) tempTile.innerText = "";
        else {
            tempTile.innerText = nearby;
            continue;
        }

        fillStack.push([cx - 1, cy + 1]);
        fillStack.push([cx - 1, cy - 1]);
        fillStack.push([cx + 1, cy - 1]);
        fillStack.push([cx + 1, cy + 1]);
        fillStack.push([cx, cy + 1]);
        fillStack.push([cx, cy - 1]);
        fillStack.push([cx + 1, cy]);
        fillStack.push([cx - 1, cy]);
    }
}

//you lose, stops timer etc.
function onGameOver() {
    timer.stop();
    let tempTile;
    for (let i = 0; i < mineArray.length; i++) {
        for (let j = 0; j < mineArray[i].length; j++) {
            tempTile = document.getElementById("tile" + i + "," + j);
            tempTile.disabled = true;
            if (mineArray[i][j] && tempTile.classList.contains("tileFlagged"))
                tempTile.classList.add("tileFlagBomb"); // TODO, flagged bombs, nonbomb flag add visuals
            else if (mineArray[i][j]) tempTile.classList.add("tileBomb");
        }
    }
}

// if flagCount = mineCount it will check if you win
function checkWin() {
    let flagCount = 0;
    let tempTile;
    for (let i = 0; i < mineArray.length; i++) {
        for (let j = 0; j < mineArray[i].length; j++) {
            tempTile = document.getElementById("tile" + i + "," + j);
            if (mineArray[i][j] && tempTile.classList.contains("tileFlagged")) {
                flagCount++;
            }
        }
    }
    if (difficulty == 0 && flagCount != EASY_MINES) return;
    else if (difficulty == 1 && flagCount != MEDIUM_MINES) return;
    else if (difficulty == 2 && flagCount != HARD_MINES) return;

    for (let i = 0; i < mineArray.length; i++) {
        for (let j = 0; j < mineArray[i].length; j++) {
            tempTile = document.getElementById("tile" + i + "," + j);
            tempTile.disabled = true;
            if (!mineArray[i][j]) {
                tempTile.disabled = true;
                tempTile.classList.add("tileClear");
                if (checkNearby(i, j) != 0) tempTile.innerText = checkNearby(i, j);
            }
        }
    }
    timer.stop();
}

//checks the array if x,y are bombs, returns boolean
function findMines(newX, newY) {
    if (newX < 0 || newX >= mineArray.length || newY < 0 || newY >= mineArray[0].length)
        return false;
    if (mineArray[newX][newY]) return true;
    else return false;
}

function getRandomInt(max) { return Math.floor(Math.random() * max); }


//found a cool example of a stopwatch online
// https://stackoverflow.com/questions/20318822/how-to-create-a-stopwatch-using-javascript
var Stopwatch = function (elem, options) {
    var timer = createTimer(),
        offset,
        clock,
        interval;

    // default options
    options = options || {};
    options.delay = options.delay || 1;
    // append elements     
    elem.appendChild(timer);
    // initialize
    reset();

    function createTimer() { return document.createElement("span"); }

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

    function render() { timer.innerHTML = clock / 1000; }

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