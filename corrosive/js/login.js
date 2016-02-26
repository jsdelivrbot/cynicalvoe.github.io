//Take note, padawan

function onstart() {
	var invalid = document.getElementById('test');
	invalid.style.display = 'none';
}

function check() {
	var user = document.loginform.usr.value;
	var pass = document.loginform.psw.value;
	var valid = false;
	
	var txt;
	
	if(window.XMLHttpRequest){
		 txt = new XMLHttpRequest();
	}else{
		txt = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	var allLines = [];
	var usrn = [];
	var pswd = [];
	
	txt.onreadystatechange=function() {
		if(txt.readyState==4 && txt.status==200){
			var alltext = txt.responseText;
			allLines = alltext.split(/\r\n|\n/);
			
			usrn = allLines[0].split(',');
			pswd = allLines[1].split(',');
			
			for (var i=0; i <usrn.length; i++) {
				if ((user == usrn[i]) && (pass == pswd[i])) {
					valid = true;
					break;
				}
			}
			
			if(valid) {
				document.cookie="username="+user+";";
				window.location = "home.html";
				return false;
			}else{
				var invalid = document.getElementById('test');
				invalid.style.display = 'block';
			}
		}
	}
	
	txt.open("GET", "data/c.txt", false);
	txt.send();
}