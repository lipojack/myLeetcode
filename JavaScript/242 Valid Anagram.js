//Given two strings s and t, write a function to determine if t is an anagram of s.
//For example,
//s = "anagram", t = "nagaram", return true.
//s = "rat", t = "car", return false.
//Note:
//You may assume the string contains only lowercase alphabets.

/*
  @param {string} s
  @param {string} t
  @return {boolean}
*/

var validAnagram = function (s, t) {
  if (s.length != t.length) return false;
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');
  return s == t;
}


console.log(validAnagram('123', '122'));