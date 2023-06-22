/*
In VS Code, create a file named index.js. Then, in VS Code Terminal, type ‘npm init’.

In VS Code, install the following NPM packages:
nodemon

Inspect the contents of package.json and package-lock.json. Make sure to understand what those files are about.

Add a new run script: “start”, which runs “nodemon index.js” script.

Import the “http” module. Set your server to run on port 8000.

In your server, console.log the request from localhost:8000. 

Now we will do some routing. Create a router module. There, you should handle requests coming from “/”, “/read-message” and “/write-message”.

Respond to “http://localhost:8000/” with the h1 element, “Hello Node!”. There, you should also have two anchor elements (links or <a></a>), one to the address “http://localhost:8000/read-message” and another to “http://localhost:8000/write-message”.

Respond to requests from “/write-message” by sending a html form that has a text input field. When a user enters some text into the field, write the content of it to some text file. (you will need to deal with parsing and buffers for this.)

Respond to requests from “/read-message” by sending some html that displays the content of your text file. 

Save and upload all your work on Google Classroom to Node.Js - Lab 2 Submission.
*/

const http = require('http');
const { handleHome, handleReadMessage, handleWriteMessage } = require('./router');

const server = http.createServer((req, res) => {
  console.log('Request received from localhost:8000');

  if (req.url === '/') {
    handleHome(req, res);
  } else if (req.url === '/read-message') {
    handleReadMessage(req, res);
  } else if (req.url === '/write-message') {
    handleWriteMessage(req, res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

server.listen(8000, () => {
  console.log('Server is running on port 8000');
});
