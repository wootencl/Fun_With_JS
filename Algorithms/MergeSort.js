// Complexity:
// 	Best: O(nlog(n)) | Worst: O(n)
// Space (Worst): O(n)
// Is a stable sort which means the relative order of equivalent items remain the same before and after the sort

function merge(left, right) {
	var result = [],
	il = 0,
	ir = 0;

	while (il < left.length && ir < right.length) {
		if (left[il] < right[ir]) {
			result.push(left[il]);
			il++;
		} else {
			result.push(right[ir]);
			ir++;
		}
	}
	return result.concat(left.slice(il)).concat(right.slice(ir));
}
function mergeSort(items){
	if (items.length < 2) {
		return items;
	}
	var middle = Math.floor(items.length/2),
	left = items.slice(0, middle),
	right = items.slice(middle);

	return merge(mergeSort(left), mergeSort(right));
}

var items = [16, 4, 2, 6, 5, 3, 9];
console.log(items);
console.log(mergeSort(items));