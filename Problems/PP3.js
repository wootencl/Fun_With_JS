var processData = function (input) {
	input = input.split("\n");
	
	var i, string1, string2, array, flag;
	
	for (i = 1; i < (input[0]*2); i+=2) {
		string1 = input[i];
		string2 = input[i+1];
		array = "abcdefghijklmnopqrstuvwxyz".split("");
		flag = "NO";
		
		for(j = 0; j < array.length; j++) {
			if(string1.indexOf(array[j]) > -1 && string2.indexOf(array[j]) > -1) {
				flag = "YES";
				break;
			}
		}
		console.log(flag);
	}	
}

processData("2\nhello\nworld\nhi\nworld")
