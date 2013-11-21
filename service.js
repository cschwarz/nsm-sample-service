var http = require('http');

var config = require('./config.json');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World!\n\nUptime: ' + process.uptime() + 's');
});

if (config.failAfter) {
    setTimeout(function () {    
        throw new Error('Failed after ' + process.uptime() + 's');
    }, config.failAfter * 1000);
}

server.listen(config.port);