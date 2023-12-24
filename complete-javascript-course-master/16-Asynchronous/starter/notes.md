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

Chaining
doSomething(function (result) {
doSomethingElse(result, function (newResult) {
doThirdThing(newResult, function (finalResult) {
console.log(`Got the final result: ${finalResult}`);
}, failureCallback);
}, failureCallback);
}, failureCallback);

function doSomething() {
return new Promise((resolve) => {
setTimeout(() => {
// Other things to do before completion of the promise
console.log("Did something");
// The fulfillment value of the promise
resolve("https://example.com/");
}, 200);
});
}

What is JSON?

    JSON stands for JavaScript Object Notation
    JSON is a lightweight data interchange format
    JSON is language independent *
    JSON is "self-describing" and easy to understand

- The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.

{
"employees":[
{"firstName":"John", "lastName":"Doe"},
{"firstName":"Anna", "lastName":"Smith"},
{"firstName":"Peter", "lastName":"Jones"}
]
}
