var http = require("http");
var url = require("url");
var fs = require("fs");

// http.createServer(function (req, res) {
// 	fs.readFile("index.html", function (err, data) {
// 		if (err) {
// 			res.writeHead(404, { "Content-Type": "text/html" });
// 			return res.end("404 Not Found");
// 		}
// 		res.writeHead(200, { "Content-Type": "text/html" });
// 		res.write(data);
// 		return res.end();
// 	});
// }).listen(8080);

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	const filename = q.pathname;
	console.log({ q, filename });
	if (q.pathname === "/about") {
		fs.readFile("about.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else if (q.pathname === "/contact-me") {
		fs.readFile("contact-me.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else {
		fs.readFile("index.html", function (err, data) {
			if (err) {
				res.writeHead(404, { "Content-Type": "text/html" });
				return res.end("404 Not Found");
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	}
}).listen(8080);
