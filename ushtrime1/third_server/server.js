const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {

    const url = req.url;

    function Data(err, data){
        res.write(data);
        res.end();
    }

    if(url === "/index"){
        fs.readFile("views/index.html", Data);
        res.writeHead(200, {"Content-Type":"text/html"});
    }else if(url === "/about"){
        fs.readFile("views/about.html", Data);
        res.writeHead(200, {"Content-Type":"text/html"});
    }else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write("Page not found.");
    }

}).listen(8000);


