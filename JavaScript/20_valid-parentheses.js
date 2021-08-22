//Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

/*
  @param {string} paren
  @return {boolean}
*/

var validParen = function (paren) {
  if (!paren.length) return false;
  if (!paren.length % 2) return false;

  var stack = [];
  var pMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (var i in paren) {
    if (paren[i] == '(' || paren[i] == '[' || paren[i] == '{') {
      stack.push(paren[i]);
      //console.log(stack);
    } else if (paren[i] != pMap[stack.pop()]) {
      return false;
    }
  }

  return true;
}
