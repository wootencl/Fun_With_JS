function spliceSlice(str, index, count, add) {
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}

var processData = function (input) {
	input = input.split("\n");
	
	var i, j, k, string, deletions;
	
	for (i = 1; i <= input[0]; i++) {
		string = input[i].toLowerCase();
		deletions = k = 0;
		j = 1;
		
		while (j<string.length) {
			if (string[k] == string[j]) {
				deletions++;
				j++;
			} else {
				k=j;
				j++;
			}
		}
		console.log(deletions);
	}	
}

processData("2\nAAAA\nAAABBB")

console.log("test"[3]);