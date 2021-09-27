let randomnum1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomnum1 + ".png");

let randomnum2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomnum2 + ".png");

if(randomnum1 > randomnum2){
  document.querySelector("h1").innerHTML = "Player1 wins";
}
else if(randomnum1 < randomnum2){
  document.querySelector("h1").innerHTML = "Player2 wins";
}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
