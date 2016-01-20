// Source: https://leetcode.com/problems/valid-anagram/

function isAnagram(s, t) {
	s = s.split('').sort();
	s = s.join('');
	t = s.split('').sort();
	t = t.join('');
	if (s === t) {
		return true;
	} else {
		return false;
	}
	
}

console.log(isAnagram("a", "b"));