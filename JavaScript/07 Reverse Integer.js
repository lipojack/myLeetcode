//Reverse digits of an integer.

//Example1: x = 123, return 321
//Example2: x = -123, return -321

//Note:
//The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.

/*
  @param {number} x
  @return {number}
*/

var reverse = function (x) {
  var sign = 0;
  var result = 0;
  var t = 0;
  if (x < 0) {
    x = Math.abs(x);
    sign = 1;
  }

  while (x) {
    result = result * 10 + x % 10
    // Use floor to get int result
    x = Math.floor(x / 10);
  }

  if (sign) result = -result;

  isOverflow(result);
  return result;
}

var isOverflow = function (x) {
  var MAX = Math.pow(2, 31) - 1;
  var MIN = -(1 + MAX);
  if (x > MAX || x < MIN) return 0;
}
