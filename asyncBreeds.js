// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) {
      callback(data);
    } else {
      callback(undefined);
    }
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// CHANGE 1: Moved the console.log into a new function:
const printOutCatBreed = details => {
  console.log('Return Value: ', details) // => print out details correctly.
};

// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
breedDetailsFromFile('Bombay', printOutCatBreed);
module.exports = breedDetailsFromFile;

// breedDetailsFromFile('Balinese', printOutCatBreed);
// module.exports = breedDetailsFromFile;