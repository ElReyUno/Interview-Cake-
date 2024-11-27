# Find Rotation Point

This project focuses on finding the rotation point in a rotated sorted array. It is implemented in JavaScript and includes unit tests using Jest.

## Objectives
- Implement an algorithm to find the rotation point in a rotated sorted array.
- Write unit tests to ensure the correctness of the algorithm.

## From Interview Cake
I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example (JavaScript):

  const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

To keep things simple, you can assume all words are lowercase.

## Tools and Technologies
- JavaScript
- Jest (for unit testing)
- Node.js
- Babel

## How to Run the Tests
npm (Node Package Manager) and yarn are both package managers for JavaScript. I will be using npm however either will suffice.

In utilizing the Test-Driven Development (TDD) software development process I will be writing the test to initially fail (red) which will pass (green) once the minimum code to pass the test is written and then the code will be refactored to improve design and structure. The cycle of "Red-Green-Refactor" is repeated for each new feature or piece of functionality.

1. Ensure you have Node.js installed.
   - Download and install from https://nodejs.org/
   - Verify installation:
     - `node -v`
     - `npm -v`
2. Install the dependencies by running `npm install`.
3. Install Jest by running `npm install --save-dev jest`.
   - This creates package.json. Ensure this file includes a test script to run Jest.
4. Run the tests by executing `npm test` from the parent directory of the test file.
