/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". */

/* 
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

function findCommonPrefix(str1, str2) {
  let result = "";
  let n1 = str1.length;
  let n2 = str2.length;
  for (let i = 0, j = 0; i < n1 && j < n2; i++, j++) {
    if (str1[i] !== str2[j]) {
      break;
    }
    result += str1[i];
  }
  return result;
}

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let prefix = strs[0];

  let n = strs.length;

  for (let k = 1; k <= n - 1; k++) {
    prefix = findCommonPrefix(prefix, strs[k]);
  }
  return prefix;
};
