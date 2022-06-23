let noOneArry = String(noOne).split("");
let noTwoArry = String(noTwo).split("");

if (noOneArry.length !== noTwoArry.length) {
  return false;
}
let leftObj = {};
let rightObj = {};

for (let a of noOneArry) {
  leftObj[`${a}`] = (leftObj[`${a}`] || 0) + 1;
}

for (let b of noTwoArry) {
  rightObj[`${b}`] = (rightObj[`${b}`] || 0) + 1;
}

console.log(leftObj);
console.log(rightObj);

for (let key in leftObj) {
  console.log(key);
  if (key in rightObj) {
    if (leftObj[`${key}`] !== rightObj[`${key}`]) {
      return false;
    }
  } else {
    return false;
  }
}
return true;
