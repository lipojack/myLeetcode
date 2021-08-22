/*
Given a string S of length N, the task is to find the smallest balanced substring in S. If no such substring is present, print -1.

A string is balanced if every letter in the string appears in both uppercase and lowercase, i.e “AabB” is a balanced string whereas “Ab” is not a balanced string. 
 

Examples:

Input: S = “azABaabba”
Output: ABaab
Explanation:
Substring {S[2], …, S[6]} (0-based indexing) is the smallest substring which is balanced.

Input: S = “Technocat”
Output: -1
*/

/*
Brute force
  T.C: O(N3)
  S.C: O(N)
*/
function brute (S) {
  let len = S.length + 1;
  let res;
  for (let i = 0; i < S.length - 1; i++) {
    for (let j = i + 1; j < S.length; j++) {
      let subStr = S.slice(i, j + 1);
      if (isBalanced(subStr) && j - i + 1 < len) {
        len = j - i + 1;
        res = subStr;
      };
    };
  };
  return res === undefined ? -1 : res;
};

function isBalanced (str) {
  let upperCase = new Array(26).fill(false);
  let lowerCase = new Array(26).fill(false);

  for (let char of str) {
    if (char.charCodeAt(0) >= 97) {
      lowerCase[char.charCodeAt(0) - 97] = true;
    } else {
      upperCase[char.charCodeAt(0) - 65] = true;
    };
  };
  for (let i = 0; i < 26; i++) {
    if (lowerCase[i] !== upperCase[i]) return false;
  };
  return true;

};

// Todo: sliding window approach
function slidingWindow (S) {

};

// console.log(brute("azABaabba"));