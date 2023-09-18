let mainContainer = document.querySelector(".container");
let newPageContainer = document.querySelector(".next-page-container");
let scoreboarddiv = document.querySelector(".scoreboard-div");

let playgameDiv = document.querySelector(".playgame-div");
let resultDiv = document.querySelector(".result-div");
let ruleDiv = document.querySelector(".rule-div");

let resRockDiv = document.querySelector(".res-rock-div");
let resPaperDiv = document.querySelector(".res-paper-div");
let resScissorDiv = document.querySelector(".res-scissor-div");
let resdisplayhead = document.querySelector(".result-display-head");
let resdisplaypara = document.querySelector(".result-display-para");

let compresRockDiv = document.querySelector(".comp-res-rock-div");
let compresPaperDiv = document.querySelector(".comp-res-paper-div");
let compresScissorDiv = document.querySelector(".comp-res-scissor-div");

let computerScoreHeading = document.querySelector(".computer-score");
let playerScoreHeading = document.querySelector(".your-score");

let playAgainBtn = document.querySelector(".play-again-btn");
let replyBtn = document.querySelector(".replay-btn");
let nextBtn = document.querySelector(".next-btn");

let playerscore = parseInt(localStorage.getItem("playerscore")) || 0;
let computerscore = parseInt(localStorage.getItem("computerscore")) || 0;

let playerChoice;
let computerChoice;


startGame();

function startGame() {
    computerChoice = calComputerChoice();
    localStorage.setItem("playerscore", localStorage.getItem("playerscore"));
    localStorage.setItem("computerscore", localStorage.getItem("computerscore"));
    playerScoreHeading.innerText = playerscore;
    computerScoreHeading.innerText = computerscore;
}

function imageclick(val) {
    playgameDiv.style.display = "none";
    if (val == "rock") {
        playerChoice = val;
    }
    else if (val == "paper") {
        playerChoice = val;
    }
    else if (val == "scissor") {
        playerChoice = val;
    }
    playgameDiv.style.display = "none";
    displayresult();
}

function calComputerChoice() {
    let randchoice = Math.floor(Math.random() * 3) + 1;
    if (randchoice == 2) {
        return "rock"
    }
    else if (randchoice == 3) {
        return "paper";
    }
    return "scissor";
}

function displayresult() {
    resultDiv.style.display = "flex";
    let result = findwinnner(playerChoice, computerChoice);

    //player result display 
    if (playerChoice == "rock") {
        if (result == "You win!") {
            resRockDiv.classList.add("activediv");
            resPaperDiv.classList.remove("activediv");
            resScissorDiv.classList.remove("activediv");
        }
        else {
            resRockDiv.classList.add("active");
            resPaperDiv.classList.remove("active");
            resScissorDiv.classList.remove("active");
        }
    }
    else if (playerChoice == "scissor") {
        if (result == "You win!") {
            resScissorDiv.classList.add("activediv");
            resRockDiv.classList.remove("activediv");
            resPaperDiv.classList.remove("activediv");
        }
        else {
            resScissorDiv.classList.add("active");
            resRockDiv.classList.remove("active");
            resPaperDiv.classList.remove("active");
        }
    }
    else if (playerChoice == "paper") {
        if (result == "You win!") {
            resPaperDiv.classList.add("activediv");;
            resRockDiv.classList.remove("activediv");
            resScissorDiv.classList.remove("activediv");
        }
        else {
            resPaperDiv.classList.add("active");;
            resRockDiv.classList.remove("active");
            resScissorDiv.classList.remove("active");
        }
    }

    // computer result display
    if (computerChoice == "rock") {
        if (result == "You lose!") {
            compresRockDiv.classList.add("activediv");
            compresPaperDiv.classList.remove("activediv");
            compresScissorDiv.classList.remove("activediv");
        }
        else {
            compresRockDiv.classList.add("newactive");
            compresPaperDiv.classList.remove("newactive");
            compresScissorDiv.classList.remove("newactive");
        }

    }
    else if (computerChoice == "scissor") {
        if (result == "You lose!") {
            compresScissorDiv.classList.add("activediv");
            compresRockDiv.classList.remove("activediv");
            compresPaperDiv.classList.remove("activediv");
        }
        else {
            compresScissorDiv.classList.add("newactive");
            compresRockDiv.classList.remove("newactive");
            compresPaperDiv.classList.remove("newactive");
        }

    }
    else if (computerChoice == "paper") {
        if (result == "You lose!") {
            compresPaperDiv.classList.add("activediv");;
            compresRockDiv.classList.remove("activediv");
            compresScissorDiv.classList.remove("activediv");

        }
        else {
            compresPaperDiv.classList.add("newactive");;
            compresRockDiv.classList.remove("newactive");
            compresScissorDiv.classList.remove("newactive");
        }
    }
    incrementScore(result);
}

