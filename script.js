const startGame = document.querySelector(".start");
const numOfGames = document.querySelector(".games");
const enter = document.querySelector(".enter");
const numberOfGamesChoice = document.querySelector("#popup");
const background = document.querySelector("#background");
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
const playerImages = document.querySelectorAll(".Player");
const computerImages = document.querySelectorAll(".Computer");
const restartGameButtons = document.querySelectorAll(".restartGame");
const exitGameButtons = document.querySelectorAll(".exit");
const images = document.querySelector(".images");
const controls = document.querySelector(".controls");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const winnerDisplay = document.querySelector(".winnerDisplay");

let regex = /^\d+$/;
let computerWinsCount = 0;
let playerWinsCount = 0;
let gamesCount = 0;

rock.addEventListener("click", (e) => {
  playRound(e);
  game();
});
scissors.addEventListener("click", (e) => {
  playRound(e);
  game();
});
paper.addEventListener("click", (e) => {
  playRound(e);
  game();
});
startGame.addEventListener("click", openPopup);
enter.addEventListener("click", initializeGame);
startGame.addEventListener("mousedown", () => {
  startGame.classList.add("style");
});
startGame.addEventListener("mouseup", () => {
  startGame.classList.remove("style");
});

function openPopup() {
  inactive.forEach((elem) => {
    elem.classList.add("active");
  });
}

function computerPlay() {
  let x = Math.floor(Math.random() * 3 + 1);
  switch (true) {
    case x == 1:
      console.log(x);
      return "rock";
    case x == 2:
      console.log(x);
      return "paper";
    case x == 3:
      console.log(x);
      return "scissors";
  }
}

function playRound(clickEvent) {
  images.classList.remove("active");
  gamesCount++;
  let player = clickEvent.target.classList[0];
  let computer = computerPlay();
  changePlayerImage(clickEvent);
  changeComputerImage(computer);

  switch (true) {
    case computer == "rock" && player == "rock":
      console.log("even");
      winnerDisplay.innerHTML = "Draw";
      return "even";
    case computer == "paper" && player == "paper":
      console.log("even");
      winnerDisplay.innerHTML = "Draw";
      return "even";
    case computer == "scissors" && player == "scissors":
      console.log("even");
      winnerDisplay.innerHTML = "Draw";
      return "even";

    case computer == "rock" && player == "paper":
      playerWinsCount++;
      playerScore.innerHTML = playerWinsCount;
      console.log("player");
      winnerDisplay.innerHTML = "Player Wins!";
      return "Player wins";
    case computer == "paper" && player == "scissors":
      console.log("player");
      winnerDisplay.innerHTML = "Player Wins!";
      playerWinsCount++;
      playerScore.innerHTML = playerWinsCount;
      return "Player wins";
    case computer == "scissors" && player == "rock":
      playerWinsCount++;
      playerScore.innerHTML = playerWinsCount;
      console.log("player");
      winnerDisplay.innerHTML = "Player Wins!";
      return "Player wins";

    case computer == "paper" && player == "rock":
      computerWinsCount++;
      computerScore.innerHTML = computerWinsCount;
      console.log("computer");
      winnerDisplay.innerHTML = "Computer Wins!";
      return "Computer Wins";
    case computer == "scissors" && player == "paper":
      computerWinsCount++;
      computerScore.innerHTML = computerWinsCount;
      console.log("computer");
      winnerDisplay.innerHTML = "Computer Wins!";
      return "Computer Wins";
    case computer == "rock" && player == "scissors":
      computerWinsCount++;
      computerScore.innerHTML = computerWinsCount;
      console.log("computer");
      winnerDisplay.innerHTML = "Computer Wins!";
      return "Computer Wins";
      
    default:
      break;
  }
}

function game() {
  if (computerWinsCount > numOfGames.value / 2) computerWins();
  if (playerWinsCount > numOfGames.value / 2) playerWins();
  if (gamesCount == numOfGames.value) {
    if (playerWinsCount > computerWinsCount) playerWins();
    if (playerWinsCount < computerWinsCount) computerWins();
    if (playerWinsCount == computerWinsCount) draw();
  }
}

function initializeGame() {
  console.log(regex.test(numOfGames.value));
  if (numOfGames.value > 0 && regex.test(numOfGames.value)) {
    numberOfGamesChoice.classList.remove("active");
    background.classList.remove("active");
    gameControls.classList.add("active");
    gameScreen.classList.add("active");
  } else {
    window.alert("Invalid number of Games");
  }
}

function playerWins() {
  gameControls.classList.remove("active");
  gameScreen.classList.remove("active");
  restartGameButtons.forEach((elem) => {
    elem.addEventListener("click", restartGameFunction);
  });
  exitGameButtons.forEach((elem) => {
    elem.addEventListener("click", exitGame);
  });
  setTimeout(() => {
    playerWinScreen.classList.add("active");
  }, 1000);
}
function computerWins() {
  gameControls.classList.remove("active");
  gameScreen.classList.remove("active");
  restartGameButtons.forEach((elem) => {
    elem.addEventListener("click", restartGameFunction);
  });
  exitGameButtons.forEach((elem) => {
    elem.addEventListener("click", exitGame);
  });
  setTimeout(() => {
    computerWinScreen.classList.add("active");
  }, 1000);
}
function draw() {
  gameControls.classList.remove("active");
  gameScreen.classList.remove("active");
  restartGameButtons.forEach((elem) => {
    elem.addEventListener("click", restartGameFunction);
  });
  exitGameButtons.forEach((elem) => {
    elem.addEventListener("click", exitGame);
  });
  setTimeout(() => {
    drawScreen.classList.add("active");
  }, 1000);
}

function changePlayerImage(buttonClickEvent) {
  playerImages.forEach((elem) => {
    console.log(buttonClickEvent);
    if (elem.dataset.image == buttonClickEvent.target.classList[0]) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
}

function changeComputerImage(computerPlayOutput) {
  computerImages.forEach((elem) => {
    if (elem.dataset.image == computerPlayOutput) {
      elem.classList.add("active");
    } else {
      elem.classList.remove("active");
    }
  });
}

function restartGameFunction() {
  winnerDisplay.innerHTML="";
  images.classList.add("active");
  numberOfGamesChoice.classList.add("active");
  background.classList.add("active");
  numOfGames.value = "";
  drawScreen.classList.remove("active");
  computerWinScreen.classList.remove("active");
  playerWinScreen.classList.remove("active");
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  computerWinsCount = 0;
  playerWinsCount = 0;
  gamesCount = 0;
}

function exitGame() {
  winnerDisplay.innerHTML="";
  images.classList.add("active");
  startGame.classList.remove("active");
  numOfGames.value = "";
  drawScreen.classList.remove("active");
  controls.classList.remove("active");
  computerWinScreen.classList.remove("active");
  playerWinScreen.classList.remove("active");
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  computerWinsCount = 0;
  playerWinsCount = 0;
  gamesCount = 0;
}
