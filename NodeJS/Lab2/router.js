const fs = require('fs');

const handleHome = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello Node!</h1>');
  res.write('<a href="/read-message">Read Message</a><br>');
  res.write('<a href="/write-message">Write Message</a>');
  res.end();
};

const handleReadMessage = (req, res) => {
  fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.write('<h1>Error reading the message</h1>');
      res.end();
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<p>Message: ${data}</p>`);
      res.end();
    }
  });
};

const handleWriteMessage = (req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`
      <form method="POST" action="/write-message">
        <input type="text" name="message" placeholder="Enter your message" />
        <button type="submit">Submit</button>
      </form>
    `);
    res.end();
  } else if (req.method === 'POST') {
    let message = '';

    req.on('data', chunk => {
      message += chunk;
    });
    
    req.on('end', () => {
        fs.writeFile('message.txt', message, err => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.write('<h1>Error writing the message</h1>');
            res.end();
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<h1>Message written successfully</h1>');
            res.end();
          }
        });
      });
    }
  };
  
  module.exports = {
    handleHome,
    handleReadMessage,
    handleWriteMessage
  };
