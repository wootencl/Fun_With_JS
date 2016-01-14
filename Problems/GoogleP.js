var solution = function (X) {
	var maximum = X;
	var xTemp = X.toString();
	
	for (var i = 0;i < xTemp.length;i++) {
		var newNumber = xTemp.slice(0, i) + xTemp[i] + xTemp.slice(i);
		if (Number(newNumber) > maximum) {
			maximum = Number(newNumber);
		}
	}
	return maximum;
}

console.log(solution(12511));
