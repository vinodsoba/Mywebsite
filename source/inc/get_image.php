<html>
     <body>
		
	 <form method="GET" action=" " >
	 	<input type="file" name="your_imagename">
	 	<input type="submit" name="display_image" value="Display">
	 </form>

     </body>
</html>


<?php

$getname = $_GET[' name'];

echo "< img src = fetch_image.php?name=".$getname." width=200 height=200 >";

?>