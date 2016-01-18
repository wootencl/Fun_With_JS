// My attempt at a solution which was not good enough when the length of nums goes over 1000
function singleNumberMyTry(nums) {
	var marked = [];
	var singleNums = [];
	for (var i = 0; i < nums.length ; i++) {
		console.log(singleNums);
		if (marked.indexOf(nums[i]) > -1) {
			continue;
		}
		var reg = new RegExp(nums[i], 'g');
		if (nums.join(',').match(reg).length == 1) {
			singleNums.push(nums[i]);
		}
		marked.push(nums[i]);
	}
	return singleNums;
}

// The actual solution from the dicussion page converted into javscript
function singleNumberIII(nums) {
	nums.sort();
    for(var i = nums.length - 1; i > 0; i--){
        if (nums[i] === nums[i-1]) {
            nums.splice(i-1, 2);
            i--;
        }
    }
    return nums;
}
a = [1,4,5,1,4,2,21]
console.log(singleNumberIII(a));