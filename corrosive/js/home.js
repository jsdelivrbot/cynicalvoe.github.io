function checkCookie() {
	var c = getCookie("username");
	if(c == null){
		window.location="login.html";
	}else{
		var c2 = getCookie("creds");
		if(c2 == null){
			var div = document.getElementById("postheader");
			div.innerHTML = 'Posted by [Admin] on Oct 31, 2015 - 31 views - expires on Dec 31, 2015';
		}else{
			var div = document.getElementById("postheader");
			div.innerHTML = 'Username: Admin Password: FGt67*';
		}
		
		if(c == "Admin"){
			window.location="lv3/level3-gbh61.html"
		}else{
			alert("C0RR0SIV3 - Level 2");
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