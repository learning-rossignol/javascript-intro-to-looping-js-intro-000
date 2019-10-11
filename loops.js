
function forLoop(arr) {
  for (var i=0; i < 25; i++){
    arr.push(
         if (i === 1) {
           "I am 1 strange loop."
         } else {
           "I am ${i} strange loops."
         }
  }
  return arr;
}
