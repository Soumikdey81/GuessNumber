"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

let displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //player did not input
  if (!guess) {
    displayMessage("⛔️ No number!");
  }
  //player lost
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "🤦‍♂️ Too high!" : "🤦‍♂️ Too low!");
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage("💥 You lost the game!");
    }
  }
  //player win
  else {
    displayMessage("🎉 Correct number!");
    displayNumber(secretNumber);
    //in tailwindcss style manipulation
    document.querySelector("main").classList.add("bg-green-500");
    document.querySelector(".guess").classList.add("bg-green-500");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highScore").textContent = highScore;
    }
  }
});

//again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = " ";
  document.querySelector("main").classList.remove("bg-green-500");
  document.querySelector(".guess").classList.remove("bg-green-500");
});
