
const PORT = 5000;
const http = require("http");

const server = http.createServer((req, res) => {
    res.write("hello");
    res.end();
})

server.listen(() => console.log("server is running on port ", PORT));
