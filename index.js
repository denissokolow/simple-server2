const http = require('http');
const moment = require('moment');
const PORT = 4321;
const server = http.createServer();
server.listen(process.env.PORT || PORT);
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({date: moment().format('DD.MM.YYYY HH.mm.ss')}));
});




