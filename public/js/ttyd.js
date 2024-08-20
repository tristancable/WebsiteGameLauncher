/** Manually setting variable types (This is to make functions more reusable)
 * @param {number} enemyNum
 * @param {string} enemyPool
 */

// Mario variables
let MarioAlive = true;
let HPMario = 0;
let MarioX = 0;
let MarioY = 0;

// Vivian variables
let VivianAlive = true;
let HPVivian = 0;
let VivianX = 0;
let VivianY = 0;

// Enemy 1 variables
let enemyAlive1 = false;
let enemyImg1 = "";
let HPEnemy1 = 0;
let ATKEnemy1 = 0;
let sizeEnemy1 = 0;
let groundPosEnemy1 = 0;
let Enemy1XPos = 0;
let Enemy1YPos = 0;

// Enemy 2 variables
let enemyAlive2 = false;
let enemyImg2 = "";
let HPEnemy2 = 0;
let ATKEnemy2 = 0;
let sizeEnemy2 = 0;
let groundPosEnemy2 = 0;
let Enemy2XPos = 0;
let Enemy2YPos = 0;

// Enemy 3 variables
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
            switch(whichEnemy)
            {
                case 1:
                    sizeEnemy1 = 140;
                    HPEnemy1 = 7;
                    ATKEnemy1 = 3;
                    groundPosEnemy1 = 560;
                    enemyImg1 = "../assets/GloombaNormal.png";
                    break;
                case 2:
                    sizeEnemy2 = 140;
                    HPEnemy2 = 7;
                    ATKEnemy2 = 3;
                    groundPosEnemy2 = 560;
                    enemyImg2 = "../assets/GloombaNormal.png";
                    break;
                case 3:
                    sizeEnemy3 = 140;
                    HPEnemy3 = 7;
                    ATKEnemy3 = 3;
                    groundPosEnemy3 = 560;
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
    let infoHP1 = document.getElementById("enemyHP1");
    let infoHP2 = document.getElementById("enemyHP2");
    let infoHP3 = document.getElementById("enemyHP3");

    // Display the HP of both Mario and Vivian.
    document.getElementById('marioHP').textContent = "Mario: " + HPMario;
    document.getElementById('vivianHP').textContent = "Vivian: " + HPVivian;

    // Retrieve sprite positions
    MarioX = infoMario.left;
    MarioY = infoMario.top;
    VivianX = infoVivian.left;
    VivianX = infoVivian.top;
    Enemy1XPos = infoEnemy1.right;
    Enemy1YPos = infoEnemy1.top;
    Enemy2XPos = infoEnemy2.right;
    Enemy2YPos = infoEnemy2.top;
    Enemy3XPos = infoEnemy3.right;
    Enemy3YPos = infoEnemy3.top;

    // Utilize and update sprite variables
    document.getElementById("enemyHP1").textContent = HPEnemy1;
    if(HPEnemy1 < 1)
    {
        enemyAlive1 = false;
        infoEnemy1.style.visibility = "hidden";
        
    }
    else
    {
        infoHP1.style.visibility = "visible"; 
        enemyAlive1 = true;
        infoEnemy1.style.width = `${sizeEnemy1}px`;
        infoEnemy1.style.height = `${sizeEnemy1}px`;
        infoEnemy1.style.top = `${groundPosEnemy1}px`;
        infoEnemy1.src = enemyImg1;
    }
    document.getElementById("enemyHP2").textContent = HPEnemy2;
    if(HPEnemy2 < 1)
    {
        enemyAlive2 = false;
        infoEnemy2.style.visibility = "hidden";
        
    }
    else
    {
        infoHP2.style.visibility = "visible"; 
        enemyAlive2 = true;
        infoEnemy2.style.width = `${sizeEnemy2}px`;
        infoEnemy2.style.height = `${sizeEnemy2}px`;
        infoEnemy2.style.top = `${groundPosEnemy2}px`;
        infoEnemy2.src = enemyImg2;
    }
    document.getElementById("enemyHP3").textContent = HPEnemy3;
    if(HPEnemy3 < 1)
    {
        enemyAlive3 = false;
        infoEnemy3.style.visibility = "hidden";
        
    }
    else
    {
        infoHP3.style.visibility = "visible"; 
        enemyAlive3 = true;
        infoEnemy3.style.width = `${sizeEnemy3}px`;
        infoEnemy3.style.height = `${sizeEnemy3}px`;
        infoEnemy3.style.top = `${groundPosEnemy3}px`;
        infoEnemy3.src = enemyImg3;
    }
    // TODO: Some values will be hard coded using the Gloomba enemy for now, they should be updated with more variables later down the road.
}

function menu()
{
    window.addEventListener('keydown', (event) =>
    {
        if(event.key == 's')
        {
            // When the S key is pressed, this will happen
        }
    }
    );
}

async function setGame()
{
    HPMario = 25;
    HPVivian = 20;
    HPEnemy1 = 10;

    enemyGen(1, 1);
    enemyGen(1, 2);
    enemyGen(1, 3);

    update();

    await unveil();
    entrance("mario", 400);
    if(enemyAlive1)
        enemytrance("enemy1", 600)
    await wait(400);
    entrance("vivian", 200);
    if(enemyAlive2)
        enemytrance("enemy2", 400)
    await wait(300);
    if(enemyAlive3)
        enemytrance("enemy3", 200)

    await wait(600);
    hop("mario", 2);
    hop("vivian", 2);
    hop("enemy1", 2);
    hop("enemy2", 2);
    hop("enemy3", 2);

    while(true) // Game logic
    {
        // ! Come back later!
    }
}