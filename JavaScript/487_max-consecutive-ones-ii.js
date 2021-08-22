/*
  @param {number[]} nums
  @return {number}
*/
const findMaxConsecutiveOnes = (nums) => {
  let res = 0, cur = 0, count = 0;
  for (let i = 0; i < nums.length; i++) {
    // count stores the current consecutive ones (plus the tail zero)
    count++;
    if (nums[i] == 0) {
      // cur stores the previous record of consecutive ones (plus the tail zero)
      cur = count;
      count = 0;
    };
    res = Math.max(res, cur + count);
  };
  return res;
};

let test = [1, 1, 1, 0, 0, 1, 1, 0, 1, 1];
console.log(findMaxConsecutiveOnes(test));