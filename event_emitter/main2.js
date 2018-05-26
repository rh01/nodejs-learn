// create event module and initialize the event object
var events = require("events");
var emitter =  new events.EventEmitter();

emitter.on('someEvent',function (arg1, arg2) {
    // body...
    console.log("listener1", arg1, arg2);
});

emitter.on('someEvent', function(arg1, arg2) { 
    console.log('listener2', arg1, arg2); 
});

emitter.emit('someEvent', 'arg1 ', 'arg2 ')

