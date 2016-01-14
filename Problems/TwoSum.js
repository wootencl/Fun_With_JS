function twoSum(nums, target) {
	for (var i = 0; i<nums.length ; i++) {
		var index1 = nums[i];
		for (var j = i+1; j <nums.length ; j++) {
			var index2 = nums[j];
			if (index1 + index2 === target) {
				return [i+1, j+1];
			}
		}
	}
}

var testArray = [3,2,4];
console.log(twoSum(testArray, 6));