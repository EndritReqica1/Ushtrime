const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/html") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write("<h1>This is an HTML response</h1>");
    } else if (req.url === "/json") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify({ message: "This is a JSON response" }));
    } else if (req.url === "/text") {
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("This is plain text.");
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("Page not found.");
    }
    res.end();
}).listen(8000);
