
let playerwins = 0, computerwins = 0;
let reqWins = parseInt(prompt("Till how many wins are we playing?")); 

function numToRps (func)
{
    switch (func)
    {
        case 1:
            return "Rock!";
        case 2:
            return "Paper!";
        case 3: 
            return "Scissors!";
    }
}

const button = document.querySelectorAll("button");
button.forEach(but => but.addEventListener("click", playRound));

function whoWins(computer, player)
{
    switch (true)
    {

        case computer == 1 && player == 1:

            return "Even"; 
        case computer == 2 && player == 2:

            return "Even"; 
        case computer == 3 && player == 3:

            return "Even"; 
        case computer == 1 && player == 2:
            playerwins++;
 
            score.textContent = `${playerwins} : ${computerwins}`;
            return "Player wins"; 
        case computer == 2 && player == 3:
            playerwins++;

            score.textContent = `${playerwins} : ${computerwins}`;
            return "Player wins"; 
        case computer == 3 && player == 1:
            playerwins++;

            score.textContent = `${playerwins} : ${computerwins}`;
            return "Player wins";
        case computer == 2 && player == 1:
            computerwins++;

            score.textContent = `${playerwins} : ${computerwins}`;
            return "Computer Wins"; 
        case computer == 3 && player == 2:
            computerwins++;

            score.textContent = `${playerwins} : ${computerwins}`;
            return "Computer Wins"; 
        case computer == 1 && player == 3:
            computerwins++;

            score.textContent = `${playerwins} : ${computerwins}`;
            return "Computer Wins";
        default: break;
    }
}
function disabled(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(but => but.disabled = true);
}
function enabled(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(but => but.disabled = false);
}

function restart(){
    console.log("restart")
    restrt = document.querySelector(".restart");
    rbutton = document.createElement("button");
    rbutton.textContent = "Restart Game?";
    restrt.appendChild(rbutton);
    rbutton.addEventListener("click", () => {
        const score = document.querySelector("#score"); score.textContent = "0 : 0";
        playerwins = 0;
        computerwins = 0;
        let ptext = document.querySelector("#player");
        ptext.textContent = "Your Choice";
        let ctext = document.querySelector("#computer");
        ctext.textContent = "Computers Choice";
        rbutton.remove();
        enabled();
    })

}

function playRound(e)
{
    let computer = Math.floor((Math.random() * 3) + 1);
    let player = e.target.id;

    let ptext = document.querySelector("#player");
        ptext.textContent = e.target.textContent;

    let ctext = document.querySelector("#computer");
        ctext.textContent = numToRps(computer);
    console.log(computer);
    console.log(player);

console.log(whoWins(computer, player));

    if(playerwins == reqWins){const score = document.querySelector("#score"); score.textContent = "PLAYER WINS!"; disabled(); restart()}
    if(computerwins == reqWins){const score = document.querySelector("#score"); score.textContent = "COMPUTER WINS!"; disabled(); restart()}
}

