// Request Handlers

var exec = require("child_process").exec;

function index (response){
	console.log("Request handler for 'index' has been called");

	exec("ls -lah", function(error, stdout, stderr){
		response.writeHead(200, {"Content-Type": "text/html"});
	    response.write(stdout);
	    response.end();
	});
}

function upload (response){
	console.log("Request handler for 'upload' has been called");
	response.writeHead(200, {"Content-Type": "text/html"});
    response.write("You are in upload");
    response.end();
}

exports.index = index;
exports.upload = upload;