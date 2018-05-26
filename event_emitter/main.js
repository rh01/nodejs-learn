// 
var events = require("events");

// 
var eventEmitter = new events.EventEmitter();

// bind event to event handler function
eventEmitter.on('some_event', function () {
    // body...
    console.log("some_event emitted");
})

setTimeout(function () {
    // body...
    eventEmitter.emit('some_event');
}, 1000);
