// WAF minSubArrayLen which should return the minimal length of contiguos subarray which sum is greator than or equal to the integer passed.
// PATTERN - SLIDING WINDOW
/* example
[2,3,1,2,4,3] --> 2 ([4,3])
*/
function minSubArryLen(arry, num) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let sum = 0;

  while (start < arry.length) {
    if (sum < num && end < arry.length) {
      sum += arry[end];
      end++;
    } else if (sum >= num) {
      minLen = Math.min(minLen, end - start);
      sum -= arry[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArryLen([2, 3, 1, 2, 4, 3], 7));
