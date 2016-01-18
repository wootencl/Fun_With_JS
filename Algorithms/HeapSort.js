// Heap Sort - Complexity: O(nlog(n)) 
// Source: http://www.growingwiththeweb.com/2012/11/algorithm-heapsort.html
// I know I mispelled the file name. I'm leaving it

function swap(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

function compareMax(a,b) {
	if (a === b) {
		return 0;
	} else {
		return (a > b) ? 1 : -1;
	}
}

function compareMin(a,b) {
	if (a === b) {
		return 0;
	} else {
		return (a < b) ? 1 : -1;
	}
}


// Also known as bubble-(up | down) dependent on which comarison is being used
function heapify(array, heapSize, i, compare, swap) {
	var left = i * 2 + 1;
	var right = i * 2 + 2;
	var largest = i;
	
	if (left < heapSize && compare(array[left], array[largest]) > 0) {
		largest = left;
	}
	if (right < heapSize && compare(array[right], array[largest]) > 0) {
		largest = right;
	}
	if (largest !== i) {
		swap(array, i, largest);
		heapify(array, heapSize, largest, compare, swap);
	}
}

function buildHeap(array, heapSize, compare, swap) {
	//Starts in the middle because anything past should be leaves
	for (var i = Math.floor(array.length/2); i >= 0; i--) {
		heapify(array, heapSize, i, compare, swap);
	}
}

function heapSort(array, compare, swap) {
	// this heapsort depends on the heap being a max-heap
	var heapSize = array.length;
	buildHeap(array, heapSize, compare, swap);
	while (heapSize > 1) {
		heapSize--;
		//Move the appropriate item to the end of the list
		// For the max-heap this moves the largest number
		swap(array, 0, heapSize);
		heapify(array, heapSize, 0, compare, swap)
	}
	return array;
}

var a = [2,5,1,6,7,8,3,0];
console.log(a);
buildHeap(a, a.length, compareMax, swap);
console.log(a);
a.shift();
heapify(a, a.length, 0, compareMax, swap);
