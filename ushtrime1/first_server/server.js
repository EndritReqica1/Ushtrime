const http = require("http");

http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hello World!</h1>");
    res.end();

}).listen(8000);