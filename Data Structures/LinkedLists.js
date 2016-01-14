function SinglyLinkedList() {
	this._length = 0;
	this._head = null;
}

SinglyLinkedList.prototype = {
	add: function (data) {
		// create new node, plcae data in
		var node = {
			data: data,
			next: null
		},
		// used to travarse the structure
		current;
		
		//special case: no items in the list yet
		if (this._head === null) {
			this._head = node;
		} else {
			current = this._head;
			while (current.next) {
				current = current.next;
			}
			current.next = node;
		}
		// don't forget to update the count
		this._length++;
	},
	item: function (index) {
		// check for the out-of-bounds values
		if (index > -1 && index < this._length) {
			var current = this._head,
			i = 0;
			
			while (i < index) {
				current = current.next;
				i++;
			}
			return current.data;
		} else {
			return null;
		}
	},
	remove: function(index) {
		// check bounds
		if (index>-1 && index<this._length) {
			var current = this._head,
			previous,
			i = 0;
			
			//special case: remove first item
			if (index === 0) {
				this._head = current.next;
			} else {
				//find the location
				while (i < index) {
					previous = current;
					current = current.next;
					i++;
				}
				
				//skip over the item to remove
				previous.next = current.next
			}
			this._length--;
		} else {
			return null;
		}
	}
}
var list = new SinglyLinkedList();
list.add("red");
list.add("orange");
list.add("yellow");
console.log(list.item(1));
list.remove(1);
console.log(list.item(1));
