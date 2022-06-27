/* WAF to find any duplicates in params */

/* 
areThereanyDuplicates(1, -2, -3) // false
areThereanyDuplicates(1, -2, -2, 1) // true
*/

function areThereanyDuplicates(...a) {
  let freqObj = {};

  for (let param of a) {
    freqObj[`${param}`] = (freqObj[`${param}`] || 0) + 1;
  }

  for (let key in freqObj) {
    if (freqObj[`${key}`] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereanyDuplicates(1, -2, "a", "a")); // true
