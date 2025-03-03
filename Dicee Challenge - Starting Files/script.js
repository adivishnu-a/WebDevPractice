let randomNumber1 = Math.ceil(Math.random() * 6);
let randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomDiceImage1);

let randomNumber2 = Math.ceil(Math.random() * 6);
let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", randomDiceImage2);