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
	layerHorizontal1Animtion();
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
	}else{
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


function animateBars()
{
	for (var i=0; i<barArray.length; i++)
	{
		$(barArray[i]).stop().delay(i * 300).animate({top: [plantTargetTopObjectArray[i].offsetTop, 'easeOutElastic']}, 800, function() {});
	}
}

function layerHorizontal1Animtion(e){

	var treeContainer1 = document.getElementById('tree1');
	var vinnyContainer = document.getElementById('vinny-container');
	var sunContainer = document.getElementById('sun-1');
	

	if(vinnyContainer){
		$(window).scroll(function() {
   			var hT = $(treeContainer1).offset().left,
       				hH = $('tree').outerHeight(),
       				wH = $(window).height(),
       				vinnyContainerLeft = $(this).scrollLeft();
    				console.log(hT, vinnyContainerLeft);
	   		if (vinnyContainerLeft >= 2010){
	   			
	   			sunContainer.style.display="block";
	   			treeContainer1.style.display = "block";
	   			console.log("yay");
	   		}
   		});
	}else{
		
		console.log("nay");
	}
}

document.onscroll = layerHorizontal1Animtion;

function onScrollEventHandler(ev)
 {
    if (w >= 125){
   		scroll();   		  	
    }else{  console.log(innerHTML = "Width: " + w + "<br>Height: " + h); }
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


