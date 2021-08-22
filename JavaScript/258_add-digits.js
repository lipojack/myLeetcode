//Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//For example:
//Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
//Follow up:
//Could you do it without any loop/recursion in O(1) runtime?

/*
  @param {number} num
  @return {number} sum
*/

var addDigit1 = function (num) {
  var sum = 0;
  while (num >= 10) {
    ('' + num).split('').forEach(function (d) {
      sum += parseInt(d);
    });
    return sum;
  }
}


// Use the rule of 9' multiples
var addDigit2 = function (num) {
  if (num == 0) return 0;
  if (num % 9 == 0) return 9;
  return num % 9;
}