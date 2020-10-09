const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listener
emitter.on("message Logged",function(){
    console.log("hii Harry , listener called")
});

// Raise an Event
emitter.emit("message Logged");


// Poinst to remmber
// 
//  1 .Take care of order of raising an event and registering an listener
//  2 .on method/addListener method are same