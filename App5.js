const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listener
emitter.on("message Logged",(e) => {
    console.log("hii Harry , listener called",e)
});

// Raise an Event
emitter.emit("message Logged", {id:1 , url:"http://"});


// Poinst to remmber
// 
//  1 .Take care of order of raising an event and registering an listener
//  2 .on method/addListener method are same