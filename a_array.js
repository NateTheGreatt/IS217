var links = new Array("http://www.google.com", "http://www.reddit.com", "http://www.facebook.com", "http://www.soundcloud.com");

function createList(array) {
	var a;
	var returnArray = new Array();

	for(var i=0; i<array.length; i++) {
		a = document.createElement('a');
		a.href = array[i];
		var tmp = array[i].replace("http://www.","");
		tmp = tmp.replace(".com","");
		a.textContent = tmp;
		returnArray.push(a);
	}
	
	return returnArray;
	
}

var list = createList(links);

for(var i=0;i<list.length;i++) {
	document.appendElement(list[i]);
}