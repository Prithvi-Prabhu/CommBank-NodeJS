const http = require('http');

const server = http.createServer((req, res) => {
    const { url, method } = req;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`This is ${method} with url ${url}`);
});

server.listen(0, () => {
    console.log(`Server running on port ${server.address().port}`);
});
