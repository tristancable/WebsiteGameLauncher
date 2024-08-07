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

function entrance(getId, howFar)
{
    (async () => 
        {
  
        let i = 0;
        while(i <= howFar)
        {
          document.getElementById(getId).style.visibility = "visible";
          document.getElementById(getId).style.left = `${i}px`;
          i = i + 9;
          
          // Pause for 10ms
          await new Promise(r => setTimeout(r, 10));
          
        }
        
      })();
}

function setGame()
{
    (async () => 
    {
        entrance("mario", 400);
        await new Promise(r => setTimeout(r, 300));
        entrance("vivian", 200);
    })();
    
    // Come back later!
}