function checkCookie() {
	var c = getCookie("username");
	if(c == null){
		window.location="index.html";
	}else{
		if(c == "Gf4Kz8GB"){
			alert("C0RR0SIV3 - Level 4");
		}else{
			window.location="index.html";
		}
	}
} 

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(cookietext) {
  document.cookie=cookietext+";";
}