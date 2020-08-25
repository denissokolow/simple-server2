const http = require('http');
const qs = require('querystring');
const PORT = 4321;
const server = http.createServer();
server.listen(process.env.PORT || PORT);
server.on('request', (req, res) => {
    const u = qs.parse(req.url.substring(5));
    const act = req.url.substring(0, 4);
    const n1 = parseInt(u.n1, 10); 
    const n2 = parseInt(u.n2, 10); 
    switch (act) {
        case '/sum': {
                 res.writeHead(200, {
                                    'Content-Type': 'text/javascript; charset=utf-8', 
                                    'Access-Control-Allow-Origin': '*'     
                                     });
                 const result = (n1 + n2);                               
                 res.end(`${result}`);
                        }
        case '/mul': {
                 res.writeHead(200, {
                                    'Content-Type': 'text/javascript; charset=utf-8',
                                    'Access-Control-Allow-Origin': '*'
                                     });
                 const result = (n1 * n2);
                 res.end(`${result}`);
                        }    
    default: {
        res.writeHead(404, {
                            'Content-Type': 'text/html; charset=utf-8'
                             });
        res.end('<h5> > тут ничего нет< </h5>');
               }
    };
});