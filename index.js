const http = require('http');
const PORT = 4321;
const server = http.createServer();
server.listen(process.env.PORT || PORT);
server.on('request', (req, res) => {
    res.end('Hello');
});




