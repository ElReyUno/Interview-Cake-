// This algorithm uses Binary Search to find the rotation point efficiently
// The Binary Search approach has a time complexity of O(log n) which is optimal for this problem
function findRotationPoint(words) {
  if (words.length === 0) return 0;

  // Check if the array is already sorted
  // Before performing the Binary Search, check if the array is already sorted by comparing the first and
  // last elements. If the first element is less than or equal to the last element, the array is not 
  // rotated, and the rotation point is at index 0
  if (words[0] <= words[words.length - 1]) {
    console.log('Array is not rotated');
    return 0;
  }

  // Execute Binary Search
  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    console.log(`left: ${left}, mid: ${mid}, right: ${right}, words[mid]: ${words[mid]}`);

    if (words[mid] >= words[0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  console.log(`Rotation point found at index: ${left}`);
  return left;
}

export default findRotationPoint;