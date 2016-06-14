var vinny = document.getElementById("vinny-container");
var intro = document.getElementById("introduction");
var isVinnyStatic = true;


var count =0;
var x;
var y;
var framesPerSecond = 2;
var currentPos =0;
var w = window.innerWidth;
var h = window.innerHeight;



//animate the sprite

window.onload = function(){
	
	getWindow();
}

function getWindow() {  

   
    
}



function onScrollEventHandler(ev)
 {
    if (w >= 1925){
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

function scroll(){
	var lastScroll = 0;
	
      $(window).scroll(function(event){
          //Sets the current scroll position
          var st = $(this).scrollTop();
          //Determines up-or-down scrolling
          if (st > lastScroll){
             //Replace this with your function call for downward-scrolling
             console.log("up");
             var y=document.getElementById('vinny-container').offsetLeft;
            y = y - 100;
            document.getElementById('vinny-container').style.left= y + "px";
           
             
          }
          else {
             //Replace this with your function call for upward-scrolling
            console.log("down");
            
  			var x=document.getElementById('vinny-container').offsetLeft;
            x= x + 100;
            document.getElementById('vinny-container').style.left= x + "px";
          
            console.log(vinny);
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

