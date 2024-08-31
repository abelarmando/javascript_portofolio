var randomNumber1 = Math.floor(Math.random() * 6 + 1);

var randomdiceimage = "dice" + randomNumber1 + ".png";

var randomdicesource = "images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomdicesource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomdiceimage2 = "dice" + randomNumber2 + ".png";

var randomdicesource2 = "images/" + randomdiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomdicesource2);

// document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png" );

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML = "draw";
}


// document.querySelectorAll("img")[0].setAttribute("src", "images/randomdiceimage");

//dice 2

// document.querySelector(".img2").setAttribute("src", "images/dice1.png")

// document.querySelector(".img2").setAttribute("src", "images/dice2.png")

// document.querySelector(".img2").setAttribute("src", "images/dice3.png")

// document.querySelector(".img2").setAttribute("src", "images/dice4.png")

// document.querySelector(".img2").setAttribute("src", "images/dice5.png")

// document.querySelector(".img2").setAttribute("src", "images/dice6.png")