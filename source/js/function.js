window.onload = function(){

var width = 1900;
var height= 1000;
var title = "Vinod Soba";

var canvas = document.getElementById("canvas");
var g2d = canvas.getContext("2d");


g2d.fillStyle = "black";
g2d.fillRect(100,100,200,200);
g2d.fillText(title, canvas.width / 2, canvas.width, 120);
g2d.font = "30px Comic Sans MS";




}