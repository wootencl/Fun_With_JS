function gd3(string) {
	var i = 0,
	j = string.length-1;
	var reg = new RegExp('a|e|i|o|u');
	var strArray = string.split('');
	while (i < j) {
		while (strArray[i].match(reg) === null && i < strArray.length) {
			i++;
		}
		while (strArray[j].match(reg) === null && j > 0) {
			j--;
		}
		if (i <= j) {
			swap(strArray, i, j);
			i++;
			j--;
		}
	}
	return strArray.join('');
}

function swap(string, firstIndex, secondIndex) {
	var temp = string[firstIndex];
	string[firstIndex] = string[secondIndex];
	string[secondIndex] = temp;
}

var a = 'united states';
console.log(gd3(a));