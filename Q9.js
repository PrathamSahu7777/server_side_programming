 Write a JavaScript program to check if a numeric array is sorted or not.
function isArraySorted(arr) {
for (let i = 1; i < arr.length; i++) {
if (arr[i] < arr[i - 1]) {
return false;
}
}
return true;
}
const sortedArray = [1, 2, 3, 4, 5];
console.log(`${sortedArray ? "array is sorted": "array is 
not sorted"}`);
//output: array is sorted
