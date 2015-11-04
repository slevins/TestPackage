module.exports = function() {
	var http = require('http-server');
	http.createServer(function(req,res) {
		console.log("Hi")
	}).listen(3000)
}