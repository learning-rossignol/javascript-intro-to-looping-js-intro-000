
function forLoop(arr) {
  for (let i=0; i < 25; i++){
    let isZero = (i === 0);
    let val = `I am ${isZero ? "1" : ++i} strange loop${isZero ? "" : "s"}`;
    arr.push(val);
  }
  return arr;
}
