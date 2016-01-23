//Source: https://leetcode.com/problems/single-number-ii/

function singleNumber(nums) {
	nums.sort(function (a,b) {
		return a-b;
	});
	for (var i = nums.length-1 ; i > 1 ; i--) {
		if (nums[i] == nums[i-1] && nums[i] == nums[i-2]) {
			nums.splice(i-2,3);
      i -= 2;
		}
	}
	return nums[0];
}

var a = [1];
singleNumber(a);
console.log(a);