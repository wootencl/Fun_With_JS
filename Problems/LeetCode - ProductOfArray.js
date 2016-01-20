// My inefficient solution. Essentially O(n^2) as reduce is just a loop itself

function pES(nums) {
	var output = [];
	for (var i = 0; i < nums.length ; i++) {
		output.push((nums.slice(0,i).concat(nums.slice(i+1))).reduce(function (a,b) {
			return a*b;
		}));
	}
	return output;
}

var a = [1,2,3,4];
pES(a)
console.log(pES(a));

