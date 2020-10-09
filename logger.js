
console.log(__dirname)
console.log(__filename)
var url ='http://mylogger.io/log';

function log(message){
    console.log(`My name is ${message}`);
}
module.exports = log;

