function gd2(num1, num2) {
	var num1 = Number(num1.join(''));
	var num2 = Number(num2.join(''));
	
	var res = num1 + num2;
	var res = res.toString().split("");
	return res;
}

var a = [1,2];
var b = [1,8];
console.log(gd2(a,b));