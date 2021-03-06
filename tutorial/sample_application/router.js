// Router for sample application

function route(handle, pathname, response, postedData){
	console.log("About to route a request to " + pathname);
	if( typeof handle[pathname] === 'function' ){

		return handle[pathname](response, postedData);
	}else{

		console.log("No request handler found for " + pathname);
	    response.writeHead(404, {"Content-Type": "text/html"});
	    response.write("404 Not found");
	    response.end();
	}
}

exports.route = route;