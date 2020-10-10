const http = require("http");

const server = http.createServer((req,res) =>{
        if(req.url === '/'){
            res.write("Hello Harsh");
            res.end();
        }
        if(req.url === '/api/courses'){
            res.write(JSON.stringify([1,2,3]));
            res.end();
        }
});


server.listen(3001);
console.log("Listening on port 3000...");