
var alienSpaceShip = document.getElementById("alien-spacecraft-1");


window.onload = function(){
	animateAlienSpaceship();

}
//animate the sprite



function animateAlienSpaceship(alienSpaceShip){
	
	var alienSpaceShip = document.getElementById("alien-spacecraft-1");

	alienSpaceShip.addEventListener("onscroll", function(){

		alienSpaceShip.style.animation = "aliens 6s linear";
		alienSpaceShip.style.left = "10px";
	});


	
}

