// Catching uncaught exceptions
// If an uncaught exception gets thrown during the execution of your program, your program will crash.

// To solve this, you listen for the uncaughtException event on the process object:

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node.js docs)
  })

/*
const doSomething1 = () => {
  //...
  try {
    //...
  } catch (err) {
    //... handle it locally
    throw new Error(err.message)
  }
  //...
}

doSomething1()
  .then(() => {
    return doSomething2().catch(err => {
      //handle error
      throw err //break the chain!
    })
  })
  .then(() => {
    return doSomething3().catch(err => {
      //handle error
      throw err //break the chain!
    })
  })
  .catch(err => console.error(err))

*/

/*
Error handling with async/await
Using async/await, you still need to catch errors, and you do it this way:
*/

async function someOtherFunction() {
    await setTimeout(()=>console.log('someOtherFunction called...'), 2000);
}
async function someFunction() {
    try {
      await someOtherFunction()
    } catch (err) {
      console.error(err.message)
    }
  }


someFunction()
console.log('Bye')
 