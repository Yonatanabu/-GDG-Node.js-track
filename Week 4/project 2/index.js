onst http = require('http');

let users = [];
let idCounter = 1;

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (url === '/users' && method === 'GET') {
        res.end(JSON.stringify(users));
    } 
    else if (url === '/users' && method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const user = JSON.parse(body);
            user.id = idCounter++;
            users.push(user);
            res.end(JSON.stringify(user));
        });
    } 
    else if (url.startsWith('/users/') && method === 'PUT') {
        const id = parseInt(url.split('/')[2]);
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const updatedData = JSON.parse(body);
            users = users.map(user => user.id === id ? { ...user, ...updatedData } : user);
            res.end(JSON.stringify({ message: 'User updated' }));
        });
    } 
    else if (url.startsWith('/users/') && method === 'DELETE') {
        const id = parseInt(url.split('/')[2]);
        users = users.filter(user => user.id !== id);
        res.end(JSON.stringify({ message: 'User deleted' }));
    } 
    else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000);
