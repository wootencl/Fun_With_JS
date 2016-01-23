//Source: https://leetcode.com/problems/maximum-product-of-word-lengths/
// My miserable failure at an attempt of a solution

function maxProduct(words) {
	words.sort( function (a,b) {
		return a.length - b.length;
	});
	
	var retV = 0;
	var j = words.length-1;
	var l = words.length-2;
	while (j > 0 && l > 0) {
		var firstWord = words[j];
		var secondWord = words[l];
		console.log(firstWord + " && " + secondWord);
		var bool = true;
		var i = 0;
		var k = 0;
		while (i < firstWord.length || k < secondWord.length) {
			if (i < firstWord.length) {
				if (secondWord.indexOf(firstWord[i]) > -1) {
					bool = false;
					break;
				}
			}
			if (k < secondWord.length) {
				if (firstWord.indexOf(secondWord[k]) > -1) {
					bool = false;
					break;
				}
			}
			i++;
			k++;
		}
		if (bool === true) {
			retVal = firstWord.length*secondWord.length;
			return retVal;
		} else if (secondWord.length == words[l-1].length || firstWord.length == secondWord.length) {
			l--;
		} else {
			j--;
			l = j-1;
		}
	}
	return 0;
}

var a = ["eae","ea","aaf","bda","fcf","dc","ac","ce","cefde","dabae"];
console.log(maxProduct(a));