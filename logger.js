const EventEmitter = require('events');


class Logger extends EventEmitter{
    log(message){
        console.log(`My name is ${message}`);
        // Raise an event
       this.emit("message Logged", {msg : "Hello user"}) 
    }
}
 

module.exports = Logger;

