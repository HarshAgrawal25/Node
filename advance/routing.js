// Routing without express module.Doing routing from very basic


const http = require("http");
const url = require('url');
const fs =require('fs')

// fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8',(err,data) => {
//     const productData = JSON.parse(data);
// })


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res) => {

    const pathname = req.url;
    if(pathname === '/' || pathname === '/overview'){
        res.end("This is OVERVIEW");
    }else if(pathname === '/product'){
        res.end('This is product')
    }else if(pathname === '/api'){
       
            res.writeHead(200,{'Content-type':'application/json'})
            res.end(data);
        
    }else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header':'hello-world'
        });
        res.end('<h1>Page not found!</h1>')
    }
})

server.listen(8000,'127.0.0.1',() =>{
    console.log('Listening to port 8000');
})