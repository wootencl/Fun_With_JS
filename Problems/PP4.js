
var sum = function (array) {
	var total = array.reduce(function(a, b) {
	  return a + b;
	});
	return total;
}

var solution = function (A) {
	if (sum(A.slice(0, A.length-1)) === 0) {
		
		return A.length-1;
	} else {
		for (var i = 0; i<A.length-1;i++) {
			var sum1 = sum(A.slice(0,i));
			var sum2 = sum(A.slice(i+1));
			if (sum1 === sum2) {
				return i;
			}
		}
	}
	return 0;
}

var A = [-1,3,-4,5,1,-6,2,1];
console.log(solution(A));