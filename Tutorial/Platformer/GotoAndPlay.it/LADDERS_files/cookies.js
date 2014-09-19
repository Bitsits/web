/*
Cookies functions
*/


function setCookie(name,value) {

	var nextyear = new Date(); // set expiry-date to next Year

	nextyear.setFullYear(nextyear.getFullYear() +1);

	expiry = nextyear.toGMTString();
	
	document.cookie = name + "=" + value +"; expires=" + expiry + ";path=/";
	
	redirect('/index.php');

}

function redirect(URLStr) { location = URLStr; } 