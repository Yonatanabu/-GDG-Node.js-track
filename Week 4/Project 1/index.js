const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/hello' && req.method === 'GET') res.end('Hello, World!');
    else if (req.url === '/data' && req.method === 'POST') req.pipe(res);
    else res.end('Not Found');
}).listen(3000)
