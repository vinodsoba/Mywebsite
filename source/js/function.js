window.onload = init;

var gName;
var g2d;
var width = 1900;
var height = 800;
var title = "Welcome to my Website Vinod Soba";
var title2 = "1.Resume";
var title3 = "2.Portfolio";
//animate the sprite
var vinny = new Image;
vinny.src = "../source/images/vinny-slides.png";

function sprite(options){

	var that = {};

	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;



		that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width,
           that.height);
    };

	return that;
}

var containerVinny = sprite({
	width: 240,
	height: 200,
	image: vinny

});



g2d.drawImage(vinny, 200,200);
draw();

var gameState = 0;

function init(){
	gName = document.getElementById("canvas");
	gName.width = width;
	gName.height = height;

	g2d = gName.getContext("2d");
	g2d.imageSmoothingEnabled = false;
	g2d.webkitImageSmoothingEnabled = false;
	g2d.mozImageSmoothingEnabled = false;

	console.log("Game initialised");
	draw();
}

function draw(){
	if(gameState == 0){
		g2d.font = "40px Segoe ui";
		// Create gradient
		var gradient=g2d.createLinearGradient(0,0,gName.width,0);
		gradient.addColorStop("0.5","#CDCFD1");
		gradient.addColorStop("1.0","#8C8E90");
		g2d.fillStyle = gradient;
		g2d.fillText(title, (width / 2) - (g2d.measureText(title).width / 2), 150);		
		

		g2d.font = "30px Segoe ui";
		// Create gradient
		var gradient=g2d.createLinearGradient(0,0,gName.width,0);
		gradient.addColorStop("0.5","#CDCFD1");
		gradient.addColorStop("1.0","#8C8E90");
		g2d.fillStyle = gradient;
		g2d.fillText(title2, (width / 2) - (g2d.measureText(title2).width / 2), 190);
		g2d.fillText(title3, (width / 2) - (g2d.measureText(title3).width / 2), 230);
	}


	if(gameState == 1){
		
		g2d.font = "30px Segoe ui";
		// Create gradient
		var gradient=g2d.createLinearGradient(0,0,gName.width,0);
		gradient.addColorStop("0.5","#CDCFD1");
		gradient.addColorStop("1.0","#8C8E90");
		g2d.fillStyle = gradient;
		g2d.fillText("Interactive Resume", (width / 2) - (g2d.measureText("Interactive Resume").width / 2), 150);
		
	}

}

/*


$(document).ready(function(){
	$("button#first").click(function(e){
		
		var val1 = $('#first').val();
		$.ajax({
			type: 'POST',
			url: 'inc/connect.php',
			data: { first: val1 },
			success: function(data){
			$('#display').html(data);
			}
		});
		event.preventDefault();
	});

});


$(document).ready(function(){
	$("button#second").click(function(e){
		var val2 = $('#second').val();
		$.ajax({
			type: 'POST',
			url: 'inc/display_image.php',
			data: { second: val2 },
			success: function(data){
				
				$('#display').html(data);
			}
		});
		event.preventDefault();
	});

});

$(document).ready(function(){
	$("button#third").click(function(e){	
		var val3 = $('#third').val();
		$.ajax({
			type: 'POST',
			url: 'inc/get_ferrari.php',
			data: { third: val3},
			success: function(data){
			$('#img2').html(data);
			}
		});
		event.preventDefault();
	});

});


$(document).ready(function(){
	$("button#fourth").click(function(e){
		var val4 = $('#fourth').val();
		$.ajax({
			type: 'POST',
			url: 'inc/get_ferrari_img.php',
			data: { fourth: val4 },
			success: function(data){			
				$('#img2').html(data);
			}
		});
		event.preventDefault();
	});

});



function my_function(){
var myimage = document.getElementById("myimage");
if (myimage.addEventListener) {
	// IE9, Chrome, Safari, Opera
	myimage.addEventListener("mousewheel", MouseWheelHandler, false);
	// Firefox
	myimage.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else myimage.attachEvent("onmousewheel", MouseWheelHandler);
}

function MouseWheelHandler(e) {

	if(myimage){
		
		
		myimage.addEventListener("onmousewheel", MouseWheelHandler, false);
		document.getElementById("myimage").style.position = "relative";
		document.body.scrollleft = "100px";
		console.log(myimage);
	}
	// cross-browser wheel delta
	var e = window.event || e; // old IE support
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	myimage.style.width = Math.max(50, Math.min(800, myimage.width + (30 * delta))) + "px";

	return false;
}

function doSomething() {
	function placeDiv(x_pos, y_pos) {
  var d = document.getElementById('myimage');
  d.style.position = "absolute";
  d.style.left = x_pos+'px';
  d.style.top = y_pos+'px';
}
}
*/