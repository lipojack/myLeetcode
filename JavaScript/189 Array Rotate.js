//Rotate an array of n elements to the right by k steps.

//For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

//Note:
//Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(num, k){
    var tmp = [];
    var len = num.length;
    var step = k % len;

    for (var i = step; i > 0; i--){
        tmp.push(num[num.length-i]);
    }
    
    for (var j = len - 1; j >= 0 ; j--){
        if(j >= step)
            num[j] = num[j-step];
        else
            num[j] = tmp[j];
    }
}

//rotate([1,2,3,4,5,6,7], 3);