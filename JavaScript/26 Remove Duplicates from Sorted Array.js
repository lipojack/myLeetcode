//Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
//Do not allocate extra space for another array, you must do this in place with constant memory.
//For example, Given input array nums = [1,1,2],
//Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

/*
  @param {number[]} num
  @return {number}
*/

var removeDuplicate = function(num){
  if (num == null || num.length == 0) return 0;
  if (num.length == 1) return 1;
  var count = 0;
  for (var i = 1; i < num.length; i++){
    if (num[i] != num[count]){
      count++;
      num[count] = num[i];
    } 
  }
  return ++count;
}



console.log(removeDuplicate([1,1,2,3,4,5,6,7,7,8,8]))