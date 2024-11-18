// const http = require("http");
// const fs = require("fs");

// http.createServer((req, res) => {

//     const url = req.url;

//     function Data(err, data){
//         res.write(data);
//         res.end();
//     }

//     if(url === "/index"){
//         fs.readFile("views/index.html", Data);
//         res.writeHead(200, {"Content-Type":"text/html"});
//     }else if(url === "/about"){
//         fs.readFile("views/about.html", Data);
//         res.writeHead(200, {"Content-Type":"text/html"});
//     }else {
//         res.writeHead(404, {"Content-Type": "text/html"});
//         res.write("Page not found.");
//     }

// }).listen(8000);


const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const url = req.url;

    function Data(err, data) {
        if (err) {
            // Gabimi kur skedari nuk ekziston ose ka ndodhur një problem
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.write("Gabim: Skedari nuk u gjet ose ka ndodhur një problem gjatë leximit!");
            console.log("Gabim gjatë leximit të skedarit:");
            console.log(err); // Këtu do të shfaqim informacionin për gabimin
            res.end();
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    }

    // Përpiqemi të lexojmë një skedar që nuk ekziston
    if (url === "/index") {
        fs.readFile("views/index_nonexistent.html", Data); // Skedari nuk ekziston
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.write("Faqja nuk ekziston!");
        res.end();
    }

}).listen(8000, () => {
    console.log("Serveri po punon në portin 8000...");
});
