var http = require('http');
var url = require('url');
var favicon = require('serve-favicon');
var _favicon = favicon(__dirname + '/favicon.ico');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

	_favicon(request,response,function(){
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();		
	});
	
    
  }

  http.createServer(onRequest).listen(8008);
  console.log("Server has started.");
}

exports.start = start;