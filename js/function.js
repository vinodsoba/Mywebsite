var cactusContainer = document.getElementById("cactus-1");
var vinny = document.getElementById("vinny-container");
var intro = document.getElementById("introduction");
var flyingAirplane = document.getElementById("aeroplane-slides-1");
var alienSpaceShip = document.getElementById("alien-spacecraft-1");
var aeroplaneArray = new Array();
aeroplaneArray.push(flyingAirplane);

var barChart = document.getElementById("bar-chart-1"); 
var barChart2 = document.getElementById("bar-chart-2"); 
var barArray = new Array();
var count =0;
var x;
var y;
var framesPerSecond = 2;
var currentPos =0;
var w = window.innerWidth;
var h = window.innerHeight;
var axisPositionTopObject = new Array();
axisPositionTopObject.push(barChart, barChart2);

var treeContainer = document.getElementById("tree1");
treeContainerArray = new Array(treeContainer);
var layerHorizontal = document.getElementsByTagName("div");
layerHorizontal = new Array();
horizontalContainerArray = new Array();

//animate the sprite
window.onload = function(){	
	cactus();
	storeDivs();
	setLayerHorizontal();
	
	animateMoon();

}



function storeDivs()
{
	var treeContainerArray = document.getElementById("tree1");
	treeContainerArray = new Array();
	var layerHorizontal = document.getElementsByTagName("div");


    for (var i=0; i<layerHorizontal.length; i++)
	{
        if (layerHorizontal[i].getAttribute("class") == "tree")
		{
			treeContainerArray.push(layerHorizontal[i]);
        }
		
		if (layerHorizontal[i].getAttribute("class") == "horizontal")
		{
			horizontalContainerArray.push(layerHorizontal[i]);
        }
    }
}


function setLayerHorizontal(){
	
	if(horizontalContainerArray){

		horizontalContainerArray[2].style.width = "600px";

		console.log(horizontalContainerArray[2]);
	}
	else {
		console.log("false");
	}


}



function cactus(){

	var cactusContainer = document.getElementById("cactus-1");		
	if(w >= 2000){

			cactusContainer.style.animation ="cactus 2s ease-in";
			
		}
		$(this).addClass('pause');

			
}
console.log(w);



function animateBars()
{
	for (var i=0; i<barArray.length; i++)
	{
		$(barArray[i]).stop().delay(i * 300).animate({top: [plantTargetTopObjectArray[i].offsetTop, 'easeOutElastic']}, 800, function() {});
	}


}

function isVinnyStatic(e){

	var layerHorizontal1 = document.getElementById('layer-horizontal-1');
	var x = document.getElementById('vinny-container');
	
	layerHorizontal1 = document.width;
	
	vinnyLeft = e.offsetLeft;

	console.log(vinnyLeft);
	if (vinnyLeft){
	
		console.log(layerHorizontal1.document.width());
		console.log("yay");
	}
	else{
		console.log(x);
		console.log("nay");
	}
}

document.onscroll = isVinnyStatic;

function onScrollEventHandler(ev)
 {
    if (w >= 125){
   		scroll(); 
   		  	
    }
    else{  console.log(innerHTML = "Width: " + w + "<br>Height: " + h); }
   
    //http://dev.w3.org/2006/webapi/DOM-Level-3-Events/html/DOM3-Events.html#event-type-scroll
} 


var el=window;

if(el.addEventListener)
     el.addEventListener('scroll', onScrollEventHandler, false);   
else if (el.attachEvent)
     el.attachEvent('onscroll', onScrollEventHandler); 


function animateMoon(){

	var moon = document.getElementById("moon-1");

	if(moon){
		console.log(moon);
		$(moon).addClass("moon");
		
		
	}
}





function scroll(){
	var vinnyContainer = document.getElementById("vinny-container");
	var vinnyContainerTimer = 0;
	vinnyContainerArray = new Array();
	

		$(window).scroll(function(event){
		var scrollPosCur = $(this).scrollLeft();
		vinnyContainer.addEventListener("scroll", onScrollEventHandler, false);

		if (vinnyContainerTimer > scrollPosCur){
			
				
			vinnyContainerTimer += 1;
			
			$(vinnyContainer).stop().animate({"marginLeft": ($(window).scrollLeft() + 10) + "px"}, "ease-in");
			console.log("up");
			
		}
		if(vinnyContainerTimer < scrollPosCur){

				vinnyContainerTimer -= 1;
				$(vinnyContainer).stop().animate({"marginLeft": ($(window).scrollLeft() + 10) + "px"}, "ease-in");
				console.log("down");

				

		}
		


		
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

