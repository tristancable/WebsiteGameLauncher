/** Manually setting variable types (This is to make functions more reusable)
 * @param {number} enemyNum
 * @param {string} enemyPool
 */

let MarioAlive = true;
let HPMario = 0;
let MarioX = 0;
let MarioY = 0;

let VivianAlive = true;
let HPVivian = 0;
let VivianX = 0;
let VivianY = 0;

let enemyAlive1 = false;
let enemyImg1 = "";
let HPEnemy1 = 0;
let ATKEnemy1 = 0;
let sizeEnemy1 = 0;
let groundPosEnemy1 = 0;
let Enemy1XPos = 0;
let Enemy1YPos = 0;

let enemyAlive2 = false;
let enemyImg2 = "";
let HPEnemy2 = 0;
let ATKEnemy2 = 0;
let sizeEnemy2 = 0;
let groundPosEnemy2 = 0;
let Enemy2XPos = 0;
let Enemy2YPos = 0;

let enemyAlive3 = false;
let enemyImg3 = "";
let HPEnemy3 = 0;
let ATKEnemy3 = 0;
let sizeEnemy3 = 0;
let groundPosEnemy3 = 0;
let Enemy3XPos = 0;
let Enemy3YPos = 0;

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
            switch(enemyNum)
            {
                case 1:
                    sizeEnemy1 = 140;
                    HPEnemy1 = 7;
                    ATKEnemy1 = 3;
                    groundPosEnemy1 = 565;
                    enemyImg1 = "../assets/GloombaNormal.png";
                    break;
                case 2:
                    sizeEnemy2 = 140;
                    HPEnemy2 = 7;
                    ATKEnemy2 = 3;
                    groundPosEnemy2 = 565;
                    enemyImg2 = "../assets/GloombaNormal.png";
                    break;
                case 3:
                    sizeEnemy3 = 140;
                    HPEnemy3 = 7;
                    ATKEnemy3 = 3;
                    groundPosEnemy3 = 565;
                    enemyImg3 = "../assets/GloombaNormal.png";
                    break;
            }
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

async function enemytrance(getId, howFar)
{
    document.getElementById(getId).style.visibility = "visible";
    let i = 0;
    while(i <= howFar)
    {
        
        document.getElementById(getId).style.right = `${i}px`;
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
    // Ease of use
    let infoMario =  document.getElementById("mario");
    let infoVivian =  document.getElementById("vivian");
    let infoEnemy1 = document.getElementById("enemy1");
    let infoEnemy2 = document.getElementById("enemy2");
    let infoEnemy3 = document.getElementById("enemy3");

    // Display the HP of both Mario and Vivian.
    document.getElementById('marioHP').textContent = "Mario: " + HPMario;
    document.getElementById('vivianHP').textContent = "Vivian: " + HPVivian;

    // Retrieve sprite positions
    MarioX = infoMario.width;
    MarioY = infoMario.height;
    VivianX = infoVivian.width;
    VivianX = infoVivian.height;

    // Utilize and update sprite variables
    document.getElementById('enemyHP1').textContent = HPEnemy1; 
    if(HPEnemy1 < 1)
        alive = false;
        infoEnemy1.style.visibility = "hidden";
    else
        alive = true;
        infoEnemy1.style.width = `${sizeEnemy1}px`;
        infoEnemy1.style.height = `${sizeEnemy1}px`;
        infoEnemy1.style.top = `${groundPosEnemy1}px`;
        infoEnemy1.src = enemyImg1;
    infoEnemy2.textContent = HPEnemy2;
    if(HPEnemy2 < 1)
        infoEnemy2.style.visibility = "hidden";
    else
        infoEnemy2.style.width = `${sizeEnemy2}px`;
        infoEnemy2.style.height = `${sizeEnemy2}px`;
        infoEnemy2.style.top = `${groundPosEnemy2}px`;
        infoEnemy2.src = enemyImg1;
    infoEnemy3.textContent = HPEnemy3;
    if(HPEnemy3 < 1)
        infoEnemy3.style.visibility = "hidden";
    else
        infoEnemy3.style.width = `${sizeEnemy3}px`;
        infoEnemy3.style.height = `${sizeEnemy3}px`;
        infoEnemy3.style.top = `${groundPosEnemy3}px`;
        infoEnemy3.src = enemyImg1;

    // TODO: Some values will be hard coded using the Gloomba enemy for now, they should be updated with more variables later down the road.
}

async function setGame()
{
    HPMario = 25;
    HPVivian = 20;
    HPEnemy1 = 10;

    enemyGen(1, 1);

    update();
    await unveil();
    entrance("mario", 400);
    if
    enemytrance("enemy1", 500)
    await wait(300);
    entrance("vivian", 200);
    await wait(1000);
    hop("mario", 2);
    hop("vivian", 2);
    hop("enemy1", 2);
    // ! Come back later!
}