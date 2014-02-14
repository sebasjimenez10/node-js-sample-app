// Server module for sample application

var http = require("http");
var url = require("url");

function start(route, handle){
	function onRequest( request, response ){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");

		var postedData = "";

		request.setEncoding("utf8");
		request.addListener("data", function(postedPiece) {
			postedData += postedPiece;
			console.log("Received POST piece '" + postedPiece + "'.");
      	});

      	request.addListener("end", function() {
      		route(handle, pathname, response, postedData);
    	});
	}

	http.createServer( onRequest ).listen(8888);
	console.log("Server created");
}

exports.start = start;