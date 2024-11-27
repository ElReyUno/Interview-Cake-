// Jest Unit Test For findRotationPoint Function Using Various Algorithms
const implementations = [
  { name: 'Binary Search', path: '../src/findRotationPoint_binarySearch' },
  { name: 'Nested Loop', path: '../src/findRotationPoint_nestedLoop' },
  { name: 'Hash Set', path: '../src/findRotationPoint_hashSet' },
  { name: 'Hash Table', path: '../src/findRotationPoint_hashTable' },
];

implementations.forEach(({ name, path }) => {
  describe(`findRotationPoint - ${name}`, () => {
    let findRotationPoint;

    beforeAll(async () => {
      findRotationPoint = (await import(path)).default;
    });

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
  });
});

// Mock Function
function findRotationPoint(words) {
  if (words.length === 0) return 0;

  //Before performing the binary search check if the array is already sorted by comparing the first and
  // last elements. If the first element is less than or equal to the last element, the array is not 
  // rotated, and the rotation point is at index 0
  if (words[0] <= words[words.length - 1]) {
    return 0;
  }

  // Execute Binary Search
  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (words[mid] >= words[0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

export default findRotationPoint;