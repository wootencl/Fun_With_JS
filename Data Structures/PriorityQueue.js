// Primary Queue
// Built this using the heap implemented in heapsort


function PriorityQueue() {
	this._elements = [];
}
PriorityQueue.prototype = {
	_bubble_up: function(i) {
		var left = i * 2 + 1;
		var right = i * 2 + 2;
		var largest = i;
		var heapSize = this._elements.length;
		
		if (left < heapSize && this._compare(this._elements[left], this._elements[largest]) > 0) {
			largest = left;
		}
		if (right < heapSize && this._compare(this._elements[right], this._elements[largest]) > 0) {
			largest = right;
		}
		if (largest !== i) {
			this._swap(this._elements, i, largest);
			this._bubble_up(largest);
		}
	},
	_compare: function(a,b) {
		if (a === b) {
			return 0;
		} else {
			return (a > b) ? 1 : -1;
		}
	},
	_swap: function(array, firstIndex, secondIndex) {
		var temp = array[firstIndex];
		array[firstIndex] = array[secondIndex];
		array[secondIndex] = temp;
	},
	enqueue: function(num) {
		this._elements.unshift(num);
		this._bubble_up(0);
	},
	dequeue: function () {
		var ret = this._elements.shift();
		this._bubble_up(0);
		return ret;
	}
}

var pq = new PriorityQueue();
pq.enqueue(1);
pq.enqueue(7);
pq.enqueue(6);
pq.enqueue(3);
pq.enqueue(2);
console.log(pq.dequeue());