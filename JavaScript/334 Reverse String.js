//Write a function that takes a string as input and returns the string reversed.

//Example:
//Given s = "hello", return "olleh".

/*
  @param {string} s
  @return {string}
*/

var reverseString1 = function (s) {
  var result = "";
  var str = s.split("");
  for (var i = 0; i < str.length; i++) {
    result += str[str.length - 1 - i];
  }
}

var reverseString2 = function (s) {
  var result = "";
  var str = s.split("");
  var tmp = "";
  for (var i = 0; i < str.length / 2; i++) {
    tmp = str[i];
    str[i] = str[str.length - 1 - i];
    str[str.length - 1 - i] = tmp;
  }
  result = str.join("");
  return result;
}
