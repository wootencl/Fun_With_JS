function hashTable() {
	this._items = {};
}

hashTable.prototype = {
	constructor: hashTable,
	_hashCode: function(str) {
	  var hash = 0, i, chr, len;
	  if (str.length === 0) return hash;
	  for (i = 0, len = str.length; i < len; i++) {
	    chr   = str.charCodeAt(i);
	    hash  = ((hash << 5) - hash) + chr;
	    hash |= 0; // Convert to 32bit integer
	  }
	  return hash;
	},
	add: function (value) {
		var node = {
			value: value,
			next: null
		},
		current = this._items[this._hashCode(value)];
		if (!current) {
			this._items[this._hashCode(value)] = node;
		} else {
			while (current.next !== null) {
				current = current.next;
			}
			current.next = node;
		}
	},
	hasItem: function (value) {
		var current = this._items[this._hashCode(value)],
		found = false;
		if (!current) {
			found = false;
		} else {
			if (current.value === value) {
				found = true;
			} else {
				while (current.next) {
					current = current.next;
					if (current.value === value) {
						found = true;
					}
				}
			}
		}
		return found;
	},
	remove: function (value) {
	//returns true if the value was deleted and false if no such value existed
		var bool = false;
		if (!this._items[this._hashCode(value)]) {
			bool = false;
		} else {
			var current = this._items[this._hashCode(value)];
			if (current.value === value) {
				if (current.next) {
					//make the 'next' value the root of the linked list
					this._items[this._hashCode(value)] =  current.next;
					bool = true;
				} else {
					this._items[this._hashCode(value)] = null;
					bool = true;
				}
			} else {
				while (current.next) {
					var precedingNode = current;
					current = current.next;
					if (current.value === value) {
						if (current.next) {
							precedingNode.next = current.next;
							bool = true;
						} else {
							current = null;
							bool = true;
						}
					}
				}
			}
		}
	return bool;
	}
}

var table = new hashTable();
table.add("FB");
table.add("Ea");

console.log(table.hasItem("FB"));
console.log(table.remove("FB"));
console.log(table.hasItem("Ea"));
