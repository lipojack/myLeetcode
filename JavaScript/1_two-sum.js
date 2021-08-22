//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

/*
  @param {number[]} num
  @param {number} target
  @return {number[]}
*/

var twoSum = function (num, target) {
  var map = {};
  for (var i = 0; i < num.length; i++) {
    var v = num[i];
    if ((target - v) in map)
      return [map[target - v], i];
    else
      map[v] = i;
  }
  return 0;
}
