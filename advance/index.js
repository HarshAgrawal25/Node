const rq= require("fs");

//reading csv(comma seperated values) file by node js
const text = rq.readFileSync('C:/Users/HP/Desktop/Ar Python/book.csv','utf-8');
console.log(text);