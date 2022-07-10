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
    for(let i = 0; i < 5; i++)
    {
        if(playRound() == "Computer Wins")
        {
            Count++;
        }  
    }
    if(Count >=3){return "Computer wins";}
    if(Count < 3){return "Player wins";}
    if(Count == 0){return "Draw";}
}