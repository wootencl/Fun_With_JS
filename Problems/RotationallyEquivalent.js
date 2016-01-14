function nextChar(c, increment) {
	return String.fromCharCode(c.charCodeAt(0)+increment);
}
function replaceAt(str, index, chr){
	return str.substr(0, index) + chr + str.substr(index+1);
}
function rE(string1, string2) {
	var char1 = string1[0];
	var char2 = string2[0];
	var increment = 0;
	while (char1 !== char2) {
		char2 = nextChar(char2, 1);
		increment ++;
		if (char2 === "{") {
			return false;
		}
	}
	for (var i = 0; i < string2.length; i++) {
		string2 = replaceAt(string2, i, nextChar(string2[i], increment));
	}
	if (string1 === string2) {
		return true;
	} else {
		return false;
	}
}

function groupRE(items) {
	var returnArray = [];
	for (var i = 0; i < items.length ; i++) {
		var group = [];
		for (var j = 0; j < items.length ; j++) {
			if (j === i) {
				continue;
			}
			if (rE(items[i], items[j])) {
			}
		}
	}
}