// Time:  O(1)
// Space: O(1)

// The Hamming distance between two integers is the number of positions
// at which the corresponding bits are different.
//
// Given two integers x and y, calculate the Hamming distance.
//
// Note:
// 0 ≤ x, y < 231.
//
// Example:
//
// Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//       ↑   ↑
//
// The above arrows point to positions where the corresponding bits are different.
/*
  @param {number} a
  @param {number} b
  @return {number}
*/

var hammingDist = function (a, b) {
  var result = 0;
  var c = a ^ b;
  // Count 1
  while (c) {
    if (c % 2) {
      result += 1;
    }
    c >>= 1;
  }
  return result;
}

