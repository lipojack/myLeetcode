//Given a pattern and a string str, find if str follows the same pattern.
//Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//Examples: pattern = "abba", str = "dog cat cat dog" should return true.
//pattern = "abba", str = "dog cat cat fish" should return false.
//pattern = "aaaa", str = "dog cat cat dog" should return false.
//pattern = "abba", str = "dog dog dog dog" should return false.
//Notes: You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/*
  @param {string} pattern
  @param {string} word
  @return {boolean}
*/

// Adjusted from 205 Isomorphic String
var wordPattern = function(pattern, word){
  var p = pattern.split('');
  var w = word.split(' ');
  var mapP ={};
  var mapW = {};
  var valueP;
  var valueW;
  for (var i in p){
  	valueP = p[i];
  	valueW = w[i];
    
    if(!mapP[valueP]) mapP[valueP] = valueW;
    else if (mapP[valueP] != valueW) return false;
    
    if(!mapW[valueW]) mapW[valueW] = valueP;
    else if (mapW[valueW] != valueP) return false
  }
  return true;
}
