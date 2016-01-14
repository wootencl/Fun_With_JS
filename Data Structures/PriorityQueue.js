function PriorityQueue() {
	this._elements = [];
}
PriorityQueue.prototype = {
	_compare: function (a,b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a-b;
		} else {
			a = a.toString();
			b = b.toString();
			if (a == b) {
				return 0;
			}
			return (a > b) ? 1 : -1;
		}
	},
	isEmpty: function () {
		return this.size() === 0;
	},
	//used in the removal
	peek: function () {
		if (this.isEmpty()) throw new Error('PriorityQueue is empty');
	},
	enqueu: function(element){
		var size = this._elements.push(element);
		var current = size-1;
		
		while (current>0) {
			var parent 
		}
	}
}