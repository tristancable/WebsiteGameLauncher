let HPMario = 0;
let MarioX = 0;
let MarioY = 0;
let HPVivian = 0;
let VivianX = 0;
let VivianY = 0;

let Enemy1 = "";
let HPEnemy1 = 0;
let sizeEnemy1 = 50;
let Enemy2 = "";
let HPEnemy2 = 0;
let sizeEnemy2 = 50;
let Enemy3 = "";
let HPEnemy3 = 0;
let sizeEnemy3 = 50;

async function wait(milliseconds) // Uses async to wait the inputted amount of milliseconds
{
    await new Promise(r => setTimeout(r, milliseconds));
}

function start()
{
    let splash = document.getElementById("splash");

    splash.addEventListener("transitionend", () =>
    {
        document.getElementById("bgm").play();
        splash.remove();
    });

    splash.classList.add("hide");
    setGame();
}

function enemyGen(enemyPool, whichEnemy)
{
    switch(enemyPool) // Please for the love of god if I forget to add breaks I will actually explode
    {
        case "Gloomba":
            break;
    }
}

function enemyGen(enemyNum, whichEnemy)
{
    switch(enemyNum)
    {
        case 1: // Enemy 1: Basic Gloomba
            break;
        case 2: // Enemy 2: Paragloomba
            break;
        case 3: // Enemy 3: Spiky Gloomba
            break;
    }
}

async function entrance(getId, howFar)
{
    document.getElementById(getId).style.visibility = "visible";
    let i = 0;
    while(i <= howFar)
    {
        
        document.getElementById(getId).style.left = `${i}px`;
        i = i + 9;
        await wait(10);
    }
}

async function hop(getId, hops)
{
    var upDistance = getComputedStyle(document.getElementById(getId))
        .getPropertyValue('top');
    var upDistance = upDistance.replace(/\D/g,'');
    for(let index = 0; index < 2; index++)
    {
        let i = upDistance;
        while(i >= upDistance - 40)
        {
            document.getElementById(getId).style.top = `${i}px`;
            i = i - 10;
            await wait(10);
        }
        while(i >= upDistance - 50)
        {
            document.getElementById(getId).style.top = `${i}px`;
            i = i - 2;
            await wait(10);        
        }
        while(i <= upDistance - 40)
            {
                
            document.getElementById(getId).style.top = `${i}px`;
            i = i + 2;
            await wait(10);            
        }
        while(i <= upDistance)
        {
            document.getElementById(getId).style.top = `${i}px`;
            i = i + 10;
            await wait(10);
        }
    }
    document.getElementById(getId).style.top = `${upDistance}px`
}

async function unveil()
{
    let i = 40;
    document.getElementById("curtain").style.bottom = `${i}px`;
    await new Promise(r => setTimeout(r, 1000));
    while(i <= 60)
    {
        document.getElementById("curtain").style.bottom = `${i}px`;
        i = i + 3;
        await wait(10);
        
    }
    while(i <= 1200)
    {
        document.getElementById("curtain").style.bottom = `${i}px`;
        i = i + 11;
        await wait(10);
    }
}

function update()
{
    // Display the HP of both Mario and Vivian.
    document.getElementById('marioHP').textContent = "Mario: " + HPMario;
    document.getElementById('vivianHP').textContent = "Vivian: " + HPVivian;

    // Retrieve sprite positions
    document.getElementById('mario').textContent 
    document.getElementById('vivian').textContent 

    document.getElementById('enemy1HP').textContent = HPEnemy1; 
    if(HPEnemy1 < 1)
        document.getElementById("enemy1").style.visibility = "hidden";
    else
        document.getElementById("enemy1").style.visibility = "visible";
        document.getElementById("enemy1").style.width = sizeEnemy1;
        document.getElementById("enemy1").style.height = sizeEnemy1;
    document.getElementById('enemy2HP').textContent = HPEnemy2;
    if(HPEnemy2 < 1)
        document.getElementById("enemy2").style.visibility = "hidden";
    else
        document.getElementById("enemy2").style.visibility = "visible";
    document.getElementById('enemy3HP').textContent = HPEnemy3;
    if(HPEnemy3 < 1)
        document.getElementById("enemy3").style.visibility = "hidden";
    else
        document.getElementById("enemy3").style.visibility = "visible";

    // TODO: These values will be hard coded to Gloombas for now, they should be updated with variables later down the road.
}

async function setGame()
{
    HPMario = 25;
    HPVivian = 20;
    update();
    await unveil();
    entrance("mario", 400);
    await wait(300);
    entrance("vivian", 200);
    await wait(1000);
    hop("mario", 2);
    hop("vivian", 2);
    // ! Come back later!
}