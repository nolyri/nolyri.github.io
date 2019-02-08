
/** modal sign in window - close **/
	var modal = document.getElementById('id01')
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

/** modal sign up window - close **/	
	var modal = document.getElementById('id02')
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
/** slides show **/
var slidesIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("dealSlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	slidesIndex++;
	if (slidesIndex > x.length) {slidesIndex = 1}    
	x[slidesIndex-1].style.display = "block";  
	setTimeout(carousel, 2000); 
}

		
		
		

		
		
		
		
		
	