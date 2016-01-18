//https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums) {
	for (var i = 0; i < nums.length ; i++) {
		if (nums[i] === 0) {
			var j = i;
			while (nums[j] === 0 && j < nums.length-1) {
				j++;
			}
			swap(nums, i, j);
		}
	}
}

function swap(array, firstIndex, secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

var a = [0,0,1];
console.log(a);
moveZeroes(a);
console.log(a);