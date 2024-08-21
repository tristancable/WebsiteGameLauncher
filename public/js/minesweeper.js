//minesweeper functions
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
    let mineCountTxt = document.getElementById("mineCount");
    difficulty = dropDown.value;
    let barWidth;
    if (difficulty == 0) {
        mineCount = EASY_MINES;
        barWidth = "254px";  
    } else if (difficulty == 1) {
        barWidth = "504px";
        mineCount = MEDIUM_MINES;
    } else if (difficulty == 2) {
        barWidth = "629px";
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
                    //console.log("mine,",mineArray);
}


function clickTile(event) {
    if (event.button === 0 || !firstClick) { //left click

    if (firstClick) timer.start();
    let tempTile = document.getElementById(this.id);
    let tileNum = this.id.substr(4);
    console.log("myClick",tileNum);
    let nums = tileNum.split(',');
    let x = nums[0];
    let y = nums[1];
    if (firstClick) {
        while (mineArray[x][y] || checkNearby(x,y) != 0) {
            resetGame();
            if (firstClick) timer.start();
        }
    }
    if (event.button === 0) {
    
        if (mineArray[x][y] && !tempTile.classList.contains("tileFlagged")) {
            tempTile.classList.add("tileBomb");
            onGameOver();
        } else if (!tempTile.classList.contains("tileFlagged")) {
            let num = checkNearby(x,y);

            if (num == 0) {
                tempTile.innerText = "";
                clearChunk(x,y);
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
}


function flagTile(tempTile) {
    
    if (tempTile.classList.contains("tileFlagged")) {
        tempTile.classList.remove("tileFlagged");
        mineCount++;
    } else {
        tempTile.classList.add("tileFlagged");
        mineCount--;
    }
    console.log(mineCount);
    let text = document.getElementById("mineCount");
    text.innerText = mineCount;
}


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

function clearChunk(x, y) {
    var fillStack = [];
    let tempTile;

    fillStack.push([x,y]);

    
    while (fillStack.length > 0) {
        var [cx,cy] = fillStack.pop();

        cx = parseInt(cx);
        cy = parseInt(cy);
        
        if (checkValidRowCol(cx,cy))
            continue;

        tempTile = document.getElementById("tile" + cx + "," + cy);
        if (tempTile.classList.contains("tileClear"))
            continue;
        

        let nearby = checkNearby(cx,cy);
        tempTile.classList.add("tileClear");
        tempTile.disabled = true;
        if (nearby == 0) {
            tempTile.innerText = "";
        } else {
            tempTile.innerText = nearby;
            continue;
        }
        
        fillStack.push([cx, cy + 1]);
        fillStack.push([cx, cy - 1]);
        fillStack.push([cx + 1, cy]);
        fillStack.push([cx - 1, cy]);
    }
}

function floodFillRemaster(x,y, tempTile) {
    if (x < 0 || x >= mineArray.length || y < 0 || y >= mineArray[0].length || mineArray[x][y] || tempTile.classList.contains("tileClear"))
        return;


}


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
    if (checkValidRowCol(newX,newY))
        return false;

    if (mineArray[newX][newY]) return true;
    else return false;
}


function onGameOver() {
    timer.stop();
    let tempTile;
    for (let i = 0; i < mineArray.length; i++) {
        for (let j = 0; j < mineArray[i].length; j++) {
            tempTile = document.getElementById("tile" + i + "," + j);
            tempTile.disabled = true;
            if (mineArray[i][j] && tempTile.classList.contains("tileFlagged"))  // TODO, flagged bombs, nonbomb flag visuals
                tempTile.classList.add("tileFlagBomb");
            else if (mineArray[i][j]) tempTile.classList.add("tileBomb");
        }
    }

}

function checkValidRowCol(x,y) {
        return (x < 0 || x >= mineArray.length || y < 0 || y >= mineArray[0].length || mineArray[x][y]);
}

function findMines(newX, newY) {
    if (newX < 0 || newX >= mineArray.length || newY < 0 || newY >= mineArray[0].length) {
        return false;
    }

    if (mineArray[newX][newY]) return true;
    else return false;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}





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