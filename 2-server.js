// 2- Creating Server:

const http = require("http");

// Creating Server:-
http.createServer(function(request, response) {
    console.log('Request received.');
    
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write(<h1>
        Hello Node !
    </h1>/n );
    response.end();
}).listen(3000);

console.log('Server running at http://localhost:3000/');