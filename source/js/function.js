

var title = "Vinod Soba";

var canvas = document.getElementById("canvas");
var g2d = canvas.getContext("2d");


g2d.fillStyle = "black";
g2d.fillRect(100,100,200,200);
g2d.fillText(title, canvas.width / 2, canvas.width, 120);
g2d.font = "30px Comic Sans MS";


var vinny = document.getElementById("vinny-container");
clearInterval(vinny);


var gName;
var g2d;
var width = 1900;
var height = 800;
var title = "Welcome to my Website Vinod Soba";
var title2 = "1.Resume";
var title3 = "2.Portfolio";
var count =0;
var x;
var y;
var framesPerSecond = 2;
var currentPos =0;
var MyImage = new Image();

/*
var dy = 400;
var dx = 780;
var dw = 235;
var dh = 200;
var sx = 10;
var sy = 0;
var sw = 215;
var sh = 190;

*/
//animate the sprite

var gameState = 0;

window.onload = function(){
	init();	
	scroll();
}


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

function drawPath(){
		
		MyImage.src = "images/vinny-slides.png";
		
		setTimeout(function(){ 

		
		g2d.clearRect(790, 300, 215,190);

		x = (count % 2) * 215;
		y = Math.floor(count / 7) * 190;
		g2d.drawImage(MyImage, x, y, 215, 190, 790, 300, 215, 190);

		if(count == 7){
			count = 0;
		}else{
			count++;
		}
		console.log(y);
	}, 5000 / framesPerSecond);

		

}

requestAnimationFrame(drawPath);





function onScrollEventHandler(ev)
    {
    	
        drawPath();
        //http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html#event-type-scroll
    } 



    var el=window;

    if(el.addEventListener)
        el.addEventListener('scroll', onScrollEventHandler, false);   
    else if (el.attachEvent)
        el.attachEvent('onscroll', onScrollEventHandler); 

function scroll(){
	var lastScroll = 0;
	
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
             console.log("up");
             
          }
          else {
             //Replace this with your function call for upward-scrolling
             console.log("down");
            var step=1
  			var vinny = document.getElementById("vinny-container").offsetLeft;
  			var x=10;
            document.getElementById("vinny-container").style.left= x + "px";
            for(x=0; x>step; x++){
              x++;
            	console.log(x);
              
            }
         
          }
          //Updates scroll position
          lastScroll = st;
      });
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

