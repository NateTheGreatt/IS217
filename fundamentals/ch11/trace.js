function first() {
	alert("calling second()");
	second();
}
function second() {
	alert("calling third()");
	third();
}
function third() {
	alert("calling fourth()");
	fourth();
}
function fourth() {
	header.innerHTML = ("Header has been clicked");
}

var header = document.getElementById("header");
header.onclick = function() {
	alert("Calling first()");
	first();
}