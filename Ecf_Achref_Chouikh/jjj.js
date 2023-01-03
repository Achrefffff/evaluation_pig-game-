let scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {

    let dice = Math.floor(Math.random() * 6) + 1;


    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "image/dice" + dice + ".png";


    if (dice !== 1) {

      roundScore += dice;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {

      nextPlayer();
    }
  }
});


document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {

    scores[activePlayer] += roundScore;


    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];


    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.dispaly = "none";

      document
        .querySelector(".player-" + activePlayer + "-panneau")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panneau")
        .classList.remove("active");

      gamePlaying = false;
    } else {

      nextPlayer();
    }
  }
});

function nextPlayer() {
  roundScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  document.querySelector(".player-0-panneau").classList.toggle("active");
  document.querySelector(".player-1-panneau").classList.toggle("active");
  document.querySelector(".dice").style.display = "block";
}


document.querySelector(".btn-new").addEventListener("click", init);

function init() {

  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panneau").classList.remove("winner");
  document.querySelector(".player-1-panneau").classList.remove("winner");
  document.querySelector(".player-0-panneau").classList.remove("active");
  document.querySelector(".player-1-panneau").classList.remove("active");
  document.querySelector(".player-0-panneau").classList.add("active");
}