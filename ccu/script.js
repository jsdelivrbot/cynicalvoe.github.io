// ==UserScript==
// @name     Un-disable the Register Button
// @version  1
// @grant    none
// @author   Cynicalvoe
// @include  https://selfservice.ccu.edu/Student/Planning/DegreePlans
// @require  https://cdn.jsdelivr.net/gh/namuol/cheet.js@master/cheet.min.js
// ==/UserScript==

cheet("shift", function(){
  var button = document.getElementById("register-button");
  button.removeAttribute('disabled')
  button.setAttribute('style', 'background-color: #54f271');
});