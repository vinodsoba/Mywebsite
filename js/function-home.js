var alienSpaceShip = document.getElementById("alien-spacecraft-1");
var vinnyContainer = document.getElementById("vinny-container");


window.onload = function(){
	
	animateAlienSpaceship();
	vinnyContainerHide();
	vinnyDisplayPort();
	

}
//animate the sprite



function animateAlienSpaceship(){
		var alienSpaceShip = document.getElementById("alien-spacecraft-1");	
		alienSpaceShip.style.animation = "aliens 10s ease-in infinite";
}


function vinnyContainerHide(){
	var textForwardContainer = document.getElementById("text-forward-a");

	textForwardContainer.addEventListener("mouseover", showVinnyContainer, false);
		
		function showVinnyContainer(){
		
			var vinnyContainer = document.getElementById("vinny-container");
			$("#vinny").removeClass("vinny1");
				$("#vinny").addClass("vinnyLearnMore");	
			
				window.setTimeout(function(){ 
        			window.location.href = "http://localhost/mywebsite/source/";
        		}, 2000);
    			
			

		}
	
}


function vinnyDisplayPort(){
	var textForwardContainer = document.getElementById("text-forward-b");

	textForwardContainer.addEventListener("mouseover", showVinnyContainer, false);
		
		function showVinnyContainer(){
		
			var vinnyContainer = document.getElementById("vinny-container");
			$("#vinny").removeClass("vinny1");
				$("#vinny").addClass("vinnyPortfolio");	
			
				//window.setTimeout(function(){ 
        			//window.location.href = "http://localhost/mywebsite/source/";
        		//}, 2000);
    			
			

		}
	
}



			

