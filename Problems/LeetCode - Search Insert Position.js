//Source: https://leetcode.com/problems/search-insert-position/

function searchInsert(nums, target) {
	var start = 0,
	end = nums.length,
	middle = Math.floor((start+end/2));
	
	while (target !== nums[middle] && start < end) {
		if (target < nums[middle] && middle > 0) {
			end = middle-1;
		} else if (target > nums[middle]) {
			start = middle+1;
		} else {
			break;
		}
		middle = Math.floor((start+end)/2);
	}
	//special case checking for the first element in the array
	if (target  > nums[middle]) {
		return middle+1;
	} else {
		return middle;	
	}
}

var a = [1,3];
console.log(searchInsert(a,2));