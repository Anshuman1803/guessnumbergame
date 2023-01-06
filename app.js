"use Strict";

let correctGuess = document.getElementById("correctGuess");
let inputNumber = document.getElementById("inputNumber");
let checkGuess = document.getElementById("checkGuess");
let Message = document.getElementById("Message");
let Score = document.getElementById("Score");
let HighestScore = document.getElementById("HighestScore");
let messageBox = document.getElementById("messageBox");
let titleMsg = document.getElementById("titleMsg");
let msgInfo = document.getElementById("msgInfo");
let restartBtn = document.getElementById("restartBtn");

function SecretNumberGenerator() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  correctGuess.textContent = secretNumber;
  return secretNumber;
}
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let initialScore = 20;
let FinalHighScore = 0;

checkGuess.addEventListener("click", () => {
  let guess = Number(inputNumber.value);
  if (!guess) {
    Message.textContent = "⛔ No Number.";
    inputNumber.focus();
  } else if (guess > 20) {
    Message.textContent = "🙏Guess Between 1 And 20 Only.";
    inputNumber.value = "";
    inputNumber.focus();

    //Winning Code
  } else if (guess === secretNumber) {
    Message.textContent = "🎉Congrates You Guess The Correct Number.";
    checkGuess.style.visibility = "hidden";
    correctGuess.textContent = secretNumber;

    if (initialScore > FinalHighScore) {
      FinalHighScore = initialScore;
      HighestScore.textContent = FinalHighScore;
    }

    //When guess is To high
  } else if (guess > secretNumber) {
    if (initialScore > 0) {
      Message.textContent = "📈 Too High.";
      initialScore--;
      Score.textContent = initialScore;
    } else {
      Message.textContent = "🥹 You Lost The Game.";
      checkGuess.style.visibility = "hidden";
      correctGuess.textContent = secretNumber;
    }
    //When guess is ToLow
  } else if (guess < secretNumber) {
    if (initialScore > 0) {
      Message.textContent = "📉 Too Low.";
      initialScore--;
      Score.textContent = initialScore;
    } else {
      Message.textContent = "🥹 You Lost The Game.";
      checkGuess.style.visibility = "hidden";
    }
  }
});

restartBtn.addEventListener("click", () => {
  checkGuess.style.visibility = "visible";
  Message.textContent = "Start Guessing🤔🤔...";
  inputNumber.value = "";
  inputNumber.focus();
  initialScore = 20;
  Score.textContent = initialScore;
  secretNumber = SecretNumberGenerator();
  correctGuess.textContent = "?";
});
