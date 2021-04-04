const { timeStamp } = require('console');
const EventEmitter = require('events');
const uuid = require('uuid');

// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());
// console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id:uuid.v4(), message:msg});
    }
}

module.exports=Logger;


const obj = {
    name: 'joe',
    age: 35,
    person1: {
      name: 'Tony',
      age: 50,
      person2: {
        name: 'Albert',
        age: 21,
        person3: {
          name: 'Peter',
          age: 23
        }
      }
    }
  }
  console.log(obj)

  console.log(JSON.stringify(obj, null, 2))


require('util').inspect.defaultOptions.depth = null
console.log(obj)