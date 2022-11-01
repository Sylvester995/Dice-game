function randomNumGenerator() {
  return Math.floor(Math.random() * 6) + 1;
}

function rollDice() {
  var diceImg1 = "images/dice" + randomNumGenerator() + ".png";
  var diceImg2 = "images/dice" + randomNumGenerator() + ".png";

  document.querySelector(".img1").setAttribute("src", diceImg1);
  document.querySelector(".img2").setAttribute("src", diceImg2);

  if(diceImg1 === diceImg2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if(diceImg1 > diceImg2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
}
