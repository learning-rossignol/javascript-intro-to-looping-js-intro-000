
function forLoop(arr) {
  for (let i=0; i < 25; i++){
    let isOne = (i === 1);
    let val = `I am ${isOne ? "1" : i} strange loop${isOne ? "" : "s"}`;
    arr.push(val);
  }
  return arr;
}
