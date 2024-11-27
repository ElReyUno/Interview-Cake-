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

// The subsequent test for correctness of the findRotationPoint function under various constraints
test('returns 0 when the array is not rotated', () => {
   const words = [
      'asymptote',
      'babka',
      'banoffee',
      'engender',
      'karpatka',
      'othellolagkage',
      'ptolemaic',
      'retrograde',
      'supplant',
      'undulate',
      'xenoepist'
   ];

   const rotationPoint = findRotationPoint(words);

   expect(rotationPoint).toBe(0);
});

test('returns the correct rotation point for a small rotated array', () => {
   const words = [
      'c',
      'd',
      'a',
      'b'
   ];

   const rotationPoint = findRotationPoint(words);

   expect(rotationPoint).toBe(2);
});

test('returns the correct rotation point for an array with two elements', () => {
   const words = [
      'b',
      'a'
   ];

   const rotationPoint = findRotationPoint(words);

   expect(rotationPoint).toBe(1);
});

test('returns 0 for an empty array', () => {
   const words = [];

   const rotationPoint = findRotationPoint(words);

   expect(rotationPoint).toBe(0);
});

test('returns 0 for an array with one element', () => {
   const words = ['a'];

   const rotationPoint = findRotationPoint(words);

   expect(rotationPoint).toBe(0);
});