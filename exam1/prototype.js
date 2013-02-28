var item = function() {
	this.id = Math.random()*(10-1)+1;
}

item.prototype = {
	getId: function() {
		return this.id;
	},
	setId: function(x) {
		this.id = x;
	}
}

var newItem = new item;

newItem.setId(2);
console.log(newItem.getId());