var argumentArray = process.argv.slice(2);

const request = require('request');
const fs = require('fs');

console.log(argumentArray[0])

let htmlContent;
let fileName = argumentArray[1]

request(argumentArray[0], (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  htmlContent = body;
  
  fs.writeFile(fileName, htmlContent, function (err) {
    if (err) return console.log(err);
  });
  
});

console.log(htmlContent);


