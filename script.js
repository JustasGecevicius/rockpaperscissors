const startGame = document.querySelector(".start");
const numOfGames = document.querySelector(".games");
const enter = document.querySelector(".enter");
const inactive = document.querySelectorAll(".inactive");
startGame.addEventListener("click", openPopup);
enter.addEventListener("click", initializeGame);



function openPopup(){
inactive.forEach((elem) => {
    elem.classList.add("active");
})
}

function computerPlay()
{
    let x = Math.floor((Math.random() * 3) + 1);
    return x;
}

function playerPlay()
{
    let x = parseInt(prompt("choose your option: 1 rock, 2 paper, 3 scissors"));
    return x;
}

function playRound()
{
    let computer = computerPlay();
    let player = playerPlay();
    console.log(computer);
    console.log(player);
    switch (true)
    {
        case computer == 1 && player == 1:
            return "even"; 
        case computer == 2 && player == 2:
            return "even"; 
        case computer == 3 && player == 3:
            return "even"; 
        case computer == 1 && player == 2:
            return "Player wins"; 
        case computer == 2 && player == 3:
            return "Player wins"; 
        case computer == 3 && player == 1:
            return "Player wins";
        case computer == 2 && player == 1:
            return "Computer Wins"; 
        case computer == 3 && player == 2:
            return "Computer Wins"; 
        case computer == 1 && player == 3:
            return "Computer Wins";
        default: break;
    }
}

function game()
{   let Count = 0; 
    for(let i = 0; i < numOfGames.value; i++)
    {
        if(playRound() == "Computer Wins")
        {
            Count++;
        }  
    }
    if(Count >= numOfGames.value/2){console.log("comp"); return "Computer wins";}
    if(Count < numOfGames.value/2){console.log("pl"); return "Player wins";}
    if(Count == 0){console.log("dr"); return "Draw";}
}

function initializeGame(){
    inactive.forEach((elem) => {
        elem.classList.remove("active");
    })
    startGame.classList.add("active");
    game();
}