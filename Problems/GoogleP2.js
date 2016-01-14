
var solution = function (S) {
	var directoryArray = S.split("\n");
	var index = 0;
	var deepFile = "";
	//searching for the deepest image file
	for (var i = 1; i < directoryArray.length;i++) {
		if (directoryArray[i].match(/.+(gif|jpeg|png)$/)) {
			if ((deepFile.match(/^\s*/)[0].length) < (directoryArray[i].match(/^\s*/)[0].length)) {
				index = i;
				deepFile = directoryArray[i];
			}
		}
	}
	// I now know the deep file
	var deepFileSpaces = deepFile.match(/^\s*/)[0].length;
	var returnValue = "/" + deepFile.trim();
	for (var j = index-1; j >= 0; j--) {
		if ((directoryArray[j].match(/^\s*/)[0].length) < deepFileSpaces) {
			returnValue = "/" + directoryArray[j].trim() + returnValue;
			deepFileSpaces--;
		}
	}
	//if returnValue equals / then no image file was found
	if (returnValue === "/") {
		return 0;
	} else {
		return returnValue.length;
	}
}

var string = "dir1\n dir11\n dir12\n  picture.jpeg\n  dir121\n  file1.txt\ndir2\n file2";
var another = '   test';
console.log(solution(string));