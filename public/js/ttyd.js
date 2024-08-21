/** Manually setting variable types (This is to make functions more reusable)
 * @param {number} enemyPick
 * @param {string} enemyPool
 * @param {Array} menuOptions
 * @param {object} Enemy1
 * @param {object} Enemy2
 * @param {object} Enemy3
 */

// ! Don't frogor to do daily attendance

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

// Enemy & enemy variable encyclopedia
let Enemy1 = null;
let Enemy2 = null;
let Enemy3 = null;
const enemyData =
{
    // Entry 1: Basic Gloomba
    1: { enemyNum: 1, img: "../assets/GloombaNormal.png", hp: 7, atk: 3, size: 140, groundPos: 560, spiked: false, fly: false, canTouch: true, canTopple: false},
    // Entry 2: Paragloomba
    2: { enemyNum: 2, img: "../assets/GloombaFlying.png", hp: 7, atk: 3, size: 140, groundPos: 560, spiked: false, fly: true, canTouch: true, canTopple: false},
    // Entry 3: Spiky Gloomba
    3: { enemyNum: 3, img: "../assets/GloombaHelmet.png", hp: 7, atk: 3, size: 140, groundPos: 560, spiked: true, fly: false, canTouch: true, canTopple: false}
}

function enemyGen(enemyPick)
{
    const data = enemyData[enemyPick];
    if (data)
    {
        return (enemyPick, data.img, data.hp, data.atk, data.size, data.groundPos, data.spiked, data.fly, data.canTouch, data.canTopple);
    }
    console.error(`${enemyPick} is not a valid enemy ID`); // Invalid ID failsafe to prevent hang or error
    return null;
}

function Enemy(enemy, img, hp, atk, size, groundPos, spiked, fly, canTouch, canTopple) 
{
    this.id = enemy;
    this.alive = true;
    this.img = img;
    this.hp = hp;
    this.atk = atk;
    this.size = size;
    this.groundPos = groundPos;
    this.spiked = spiked;
    this.fly = fly;
    this.canTouch = canTouch;
    this.canTopple = canTopple;
    this.XPos = 0;
    this.YPos = 0;
}

// Misc variables
let turnOrder = 0;
let selectedMenu = 0; /*0 = None, 
                        1 = Mario Menu, 
                        2 = Vivian Menu, 
                        3 = Mario Hammer Menu, 
                        4 = Mario Jump Menu,
                        5 = Vivian Attack Menu*/
let menuIndex = 0;

const menuArray = ["", ""];

// Keyboard functionality
window.addEventListener('keydown', (event) =>
    {
        if(event.key == 'ArrowLeft')
        {
            if(menuIndex != 0)
            {
                menuIndex--;
            }
        }
        if(event.key == 'ArrowRight')
        {
            if(menuIndex != menuArray.length + 1)
            {
                menuIndex++;
            }
        }

        // Temporary menu UI
        document.getElementById('temporary').textContent = menuIndex;
    }
    );

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

function enemyChooser(enemyPool, whichEnemy)
{
    switch(enemyPool) // Please for the love of god if I forget to add breaks I will actually explode
    {
        case "Gloomba":
            break;
    }
}

async function entrance(getId, howFar)
{
    document.getElementById(getId).style.visibility = "visible";
    let i = 0;
    while(i <= howFar)
    {
        if(document.getElementById(getId).style.right == 0)
            document.getElementById(getId).style.left = `${i}px`;
        else
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
    if(Enemy1 != null)
        Enemy1["XPos"] = infoEnemy1.right;
        Enemy1["YPos"] = infoEnemy1.top;
    if(Enemy2 != null)
        Enemy2["XPos"] = infoEnemy2.right;
        Enemy2["YPos"] = infoEnemy2.top;
    if(Enemy3 != null)
        Enemy3["XPos"] = infoEnemy3.right;
        Enemy3["YPos"] = infoEnemy3.top;

    // Utilize and update sprite variables
    if(Enemy1 != null)
    {
        document.getElementById("enemyHP1").textContent = Enemy1["hp"];
        if(Enemy1["hp"] < 1)
        {
            Enemy1 = null;
            infoEnemy1.style.visibility = "hidden";
            infoHP1.style.visibility = "hidden";
        }
        else
        {
            infoHP1.style.visibility = "visible"; 
            infoEnemy1.style.width = `${Enemy1["size"]}px`;
            infoEnemy1.style.height = `${Enemy1["size"]}px`;
            infoEnemy1.style.top = `${Enemy1["groundPos"]}px`;
            infoEnemy1.src = Enemy1["img"];
        }
    }
    if(Enemy2 != null)
    {
        document.getElementById("enemyHP2").textContent = Enemy2["hp"];
        if(Enemy2["hp"] < 1)
        {
            Enemy2 = null;
            infoEnemy2.style.visibility = "hidden";
            infoHP2.style.visibility = "hidden";
        }
        else
        {
            infoHP2.style.visibility = "visible"; 
            infoEnemy2.style.width = `${Enemy2["size"]}px`;
            infoEnemy2.style.height = `${Enemy2["size"]}px`;
            infoEnemy2.style.top = `${Enemy2["groundPos"]}px`;
            infoEnemy2.src = Enemy2["img"];
        }
    }
    if(Enemy3 != null)
        {
            document.getElementById("enemyHP3").textContent = Enemy3["hp"];
            if(Enemy3["hp"] < 1)
            {
                Enemy3 = null;
                infoEnemy3.style.visibility = "hidden";
                infoHP3.style.visibility = "hidden";
            }
            else
            {
                infoHP3.style.visibility = "visible"; 
                infoEnemy3.style.width = `${Enemy3["size"]}px`;
                infoEnemy3.style.height = `${Enemy3["size"]}px`;
                infoEnemy3.style.top = `${Enemy3["groundPos"]}px`;
                infoEnemy3.src = Enemy3["img"];
            }
        }
    
    // TODO: Some values will be hard coded using the Gloomba enemy for now, they should be updated with more variables later down the road.
}

function menu()
{
    
}

async function setGame()
{
    HPMario = 25;
    HPVivian = 20;

    Enemy1 = new Enemy(enemyGen(1));
    Enemy2 = new Enemy(enemyGen(1));
    Enemy3 = new Enemy(enemyGen(1));

    update();

    await unveil();
    entrance("mario", 400);
    if(Enemy1 != null)
        entrance("enemy1", 600)
    await wait(400);
    entrance("vivian", 200);
    if(Enemy2 != null)
        entrance("enemy2", 400)
    await wait(300);
    if(Enemy3 != null)
        entrance("enemy3", 200)

    await wait(600);
    hop("mario", 2);
    hop("vivian", 2);
    hop("enemy1", 2);
    hop("enemy2", 2);
    hop("enemy3", 2);

    // ! Don't frogor to do daily attendance
}