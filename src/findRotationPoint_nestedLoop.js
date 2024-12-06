// This algorithm uses a Nested Loop Join to find the rotation point efficiently
// The Nested Loop Join approach has a time complexity of (O(n^2))
function findRotationPoint(words) {
  // Iterate through each word in array
  for (let i = 0; i < words.length; i++) {
    // Compare current word with subsequent word
    for (let j = i + 1; j < words.length; j++) {
      // If word is less than current word it indicates the rotation point and
      // returns that index
      if (words[i] > words[j]) {
        return j;
      }
    }
  }
  // If no rotation is found return 0 (array is not rotated)
  return 0;
}

export default findRotationPoint;
