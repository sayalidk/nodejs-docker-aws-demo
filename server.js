const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>My Docker App</title>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
        <p>My application is running inside Docker on AWS.</p>
        <p>Project: Docker Practice</p>
      </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Node.js server listening on port ${PORT}`);
});
