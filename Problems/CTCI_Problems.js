// 1.1
var uniqueChars = function (string) {
	for (var i = 0; i<string.length;i++) {
		var reg = new RegExp(string[i],"g");
		if (string.match(reg).length > 1) {
			return false;
		}
	}
	return true;
}
console.log(uniqueChars("abcdefghijklmnopdqrstuvwxyz"));