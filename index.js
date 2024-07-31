var randomNumber = Math.floor(Math.random() * 6 +1);
var randomImgDice = "dice" + randomNumber +".png";
var radomImgSource = "images/" + randomImgDice;

var Image1 = document.querySelectorAll("img")[0];

Image1.setAttribute("src",radomImgSource);

var randomNumber2 = Math.floor(Math.random() * 6+1);
var ramdomdiceImg = "dice"+randomNumber2+".png";
var radomImgSource2 = "images/"+ramdomdiceImg;

var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",radomImgSource2);

if(randomNumber>randomNumber2){
document.querySelector("h1").innerHTML="Player1🥇";
}
else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player2🥇";
}
else{
    document.querySelector("h1").innerHTML=" Match Draw";
}
