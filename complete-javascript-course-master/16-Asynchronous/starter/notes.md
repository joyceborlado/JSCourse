Synchronous code

- executed line by line
- each line of code waits for previous line to finish

Asynchronous code

- executed after a task that runs in the background finishes
- execution doesn't wait for an asynchronous task to finish its work

AJAX- Asynchronous Javascript and XML

- allows us to communicate with remote web servers in an asynchronous way

API- application programming interface
piece of software that can be used by another piece of software in order to allow applications to talk to each other

XML data foramt = not used anymore
JSON Data format = most popular

//////////////////
using promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.
function successCallback(result) {
console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
