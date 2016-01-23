//Source: https://leetcode.com/problems/number-of-1-bits/

function hammingWeight(n) {
	if (n > 0) {
		var str = n.toString(2),
		re = /1/g;
		return str.match(re).length;
	} else {
		return 0;
	}
}

console.log(hammingWeight(11));