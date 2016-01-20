// Complexity:
// 	Best: O(nlog(n)) | Worst: O(n^2)
// Space (Worst): O(log(n))
function medianOfThree(items, left, right) {
	var mid = Math.floor((left+right)/2);
	if (items[right] < items[left]) {
		swap(items, left, right);
	}
	if (items[mid] < items[left]) {
		swap(items, mid, left)
	}
	if (items[right] < items[mid]) {
		swap(items, right, mid);
	}
	return items[mid];
}

function swap(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function partition(items, left, right) {
	var pivot = medianOfThree(items, left, right),
	i = left,
	j = right;
	while (i<=j) {
		while (items[i]<pivot) {
			i++;
		}
		while (items[j]>pivot) {
			j--;
		}
		if (i<=j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}

function quicksort(items, left, right) {
	var index;
	if (items.length>1) {
		index = partition(items, left, right);
		if (left<index-1) {
			quicksort(items, left, index-1);
		}
		if (right>index) {
			quicksort(items, index, right);
		}
	}
	return items;
}
var items = [16, 4, 2, 6, 5, 3, 9];
console.log(items);
items = quicksort(items, 0, items.length-1);
console.log(items);