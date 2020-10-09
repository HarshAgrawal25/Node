const EventEmitter = require('events');
const emitter = new EventEmitter();

console.log(__dirname)
console.log(__filename)
var url ='http://mylogger.io/log';

function log(message){
    console.log(`My name is ${message}`);
}

emitter.on("Logging in",(e) => {
    console.log(e.msg)
})

emitter.emit("Logging in", {msg : "Hello user"})
module.exports = log;

