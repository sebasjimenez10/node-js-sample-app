Sample Node.js Application
===

## Tutorial from [NodeBeginner.Org](nodebeginner.org)
## 

This is the result from following the tutorial from the beginning to the end.

### Elements
* index.js
* server.js
* router.js
* requestHandler.js

#### The dependency is as follows:

1. The index is the main program, it creates and starts the server, the router and the handler.
2. The server uses callback method called onRequest() in order to attend each request. Inside onRequest there is logic implemented to route to upload when all data in de text area is uploaded.
3. The router is called from the server, because the router knows who handles the incoming request. And there is an implementation to determine if the path name is supported or not.
4. And finally, the handler is the one that decides what to do in each case. In case it is a '/index' request it returns a form. And in case it is a '/upload' it returns whatever data is in the field. If it's called directly before calling 'index' it will print 'undefined'