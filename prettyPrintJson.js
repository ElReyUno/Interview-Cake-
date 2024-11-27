// This file parses test-results.js
// Execute script by running "node prettyPrintJson.js"
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the JSON file
const inputFilePath = path.join(__dirname, 'test-results.json');

// Path to the output file
const outputFilePath = path.join(__dirname, 'pretty-test-results.json');

// Read the JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Pretty-print the JSON data
    const prettyJson = JSON.stringify(jsonData, null, 2);

    // Write the pretty-printed JSON data to the output file
    fs.writeFile(outputFilePath, prettyJson, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error writing the file:', writeErr);
        return;
      }
      console.log(`Pretty-printed JSON has been saved to ${outputFilePath}`);
    });
  } catch (parseErr) {
    console.error('Error parsing the JSON data:', parseErr);
  }
});