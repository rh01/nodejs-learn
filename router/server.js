var http = require('http');

var url = require('url');

function start(route) {
    // body...
    function onRequest(request, response) {

        // body...
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        
        
        route(pathname);

        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("Hello World");
        // tag the end
        response.end();

    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;
