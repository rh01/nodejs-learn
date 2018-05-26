// basic logic
// 1. emit(trigger) the event 
// 2. bind event to eventhandler
// 3. execute the eventhandler
// 4. if it has more event, put them into queue, and FIFO, the out will be excuted

// create event module and object
var events = require("events");

// create eventemitter object
var eventEmitter = new events.EventEmitter();

// event handler
var connectionHandler = function connected() {
    // body...
    console.log("conect succ");
    // 触发data_received事件
    eventEmitter.emit('data_received');
};

// bind event handler
eventEmitter.on('connection', connectionHandler);

// 
eventEmitter.on('data_received', function () {
    // body...
    console.log("data received");
});

// begin at here
eventEmitter.emit('connection');

console.log("finished");


