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

async function entrance(getId, howFar)
{
    document.getElementById(getId).style.visibility = "visible";
    let i = 0;
    while(i <= howFar)
    {
        
        document.getElementById(getId).style.left = `${i}px`;
        i = i + 9;
        
        // Pause for 10ms
        await new Promise(r => setTimeout(r, 10));
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
            await new Promise(r => setTimeout(r, 10));
        }
        while(i >= upDistance - 50)
        {
            document.getElementById(getId).style.top = `${i}px`;
            i = i - 2;
            await new Promise(r => setTimeout(r, 10));
        }
        while(i <= upDistance - 40)
            {
                
            document.getElementById(getId).style.top = `${i}px`;
            i = i + 2;
            await new Promise(r => setTimeout(r, 10));
            }
        while(i <= upDistance)
        {
            
        document.getElementById(getId).style.top = `${i}px`;
        i = i + 10;
        await new Promise(r => setTimeout(r, 10));
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
            await new Promise(r => setTimeout(r, 10));
            
        }
    while(i <= 1200)
    {
        document.getElementById("curtain").style.bottom = `${i}px`;
        i = i + 11;
        await new Promise(r => setTimeout(r, 10));
        
    }
}

async function setGame()
{
    let HPMario = 25;
    let HPVivian = 20;
    await unveil();
    entrance("mario", 400);
    await new Promise(r => setTimeout(r, 300));
    entrance("vivian", 200);
    await new Promise(r => setTimeout(r, 1000));
    hop("mario", 2);
    hop("vivian", 2);
    
    // Come back later!
}