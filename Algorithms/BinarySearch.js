// Binary Search
// Complexity: O(log(n))
// 		Complexity Explanation: 1 = N/(2^x) -> 2^x = N -> log(base2)(2^x) = log(base2)(N) -> x = log(base2)(N)
// Source: https://www.nczonline.net/blog/2009/09/01/computer-science-in-javascript-binary-search/
function binarySearch(items, value) {
	startIndex = 0,
	stopIndex = items.length - 1,
	middle = Math.floor((stopIndex+startIndex)/2);

	while (items[middle] != value && startIndex < stopIndex) {
		if (value < items[middle]) {
			stopIndex = middle - 1;
		} else if (value > items[middle]) {
			startIndex = middle + 1;
		}

		middle = Math.floor((stopIndex+startIndex)/2);
	}
	return (items[middle] != value) ? -1 : middle;
}

var a = [1, 2, 5, 7, 9, 11, 30, 35, 64, 74, 80, 100, 234, 256, 390, 3245];

console.log(binarySearch(a, 11));

//Woohoo! Binary Search Rocks!