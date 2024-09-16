"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤦‍♂️ Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤦‍♂️ Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "💥 You lost the game!";
    }
  } else {
    document.querySelector(".message").textContent = "🎉 Correct number!";
    document.querySelector(".number").textContent = secretNumber;
    //in tailwindcss style manipulation
    document.querySelector("main").classList.add("bg-green-500");
    document.querySelector(".guess").classList.add("bg-green-500");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector("main").classList.remove("bg-green-500");
  document.querySelector(".guess").classList.remove("bg-green-500");
});
