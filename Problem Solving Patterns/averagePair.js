// waf to check a if avg of pair is true as of given avg
// pattern - multiplePointers
/* 
examples 
averagePair([1,2,3],2.5) // true
averagePair([],4) // false

*/

function averagePair(arry, num) {
  if (arry.length === 0) {
    return false;
  }
  let start = 0;
  let end = arry.length - 1;

  while (start < end) {
    let avg = (arry[start] + arry[end]) / 2;
    console.log(arry[start], arry[end]);
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
    console.log(end);
  }
  return false;
}

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
