//Given two strings s and t, determine if they are isomorphic.
//Two strings are isomorphic if the characters in s can be replaced to get t.
//All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
//For example, Given "egg", "add", return true.
//Given "foo", "bar", return false.
//Given "paper", "title", return true.

/*
  @param {string} s
  @param {string} t
  @return {boolean}
*/

var isomorphic = function (s, t) {
  if (s.length != t.length) return false;
  var mapS = {};
  var mapT = {};
  var valueS = '';
  var valueT = '';
  for (var i in s) {
    valueS = s[i];
    valueT = t[i];

    if (!mapS[valueS]) {
      mapS[valueS] = valueT;
    } else if (mapS[valueS] != mapT[valueT]) {
      return false;
    }

    if (!mapT[valueT]) {
      mapT[valueT] = valueS;
    } else if (mapT[valueS] != mapS[valueS]) {
      return false;
    }
  }
  return true;
}
