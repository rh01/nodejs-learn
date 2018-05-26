// initialize http object
var http = require("http")

http.createServer(function (request, response) {

    // body...
    response.writeHead(200, {'Content-Type':'text/plain'});
    //
    response.end("Hello world");
}).listen(8888);

console.log("server start at http://127.0.0.1:8888");