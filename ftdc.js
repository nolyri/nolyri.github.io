/** modal windows **/
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
		x = document.getElementsByClassName("dealSlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		slidesIndex++;
		if (slidesIndex > x.length) {slidesIndex = 1}    
		x[slidesIndex-1].style.display = "block";
		
		setTimeout(carousel, 3000);
	}
	
	function carouselStatic() {
		x = document.getElementsByClassName("dealSlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		slidesIndex++;
		if (slidesIndex > x.length) {slidesIndex = 1}    
		x[slidesIndex-1].style.display = "block";
	}
	
	/** slide show button - click to switch**/
	function minusSlide() {
		var goBack = carouselStatic();
		x[slidesIndex-1].style.display = "block";
	}		
	
	function plusSlide() {
		var goForward = carouselStatic();
		x[slidesIndex-5].style.display = "block";		
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
	
/** form validation **/	
	function checkForm() 
	{
	  	if (checkUsername() &&  checkEmail() && checkPassword() && checkRepeatedPassword()){
			alert ("Sign up successfully!!!")
			return true;
		} else {
			alert ("Fail to sign up!!!!")
			return false;
		}
	}
	
/** check user typed in user name:
at least 5 characters
**/
	function checkUsername() {
		var username=document.sform.uname.value;
		if (username.length<5) {
			alert ("User name should be at least 5 characters.");
			document.sform.uname.value="";
			document.sform.uname.focus();
			return false;
		}
		return true;
	}

/** check user typed in a valid email:
not empty
has @
**/
	function checkEmail() {
		var email=document.sform.eml.value;
		if (email=="") {
			alert ("Please enter a valid email.");
			document.sform.eml.focus();
			return false;
		} 
		else if (!(email.includes("@"))) {
			alert ("Please enter a valid email.");
			document.sform.eml.value="";
			document.sform.eml.focus();
			return false;
		}
		return true;
	}
		
/** check user typed in password:
at least 8 characters
no special characters
**/
	function checkPassword() {
		var psw=document.sform.psw.value;
		var pattern=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/;
		if (psw.length<8) {
			alert ("Password should be at least 8 characters.");
			document.sform.psw.value="";
			document.sform.psw.focus();
			return false;
		}else if (pattern.test(psw)) {
			alert ("No special characters are allowed in password.");
			document.sform.psw.value="";
			document.sform.psw.focus();
			return false;
		}
		return true;
	}		

/** check user typed in repeated password:
repeated password should be equal to the password
**/
	function checkRepeatedPassword() {
		var rptpsw=document.sform.rptpsw.value;
		var intpsw=document.sform.psw.value;
		if (rptpsw!=intpsw){
			alert("Passwords must match!");
			document.sform.rptpsw.value="";
			document.sform.rptpsw.focus();
			return false;
		}
		return true;
	}	
	

		
		
		

		
		
		
		
		
	