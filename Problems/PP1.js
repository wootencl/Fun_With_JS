var newReverse = function (s) {
  return s.split('').reverse().join('');
}

var processData = function (input) {
	input = input.split("\n");
	
	var i, j, k, string, reversedString, bool;
	
	for (i = 1; i <= input[0]; i++) {
		string = input[i];
		reversedString = newReverse(string);
		
		for (j = 0; j < string.length-1;j++) {
			bool = Math.abs((string[j+1].charCodeAt()-string[j].charCodeAt())) == Math.abs((reversedString[j+1].charCodeAt()-reversedString[j].charCodeAt()));
			if (!bool) {
				console.log("Not Funny");
				break;
			}
		}
		if (bool) {
			console.log("Funny");
		}
	}	
}

processData("2\nacxz\nbcxz");