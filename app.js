/*
DOM Manipulation
1. Select 
2. Manipulate
*/
let userScore = 0;
let computerScore = 0;
// DOM Variables 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Function, obtains random computer choice.
function getComputerChoice () {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber]; //Returns random element from the choices array.
}


// Function, converts letters into  words.
function convertToWord(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors" 
}


// Win Function - Incrementation for UsersScore & CSS animations - Green.
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`; 
    userChoice_div.classList.add("green-glow"); //CSS Glow.
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}


// Lose Function - Incrementation for CompScore & CSS animations - Red.
function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "computer".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} looses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
    }


// Function - Draw no incrementation & CSS animations - Grey.
function draw(userChoice, computerChoice) {
        const smallUserWord = "user".fontsize(3).sub();
        const smallCompWord = "computer".fontsize(3).sub();
        const userChoice_div = document.getElementById(userChoice);
        result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Its a draw!`;    
        userChoice_div.classList.add("grey-glow");
        setTimeout(() => userChoice_div.classList.remove("grey-glow"), 300);
    }


// Comparisson function to decides who wins.
function game(userChoice) { 
   const computerChoice = getComputerChoice(); 
   switch (userChoice + computerChoice) {
    case "rs": 
    case "pr":
    case "sp":
        win(userChoice, computerChoice); 
        break;
    case "rp": 
    case "ps": 
    case "sr": 
        lose(userChoice, computerChoice); 
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
   }
}
   
function main() {
    rock_div.addEventListener("click", () => game ("r"));
    paper_div.addEventListener("click", () => game ("p"));
    scissors_div.addEventListener("click", () => game ("s"));
    
}

main();

