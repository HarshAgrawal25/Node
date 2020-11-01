const http = require("http");
const url = require('url');

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.end('Hello from the server');
})

server.listen(8000,'127.0.0.1',() =>{
    console.log('Listening to port 8000');
})