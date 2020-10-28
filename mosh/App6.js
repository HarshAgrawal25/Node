const EventEmitter = require("events");



const Logger = require("./logger");
const logger = new Logger();

// Regester a listener
logger.on("message Logged",(e) =>{
    console.log("hii Harry , listener called",e)
})


logger.log('Harsh');