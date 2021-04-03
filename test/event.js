const EventEmitter = require("events")
const door = new EventEmitter()

// newListener event : when a listener is added
// removeListener event : when a listener is removed

// emitter.addListener() → Alias for emitter.on()

// Emits an event. It synchronously calls every event listener in the order they were registered.

door.emit("slam")

// Return an array of strings that represent the events registered on the current EventEmitter object
const eventNames = door.eventNames()
console.log(eventNames)

const maxListeners = door.getMaxListeners()
console.log("door's maximum # of listeners: " , maxListeners)

const cnt = door.listenerCount('open');
console.log("door's listener count: ", cnt)

const listeners = door.listeners()
console.log(listeners)

// emitter.off() → Alias for emitter.removeListener() added in Node.js 10

door.on('open', () => {
    console.log('Door was opend')
})

const ee = new EventEmitter()

ee.once("my-event", () => {
    // 
})

// emitter.prependListener() → It's added in the queue of listeners, and called , before other listeners

// emitter.prependOnceListener()

// emitter.removeAllListeners()

// emitter.removeListener() → Remove a specific listener.

const doSomething = () => {}
door.on('open', doSomething)
door.removeListener('open', doSomething)

// emitter.setMaxListeners(), default is 10
door.setMaxListeners(50)
