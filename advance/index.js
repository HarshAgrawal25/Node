const rq= require("fs");
const http = require("http");

//Blocking Synchrous Way


//reading csv(comma seperated values) file by node js
// const text = rq.readFileSync('C:/Users/HP/Desktop/Ar Python/book.csv','utf-8');
// console.log(text);

// rq.writeFileSync('C:/Users/HP/Desktop/Ar Python/book100.csv',text);
// console.log("file written");

//Non-blocking Asynchronus way
rq.readFile('E:/Documents(Laptop)/Node/advance/start.txt','utf-8',(err,data1)=>{
    if(err) return console.log('ERROR')
    rq.readFile(`E:/Documents(Laptop)/Node/advance/${data1}.txt`,'utf-8',(err,data2)=>{
        console.log(data2)
        rq.readFile(`E:/Documents(Laptop)/Node/advance/append.txt`,'utf-8',(err,data3)=>{
            console.log(data3)
            rq.writeFile('E:/Documents(Laptop)/Node/advance/final.txt',`${data2}\n${data3} 😁`,'utf-8',err => {
                console.log('Your file has been written😄😄 ');
            });
        });
    });
});

console.log("will read file!");

