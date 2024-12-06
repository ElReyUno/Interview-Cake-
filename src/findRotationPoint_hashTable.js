// This algorithm uses a Hash Table to find the rotation point efficiently
// The Hash Table approach has a time complexity of O(n log n)
function findRotationPoint(words) {
  if (words.length === 0) return 0;

  // Populate Hash Table
  const wordMap = new Map();
  for (let i = 0; i < words.length; i++) {
    wordMap.set(words[i], i);
  }

  // Creates an array a from the keys of wordMap and sorts them alphabetically
  const sortedWords = Array.from(wordMap.keys()).sort();

   // Iterate sorted words
  for (let i = 0; i < sortedWords.length; i++) {
    // Compre if the original index is different from the current index
    if (wordMap.get(sortedWords[i]) !== i) {
      // If differet from original index the word is out of order due to rotation
      // then return the original index which is the rotation point
      return wordMap.get(sortedWords[i]);
    }
  }

  return 0;
}

export default findRotationPoint;
