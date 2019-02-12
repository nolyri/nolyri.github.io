
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
	
/** modal calories calculator**/
	var modal = document.getElementById('id03')
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
	
	
/** slides show for deal page**/
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

/** calories calculator**/	
	function calCalculator() {
		var calTotal, bBeverage, bMain, bSides, lBeverage, lMain, lSides, dBeverage, dMain, dSides;
		var calTotal = document.getElementById('calNumber');

		var bBeverage = parseInt(document.getElementById('B1').value);
		var bMain = parseInt(document.getElementById('B2').value);
		var bSides = parseInt(document.getElementById('B3').value);

		var lBeverage = parseInt(document.getElementById('L1').value);
		var lMain = parseInt(document.getElementById('L2').value);
		var lSides = parseInt(document.getElementById('L3').value);
		
		var dBeverage = parseInt(document.getElementById('D1').value);
		var dMain = parseInt(document.getElementById('D2').value);
		var dSides = parseInt(document.getElementById('D3').value);
		
		calTotal.value = (bBeverage+bMain+bSides + lBeverage+lMain+lSides + dBeverage+dMain+dSides)*2 ;
	}	
	
	
	
	
/** form validation for reservation page**/
	/** reservation information is not empty **/
	function validateForm() {
		var formEntry = document.forms[resv][email].value
		if (formEntry == "") {
			alert ("Email must be filled outt");
			return false;
		}
	}	
	
	/** reservation & subscribe email: 
	content is not empty
	format is correct **/

	


		
		
		

		
		
		
		
		
	