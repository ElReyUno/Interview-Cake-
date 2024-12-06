// This algorithm uses a Hash Set to find the rotation point efficiently
// The Hash Set approach has a time complexity of (O(n \log n))
export default function findRotationPoint(words) {
  // If nothing is in the array return 0
  if (words.length === 0) return 0;

  // Initialize variables
  let smallestWord = words[0];
  let rotationPoint = 0;

  // Loop starts on the second word and interates through array
  for (let i = 1; i < words.length; i++) {
    // Check to see if the current word is smaller than smallestWord
    if (words[i] < smallestWord) {
      // If the current word is smaller it becomes smallestWord
      smallestWord = words[i];
      // Update rotationPoint to the current index
      rotationPoint = i;
    }
  }

  return rotationPoint;
}
