const startGame = document.querySelector(".start");
const numOfGames = document.querySelector(".games");
const enter = document.querySelector(".enter");
const inactive = document.querySelectorAll(".inactive");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
const gameControls = document.querySelector(".gamePopup");
const gameScreen = document.querySelector(".gameScreen");
const playerWinScreen = document.querySelector(".playerWins");
const computerWinScreen = document.querySelector(".computerWins");
const drawScreen = document.querySelector(".draw");
const restartGame = document.querySelectorAll(".restartGame");
const exit = document.querySelectorAll(".exit");
let computerWinsCount = 0;
let playerWinsCount = 0; 
let gamesCount = 0;
rock.addEventListener("click", (e) => {
    playRound(e);
    game();
})
scissors.addEventListener("click", (e) => {
    playRound(e);
    game();
})
paper.addEventListener("click", (e) => {
    playRound(e);
    game();
})
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

// function playerPlay()
// {
//     let x = parseInt(prompt("choose your option: 1 rock, 2 paper, 3 scissors"));
//     return x;
// }

function playRound(event)
{
    gamesCount++;
    let player = event.target.classList;
    let computer = computerPlay();
    // let player = playerPlay();
    console.log(computer);
    // console.log(player);
    switch (true)
    {
        case computer == 1 && player == "rock":
            console.log("even");
            return "even"; 
        case computer == 2 && player == "paper":
            console.log("even");
            return "even"; 
        case computer == 3 && player == "scissors":
            console.log("even");
            return "even"; 
        case computer == 1 && player == "paper":
            playerWinsCount++;
            console.log("player");
            return "Player wins"; 
        case computer == 2 && player == "scissors":
            console.log("player");
            playerWinsCount++;
            return "Player wins"; 
        case computer == 3 && player == "rock":
            playerWinsCount++;
            console.log("player");
            return "Player wins";
        case computer == 2 && player == "rock":
            computerWinsCount++;
            console.log("computer");
            return "Computer Wins"; 
        case computer == 3 && player == "paper":
            computerWinsCount++;
            console.log("computer");
            return "Computer Wins"; 
        case computer == 1 && player == "scissors":
            computerWinsCount++;
            console.log("computer");
            return "Computer Wins";
        default: break;
    }
}

function game()
{  
    if(computerWinsCount > numOfGames.value/2) computerWins();
    if(playerWinsCount > numOfGames.value/2) playerWins();
    if(gamesCount == numOfGames.value){
        if(playerWinsCount > computerWinsCount) playerWins();
        if(playerWinsCount < computerWinsCount) computerWins();
        if(playerWinsCount == computerWinsCount) draw();
    }
}

function initializeGame(){
    inactive.forEach((elem) => {
        elem.classList.remove("active");
    })
    startGame.classList.add("active");
    gameControls.classList.add("active");
    gameScreen.classList.add("active");
}

function playerWins(){
    console.log("p");
    playerWinScreen.classList.add("active");
    gameControls.classList.remove("active");
    gameScreen.classList.remove("active");
}
function computerWins(){
    console.log("c");
   computerWinScreen.classList.add("active");
   gameControls.classList.remove("active");
   gameScreen.classList.remove("active");
}
function draw(){
    console.log("d");
    drawScreen.classList.add("active");
    gameControls.classList.remove("active");
    gameScreen.classList.remove("active");
}