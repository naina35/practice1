let player1=Math.floor(6*Math.random())+1;
var element1 = document.querySelector(".img1");
var element2 = document.querySelector(".img2");
element1.src = "images/dice" + player1 + ".png"; // Use the random value for the dice image
// if (player1==1) element1.setAttribute("src","images\\dice1.png");
// else if (player1==2) element1.setAttribute("src","images\\dice2.png");
// else if (player1==3) element1.setAttribute("src","images\\dice3.png");
// else if (player1==4) element1.setAttribute("src","images\\dice4.png");
// else if (player1==5) element1.setAttribute("src","images\\dice5.png");
// else if (player1==6) element1.setAttribute("src","images\\dice6.png");
let player2=Math.floor(6*Math.random())+1;
element2.src = "images/dice" + player2 + ".png"; // Use the random value for the dice image
// if (player2==1) element2.setAttribute("src","images\\dice1.png");
// else if (player2==2) element2.setAttribute("src","images\\dice2.png");
// else if (player2==3) element2.setAttribute("src","images\\dice3.png");
// else if (player2==4) element2.setAttribute("src","images\\dice4.png");
// else if (player2==5) element2.setAttribute("src","images\\dice5.png");
// else if (player2==6) element2.setAttribute("src","images\\dice6.png");
let str="";
if (player1>player2)
{ str=str+"player 1 wins";}
else if (player1===player2){str=str+"draw"}
else { str=str+"player 2 wins"}
var heading=document.querySelector("h1");
heading.innerText=str;