//My unaccepted inefficient solution 
//Source: https://leetcode.com/problems/bulb-switcher/

function bulbSwitch(n) {
	var bulbs = [];
	if (n < 1) {
		return 0;
	}
	//first round
	for (var i = 0 ; i < n ; i++) {
		bulbs[i] = 'on';
	}
	//second round
	for (var j = 0 ; j < n ; j++) {
		if ((j+1) % 2 === 0) {
			bulbs[j] = 'off';
		}
	}
	//third round
	for (var k = 0 ; k < n ; k++) {
		if ((k+1) % 3 === 0) {
			bulbs[k] = switchBulb(bulbs[k]);
		}
	}
	//special case
	if (n === 3) {
		return countBulbs(bulbs);
	}
	//nth round
	bulbs[bulbs.length-1] = switchBulb(bulbs[bulbs.length-1]); 
	return countBulbs(bulbs);
}

function switchBulb(status) {
	if (status == 'on') {
		return 'off';
	} else {
		return 'on';
	}
}

function countBulbs(bulbs) {
	var count = 0;
	for (var i = 0 ; i < bulbs.length ; i++) {
		if (bulbs[i] == 'on') {
			count++;
		}
	}
	return count;
}

console.log(bulbSwitch(3));