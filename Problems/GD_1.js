function sWYS(string) {
	var opstr = '';
  var prevChar = string[0];
  var count = 1;
  for(var j = 1;j < string.length; j++) {
    if(string[j] == prevChar) {
      count++;
      continue;
    } else {
      opstr +=  count + prevChar;
      prevChar = string[j];
      count = 1;
    }
  }
  opstr += count + prevChar;
	return opstr;
}

console.log(sWYS('23412352345'));