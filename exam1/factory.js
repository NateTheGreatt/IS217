var factory = (function() {
	var createdObjects = {};
	
	return {
		createObject: function() {
			var id = Math.random()*(10-1)+1;
			createdObjects.push(id);
			return id;
		}
	};
});

var newItem = factory.createObject();