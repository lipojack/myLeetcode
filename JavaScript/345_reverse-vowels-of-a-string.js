//Write a function that takes a string as input and reverse only the vowels of a string.
//Example 1: Given s = "hello", return "holle".
//Example 2: Given s = "leetcode", return "leotcede".
//Note: The vowels does not include the letter "y"

/*
  @param {string} s
  @return {string}
*/


var reverseVowel = function (s) {
  var arr = s.split('');
  var len = s.length;
  var vowels = [];
  for (var i = 0; i < len; i++) {
    if (isVowel(arr[i])) vowels.push(arr[i]);
  }

  //last index of vowels
  var v = vowels.length - 1;

  for (var j = 0; j < len; j++) {
    if (isVowel(arr[j])) arr[j] = vowels[v--];
  }
  return arr;
}

var isVowel = function (a) {
  return (/^[aeiou]$/i).test(a);
}
