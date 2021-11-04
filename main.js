//!כתוב פונקציה המחפשת מספר בתוך מערך ממוין
let arrayNumbers = [1, 4, 6, 8, 12, 22,49,35];
function binarySearch(array, num) {
    if(array.length==0)return false;

  let arrayLeft = array.slice(0, Math.floor(array.length / 2));
  let arrayRight = array.slice(Math.floor(array.length / 2));
  console.log({ arrayRight ,arrayLeft});
  if (arrayLeft[arrayLeft.length - 1] == num||arrayRight[0]==num )return true;
  
  if (arrayLeft[arrayLeft.length - 1] > num) {
   return binarySearch(arrayLeft, num);
  } else {
  return  binarySearch(arrayRight, num);
  }
}
console.log(binarySearch(arrayNumbers,49));
