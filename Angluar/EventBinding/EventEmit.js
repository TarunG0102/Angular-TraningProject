const EventEmitter = require('node:events');
var myevent = new EventEmitter();
myevent.on("pranayrunning",function(){
    console.log("Pranay is started Running")
})

myevent.emit("pranayrunning")   