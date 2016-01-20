//Source: https://leetcode.com/problems/majority-element/

function mE(nums) {
	var obj = {},
	mE = Math.floor(nums.length/2);
	for (var i = 0 ; i < nums.length ; i++) {
		obj[nums[i]] = obj[nums[i]]+1 || 1;
		if (obj[nums[i]] > mE) {
			return nums[i];
		}
	}
}

console.log(mE([6,5,5]));