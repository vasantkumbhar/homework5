var http = require("http"),
  fs = require("fs");

function readFileAsSync() {
  return new Promise((resolve, reject) => {
    fs.readFile("./index.html", "utf8", function(err, data) {
      if (err) throw err;
      resolve(data);
    });
  });
}

async function callRead() {
    let html = await readFileAsSync();
    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
}

callRead();

