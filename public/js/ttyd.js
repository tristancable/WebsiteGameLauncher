/** Manually setting variable types (This is to make functions more reusable)
 * @param {number} enemyPick
 * @param {string} enemyPool
 * @param {Array} menuOptions
 * @param {object} Enemy1
 * @param {object} Enemy2
 * @param {object} Enemy3
 */

// Mario variables
let MarioData = true;
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
        return new Enemy(enemyPick, data.img, data.hp, data.atk, data.size, data.groundPos, data.spiked, data.fly, data.canTouch, data.canTopple);
    }
    console.error(`${enemyPick} is not a valid enemy ID`); // Invalid ID failsafe to prevent hang or error
    return null;
} 

function Enemy(enemy, img, hp, atk, size, groundPos, spiked, fly, canTouch, canTopple) 
{
    this.id = enemy;
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
let turn = 0;
let selectedMenu = 0; /*0 = None, 
                        1 = Mario Menu, 
                        2 = Vivian Menu, 
                        3 = Mario Hammer Menu, 
                        4 = Mario Jump Menu,
                        5 = Vivian Attack Menu*/
let currentMenu = "";
let init = true;
let prevMenu = "";
const menuReady = new Event('menuReady');
let menuItems = null;
let selectedIndex = 0;
let broadcast = null;
let selectedAttack = "";

const menuActions = 
{
    1: { name: "Jump", menuPos: 1, action: 'showJumpMenu', menu: 'main-menu' },
    2: { name: "Hammer", menuPos: 2, action: 'showHammerMenu', menu: 'main-menu' },
    3: { name: "Tactics", menuPos: 3, action: 'showTacticsMenu', menu: 'main-menu' },
    4: { name: "Defend", menuPos: 1, action: 'guard', menu: 'tactics-menu'},
    5: { name: "Run Away", menuPos: 2, action: 'homePage', menu: 'tactics-menu' },
    6: { name: "Back", menuPos: 3, action: 'back', menu: 'tactics-menu' },
    7: { name: "Basic Jump", menuPos: 1, action: 'jump', menu: 'jump-menu', mana: 0 },
    8: { name: "Multibounce", menuPos: 2, action: 'multiJump', menu: 'jump-menu', mana: 1 },
    9: { name: "Power Bounce", menuPos: 3, action: 'powerJump', menu: 'jump-menu', mana: 2 },
    10: { name: "Back", menuPos: 4, action: 'back', menu: 'jump-menu' },
    11: { name: "Basic Hammer", menuPos: 1, action: 'hammer', menu: 'hammer-menu', mana: 0 },
    12: { name: "Quake Hammer", menuPos: 2, action: 'quakeHammer', menu: 'hammer-menu', mana: 2 },
    13: { name: "Back", menuPos: 3, action: 'back', menu: 'hammer-menu' },
};

function menuUpdate(selectedMenu) 
{
    prevMenu = currentMenu;
    currentMenu = selectedMenu;

    document.getElementById('action-menu').replaceChildren('');

    const menuLength = Object.keys(menuActions).length;
    let div = null;

    for(let i = 1; i < menuLength + 1; i++)
    {
        div = document.createElement('div');
        div.className = 'action-item';

        if(menuActions[i].menu == selectedMenu)
        {
            div.innerHTML = menuActions[i].name + `</div>`;
            document.getElementById("action-menu").appendChild(div); // Menu is made and appended
        }
    }

    init = true;
    window.dispatchEvent(menuReady);
}

function removeRow(input) 
{
    document.getElementById('main-menu').removeChild(input.parentNode);
}

// Keyboard functionality
document.addEventListener('DOMContentLoaded', () => 
    {
        // const menuItems = document.getElementById('tactics-menu').querySelectorAll('.action-item');
        
        window.addEventListener('menuReady', function (e) 
        {
            menuItems = document.querySelectorAll('.action-item');
            selectedIndex = 0;
            menuItems[0].classList.add('selected');
        });

        function updateSelection() 
        {
            menuItems.forEach((item, i) => 
            {
                if (i == selectedIndex) 
                {
                    item.classList.add('selected');
                } 
                else 
                {
                    item.classList.remove('selected');
                }
            });
        }
    
        function handleInput(event) 
        {
            if (event.key == 'ArrowRight') 
            {
                selectedIndex = (selectedIndex + 1) % menuItems.length;
                updateSelection(selectedIndex);
            }
            else if (event.key == 'ArrowLeft') 
            {
                selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
                updateSelection(selectedIndex);
            }
            else if (event.key == 'z' || event.key == 'Enter') 
            {
                if(menuActions[selectedIndex + 1].menu == currentMenu)
                {
                    broadcast = new Event(menuActions[selectedIndex + 1].action);
                }
                else
                {
                    let temp = selectedIndex;
                    while(menuActions[temp + 1].menu != currentMenu)
                    {
                        temp = temp + 1;
                    }
                    temp = temp + selectedIndex + 1;
                    broadcast = new Event(menuActions[temp].action);
                }
                window.dispatchEvent(broadcast);
                // Trigger the selected action
            }
            else if(event.key == 'Escape' && currentMenu != "main-menu" && currentMenu != "vivian-menu")
            {
                broadcast = new Event("back");
                window.dispatchEvent(broadcast);
            }
            updateSelection();
        };

        // ! Broadcasts
        // Open Jump menu
        window.addEventListener('showJumpMenu', function (e) 
        {
            menuUpdate("jump-menu")
        });
        // Open Hammer menu
        window.addEventListener('showHammerMenu', function (e) 
        {
            menuUpdate("hammer-menu")
        });
        // Open Tactics menu
        window.addEventListener('showTacticsMenu', function (e) 
        {
            menuUpdate("tactics-menu")
        });
        // Return to previous menu
        window.addEventListener('back', function (e) 
        {
            menuUpdate(prevMenu)
        });
        // Run away (Sends user to home page)
        window.addEventListener('homePage', function (e) 
        {
            end();
            let mario = document.getElementById("mario");
            let vivian = document.getElementById("vivian");
            mario.style.transform = "scaleX(-1)";
            vivian.style.transform = "scaleX(-1)";
            hop("mario", 2);
            hop("vivian", 2);
        });

        document.addEventListener('keydown', handleInput);
    });

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

async function end()
{
    end = document.getElementById("end")
    end.style.visibility = "visible";
    await update()
    for(let i = 1; i < 40; i++)
    {
        end.style.opacity = i / 100;
        await wait(1);
    }
    run("mario", 400, 0, 1, 7, MarioX)
    run("vivian", 400, 0, 1, 7, VivianX)
    for(let i = 40; i < 100; i++)
    {
        end.style.opacity = i / 100;
        await wait(1);
    }
    await wait(450);
    document.getElementById("explode").play();
    await wait(50);
    document.getElementById("img1").src = "../assets/LilyEXPLODES.gif"
    document.getElementById("img2").src = "../assets/LilyEXPLODES.gif"
    document.getElementById("img1").style.height = "100px"
    document.getElementById("img1").style.width = "85px"
    document.getElementById("img2").style.height = "100px"
    document.getElementById("img2").style.width = "85px"
    await wait(301);
    window.location.replace("/");
}

function enemyChooser(enemyPool, whichEnemy)
{
    switch(enemyPool) // Please for the love of god if I forget to add breaks I will actually explode
    {
        case "Gloomba":
            break;
    }
}

async function entrance(getId, howFar, type) // 0 = Left, 1 = Right
{
    document.getElementById(getId).style.visibility = "visible";
    let i = 0;
    while(i <= howFar)
    {
        switch(type)
        {
            case 0:
                document.getElementById(getId).style.left = `${i}px`;
                break;
            case 1:
                document.getElementById(getId).style.right = `${i}px`;
                break;
        }
        i = i + 5;
        await wait(10);
    }
}

async function run(getId, howFar, type, direction, speed, currentPos) // 0 = Left, 1 = Right
{
    let i = 0;
    await wait(1)
    switch(direction)
    {
        case 0:
            while(i <= howFar)
            {
                switch(type)
                {
                    case 0:
                        document.getElementById(getId).style.left = `${currentPos + i}px`;
                        break;
                    case 1:
                        document.getElementById(getId).style.right = `${currentPos + i}px`;
                        break;
                }
                i += speed;
                await wait(10);
            }
            break;
        case 1:
            while(i <= howFar)
            {
                switch(type)
                {
                    case 0:
                        document.getElementById(getId).style.left = `${currentPos - i}px`;
                        break;
                    case 1:
                        document.getElementById(getId).style.right = `${currentPos - i}px`;
                        break;
                }
                i += speed;
                await wait(10);
            }
            break;
    }
}

async function hop(getId, hops)
{
    var upDistance = getComputedStyle(document.getElementById(getId))
        .getPropertyValue('top');
    var upDistance = upDistance.replace(/\D/g,'');
    for(let index = 0; index < hops; index++)
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
    const regex = "/\d+/";
    MarioX = infoMario.style.left.match(regex);
    MarioY = infoMario.style.top.match(regex);
    VivianX = infoVivian.style.left.match(regex);
    VivianX = infoVivian.style.top.match(regex);
    if(Enemy1 != null)
        Enemy1["XPos"] = infoEnemy1.style.right.match(regex);
        Enemy1["YPos"] = infoEnemy1.style.top.match(regex);
    if(Enemy2 != null)
        Enemy2["XPos"] = infoEnemy2.style.right.match(regex);
        Enemy2["YPos"] = infoEnemy2.style.top.match(regex);
    if(Enemy3 != null)
        Enemy3["XPos"] = infoEnemy3.style.right.match(regex);
        Enemy3["YPos"] = infoEnemy3.style.top.match(regex);

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

async function setGame()
{
    document.getElementById("action-menu").style.visibility = "hidden";
    HPMario = 25;
    HPVivian = 20;

    Enemy1 = enemyGen(1);
    Enemy2 = enemyGen(1);
    Enemy3 = enemyGen(1);

    update();

    await unveil();
    entrance("mario", 400, 0);
    if(Enemy1 != null)
        entrance("enemy1", 600, 1)
    await wait(400);
    entrance("vivian", 200, 0);
    if(Enemy2 != null)
        entrance("enemy2", 400, 1)
    await wait(300);
    if(Enemy3 != null) 
        entrance("enemy3", 200, 1)

    await wait(600);
    hop("mario", 2);
    hop("vivian", 2);
    hop("enemy1", 2);
    hop("enemy2", 2);
    await hop("enemy3", 2);

    document.getElementById("action-menu").style.visibility = "visible";
    menuUpdate("main-menu");
}