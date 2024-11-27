// Test function findRotationPoint
import findRotationPoint from '../src/findRotationPoint';

test('finds the rotation point in a rotated array', () => {
   const words = [
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist',
      'asymptote',   // <-- rotates here!
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage'
   ];

   const rotationPoint = findRotationPoint(words);

   expect(rotationPoint).toBe(5);
});