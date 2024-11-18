const http = require("http");
const fs = require("fs");

http.createServer((req,res) => {


    const url = req.url;

    function Data(err, data){
        res.write(data);
        res.end();
    }

    if(url === "/about"){
        fs.readFile("../../ushtrime1/third_server/views/about.html", Data);
        res.writeHead(200, {"Content-Type":"text/html"});
    }else if(url === "/index"){
        fs.readFile("../../ushtrime1/third_server/views/index.html", Data);
        res.writeHead(200, {"Content-Type":"text/html"})
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"});
        res.write("Page Not Found!")
        res.end();
    }

}).listen(8000);

// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {
//     const url = req.url;

//     function Data(err, data) {
//         if (err) {
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.write("Gabim: Skedari nuk u gjet!");
//             console.log("Gabim:", err);
//             res.end();
//             return;
//         }
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(data);
//         res.end();
//     }

//     if (url === "/about") {
//         fs.readFile("../../third_server/views/about.html", Data); // Lëviz mbrapa te skedari about.html
//     } else if (url === "/index") {
//         fs.readFile("../../third_server/views/index.html", Data); // Lëviz mbrapa te skedari index.html
//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.write("Faqja nuk ekziston!");
//         res.end();
//     }

// }).listen(8000, () => {
//     console.log("Serveri po punon në portin 8000...");
// });
