//Singly Linked List
// Space/Time Complexities:
// Average:
//	Access: O(n) | Search: O(n) | Insertion: O(1) | Deletion: O(1)
// Worst:
//	Access: O(n) | Search: O(n) | Insertion: O(1) | Deletion: O(1)
// Space (Worst): O(n)

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
				previous.next = current.next;
			}
			this._length--;
		} else {
			return null;
		}
	},
	removeData: function(data) {
		var current = this._head;
		//special case for head
		if (current.data === data) {
			this._head = current.next;
			this._length--;
			return;
		}
		previous = current;
		current = current.next;
		while (current !== null) {
			if (current.data === data) {
				previous.next = current.next;
				this._length--;
				return;
			}
			previous = current;
			current = current.next;
		}
		return false;
	},
	detectLoop: function() {
		var sP = this._head;
		var fP = this._head;
		while (sp && fP && fP.next) {
			sp = sP.next;
			fp = fP.next.next;

			if (sP == fP) {
				return true;
			}
		}
		return false;
	},
	reverseList: function(){
		var head = this._head,
		current = head,
		arr = [];

		while (current !== null) {
			arr.push(current);
			current = current.next;
		}
		current = arr.pop();
		head = current;
		while(arr.length > 0) {
			current.next = arr.pop();
			current = current.next;
		}
		current.next = null;
	}
}
var list = new SinglyLinkedList();
list.add("red");
list.add("orange");
list.add("yellow");
console.log(list.item(1));
//list.remove(2);
list.removeData("orange");
console.log(list.item(1));
