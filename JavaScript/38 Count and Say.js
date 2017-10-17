//The count-and-say sequence is the sequence of integers beginning as follows: 1, 11, 21, 1211, 111221, ...
//1 is read off as "one 1" or 11. 11 is read off as "two 1s" or 21. 21 is read off as "one 2, then one 1" or 1211. Given an integer n, generate the nth sequence.
//Note: The sequence of integers will be represented as a string.

/*
  @param {number} num
  @return {string}
*/

var countNSay = function(num){
  var count = 1;
  var result = '';
  var numArr = (''+num).split('');
  //console.log('qq');
  for(var i = 0; i < numArr.length; i++){
    //console.log(numArr[i]);
    if(numArr[i+1] == numArr[i]){
      count++;
    }else{
      result = result + '' + count + '' +numArr[i];
      count = 1;
    }
  }
  return result;
}
