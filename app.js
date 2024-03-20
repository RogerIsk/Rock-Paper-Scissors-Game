let userScore = 0; // using let as a score number allows the score to change
let computerScore = 0; // and grow by 1 every timethe computer and the user make a point , if const was used the score wouldn't change
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");                    // creating variables and connecting them to the HTML file by id
const result_p = document.querySelector(".result > p");                      
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() { //this function finds the random number that we need to see if the user wins or not, or it's a draw
    const choices = ['r', 'p', 's']; // when the computer has the "random" answer from 1 to 3 it returns and numbers as the constants "r" "p " and "s" like 1=r, 2=p and 3=s
    const randomNumber = Math.floor(Math.random() * 3);             // 1. the computer can chose many random numbers from 0 to 3 max,  
    return choices[randomNumber]; //this line returns the answer    // 2. then it rounds the numbers and turns them into real numbers from 1 to 3: - (example) 0.001 becomes 1 and so on...
}

function convertToWord(letter) { // if the const "r" from the previous function was chosen the computer returns the answer as "Rock" if it's "p" is "Paper" and "s" for "Scissors"
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
    
/*function game(userChoice){ //the answer of the user is used here to 
    const computerChoice = getComputerChoice(); //we create a new const that is equal to the answer of the computer "Rock", "Paper" or "Scissors"
    console.log("user choice ==>" + userChoice); //this line shows the choice of the user "Rock", "Paper" or "Scissors" in the console log (only if this is the final output which is not)
    console.log("computer choice ==>" + computerChoice); //this line does the same but for the computer player - example for what shows in the console log: "Rock" (or Paper or etc..)
} this whole function became useles for the game after I finished it*/

function win(userChoice, computerChoice){ //this function adds 1 point to the score board of the user if the user wins
    const smallUserWord = "user".fontsize(3).sub(); //these kinds of lines make the words "user" and "comp" to appear smaller and pulled a bit to the bottom
    const smallCompWord = "comp".fontsize(3).sub();
    userScore++; //adds 1 point
    userScore_span.innerHTML = userScore; //this adds 1 new point to the html file (while the page is running)
    computerScore_span.innerHTML = computerScore; //does the same as previous line
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!🔥`; //this line changes the text
    document.getElementById(userChoice).classList.add('green-glow'); //this line makes the choise of the user to glow in green because he wins
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 200); //this is a timer for when the glow should stop
}

function lose(userChoice, computerChoice){ //this function adds 1 point to the score of the user if the user loses
    const smallUserWord = "user".fontsize(3).sub(); 
    const smallCompWord = "comp".fontsize(3).sub();
    computerScore++; // adds 1
    userScore_span.innerHTML = userScore; //does the same as previous line
    computerScore_span.innerHTML = computerScore; //this adds 1 new point to the html file (while the page is running)
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...💩`; //this line changes the text
    document.getElementById(userChoice).classList.add('red-glow'); //this line makes the choice of the user to glow in red because he loses
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 200); //this is a timer for when the glow should stop
}

function draw(userChoice, computerChoice){ //this function doesn't add any points to anyone when both player and computer end up as a tie "Paper vs Paper" and such
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    document.getElementById(userChoice).classList.add('grey-glow'); //this line makes the choice of the user to glow in grey because it's a draw
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 200); //this is a timer for when the glow should stop
}

function game(userChoice) { //this function decides who wins
    const computerChoice = getComputerChoice(); //this gets the answer from the computer so the function is able to compare both answers from the computer and user
    switch (userChoice + computerChoice) { // the switch statement is used to perform different actions based on different conditions
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sp":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break; //break is used if 1 of the 9 cases is true, they are grouped as 3 cases in 1 possible outcome because the number of variables and possible outcomes are 3 and 3 
    }
}

function main() {
    rock_div.addEventListener('click', () => game ("r")); //these 3 lines give value to "game" depending on the answer of the user
    paper_div.addEventListener('click', () => game ("p")); 
    scissors_div.addEventListener('click', () => game ("s"));
}

main();