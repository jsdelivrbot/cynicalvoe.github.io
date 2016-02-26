function checkCookie() {
	var c = getCookie("username");
	if(c == null){
		window.location="login.html";
	}else{
		alert("Welcome Aboard");
	}
} 

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(cookietext) {
  document.cookie=cookietext+";";
  alert("ERROR: Deja Vu");
}