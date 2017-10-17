//Given two binary strings, return their sum (also a binary string).
//For example, a = "11" b = "1" Return "100".

/*
  @param {string} a
  @paran {string} b
  @return {string}
*/

var addBinary = function(a, b){
  var result = [];
  var carry = 0;
  var lenA = a.length;
  var lenB = b.length;
  var iA = 0;
  var iB = 0;
  
  while (iA < lenA || iB < lenB){
    var vA = iA < lenA ? parseInt(a[lenA - iA -1]) : 0;
    var vB = iB < lenB ? parseInt(b[lenB - iB -1]) : 0;
    var value = carry + vA + vB;
    carry = value > 1 ? 1 : 0;
    var fixed = value % 2;
    iA ++;
    iB ++;
    result = fixed + result;
  }

  result = carry > 0 ? carry + result : result;
  return result;
}
