let userscore =0;
let computerscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);  /////////////////////=+/////////////////
    return options[randIdx];
  };

  const drawGame = () =>{

    msg.innerText = "You draw .";
    msg.style.backgroundColor = "brown";
  }

  const showWinner = (userWin , userChoice , compChoice ) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        compScorePara.innerText = computerscore;
        msg.innerText = `You lose ! ${compChoice} beats ${userChoice} `;
        msg.style.backgroundColor = "red";

    }
  };

const playGames = (userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
      drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false :true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false :true;
        }
        else{
         userWin = compChoice === "rock" ?false :true;
        }
        showWinner(userWin , userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
   console.log("choice was clicked",userChoice);
   playGames(userChoice);
    });
});
