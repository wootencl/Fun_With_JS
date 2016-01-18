function processData(input) {
	var odds = 1;
	var alph = 'abcdefghijklmnopqrstuvwxyz';
	if (input === null) {
		console.log("NO");
	}
	for (var i = 0; i<alph.length ; i++) {
		var reg = new RegExp(alph[i], 'g');
		if (input.match(reg)) {
			if (input.match(reg).length % 2 !== 0) {
				odds--;
			}
			if (odds === -1) {
				console.log("NO");
				return;
			}
		}
	}
	console.log("YES");
	return;
}

var a = "aca";
processData(a);