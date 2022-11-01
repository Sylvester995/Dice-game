//jshint esversion: 6

const express = require ("express");
const bodyParser = require("body-parser");
const request = require ("request");


const app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/dice-game.html");
});

app.post("/", function(req, res){

    

})
















app.listen(3000, function(){
  console.log("Server is up and running on port 3000");
});


// function randomNumGenerator() {
//   return Math.floor(Math.random() * 6) + 1;
// }
//
// function rollDice() {
//   var diceImg1 = "images/dice" + randomNumGenerator() + ".png";
//   var diceImg2 = "images/dice" + randomNumGenerator() + ".png";
//
//   document.querySelector(".img1").setAttribute("src", diceImg1);
//   document.querySelector(".img2").setAttribute("src", diceImg2);
//
//   if(diceImg1 === diceImg2) {
//     document.querySelector("h1").innerHTML = "Draw!";
//   } else if(diceImg1 > diceImg2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
//   } else {
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
//   }
// }
