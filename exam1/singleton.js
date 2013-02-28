var singletonObject = (function() {
	var instance;
	var id;
	
	function _constructor() {
		id = Math.random()*(10-1)+1;
		this.getId() = function() {
			return id;
		}
	}
	
	return new function() {
		this.getInstance() = function() {
			if(instance == null) {
				instance = _constructor();
			}
			return instance;
		}
	}
});

var singletonInstance = singletonObject.getInstance();