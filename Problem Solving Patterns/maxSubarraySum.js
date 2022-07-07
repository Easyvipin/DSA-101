//Waf maxSubarraySum which finds the maximum sum of subarray with the length of the number passed to the function.
// IT SHOULD BE CONSECUTIVE SET OF NUMBERS
/* EXAMPLES
maxSubarraySum([1,4,2,10,23,3,1,0,20],4) // 39
maxSubarraySum([-3,4,0,-2,6,-1],2)//5
maxSubarraySum([],2) // null  
pattern - sliding window pattern
*/

function maxSubarraySum(arry, num) {
  if (arry.length === 0) {
    return null;
  }

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arry[i];
  }
  maxSum = tempSum;
  for (let j = num; j < arry.length; j++) {
    tempSum = tempSum - arry[j - num] + arry[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
