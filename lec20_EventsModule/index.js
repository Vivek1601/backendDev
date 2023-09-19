// Example 1 -> Registering for the event to be fired only one time using once 

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName",() => {
  console.log("Your name is vivek");
}) 

// event.emit("sayMyName");

// Example 2 -> Create an event emitter instance and register a couple of callbacks

event.on("sayMyName",() => {
  console.log("Your name is pankaj");
}) 

event.on("sayMyName",() => {
  console.log("Your name is dj");
}) 

event.emit("sayMyName");

// Example 3 -> Regitsering for the event with callback paramneter

event.on('checkage',(sc,msg) => {
  console.log(`status code is ${sc} and page is ${msg}`);
})

event.emit("checkage",200,"ok");