function findwinnner(playerSelection, computerSelection) {
    let result;
    if (computerSelection == "rock" && playerSelection == "rock") {
        result = "Tie!";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        result = "You win!";
    } else if (computerSelection == "rock" && playerSelection == "scissor") {
        result = "You lose!";
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        result = "Tie!";
    } else if (computerSelection == "scissor" && playerSelection == "scissor") {
        result = "Tie!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        result = "You lose!";
    } else if (computerSelection == "scissor" && playerSelection == "rock") {
        result = "You win!";
    } else if (computerSelection == "paper" && playerSelection == "scissor") {
        result = "You win!";
    } else if (computerSelection == "scissor" && playerSelection == "paper") {
        result = "You lose!";
    }
    return result;
}

function incrementScore(res) {
    if (res == "You win!") {
        playerscore = playerscore + 1;
        localStorage.setItem("playerscore", playerscore)
        playerScoreHeading.innerText = playerscore;
        resdisplayhead.innerText = "YOU WIN";
        resdisplaypara.innerText = " AGAINST PC";
        nextBtn.classList.add("active-next-btn");
        replyBtn.style.display = "none";
        playAgainBtn.style.display = "block";
    }
    else if (res == "You lose!") {
        computerscore = computerscore + 1;
        localStorage.setItem("computerscore", computerscore)
        computerScoreHeading.innerText = computerscore;
        resdisplayhead.innerText = "YOU LOST";
        resdisplaypara.innerText = " AGAINST PC";
        replyBtn.style.display = "none";
        playAgainBtn.style.display = "block";
    }
    else {
        resdisplayhead.innerText = "TIE UP";
        resdisplaypara.innerText = "";
        replyBtn.style.display = "block";
        playAgainBtn.style.display = "none";
    }
}


function rulebtnclick() {
    ruleDiv.classList.add("activerule");
}

function closerulediv() {
    ruleDiv.classList.remove("activerule");
}

function newpage() {
    playgameDiv.style.display = "none";
    scoreboarddiv.style.display = "none";
    resultDiv.style.display = "none";
    newPageContainer.style.display = "block";
    nextBtn.classList.remove("active-next-btn");
}

function returntogame() {
    scoreboarddiv.style.display = "flex";
    playgameDiv.style.display = "flex";
    resultDiv.style.display = "none";
    newPageContainer.style.display = "none";
    nextBtn.classList.remove("active-next-btn");
    reset();
}

function playagain() {
    playgameDiv.style.display = "flex";
    resultDiv.style.display = "none";
    computerChoice = calComputerChoice();
    nextBtn.classList.remove("active-next-btn");
    reset();
}

function reset() {

    resRockDiv.classList.remove("active");
    resPaperDiv.classList.remove("active");
    resScissorDiv.classList.remove("active");

    resRockDiv.classList.remove("activediv");
    resPaperDiv.classList.remove("activediv");
    resScissorDiv.classList.remove("activediv");

    compresRockDiv.classList.remove("activediv");
    compresPaperDiv.classList.remove("activediv");
    compresScissorDiv.classList.remove("activediv");

    compresRockDiv.classList.remove("newactive");
    compresPaperDiv.classList.remove("newactive");
    compresScissorDiv.classList.remove("newactive");

}