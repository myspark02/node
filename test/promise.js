/*
    1. How to create a Promise
    2. How to change state of a Promise
    3. How to listen for the state change of a Promise
*/
function onSuccess() {
    console.log('Success')
}

function onError() {
    console.log('Error')
}

var promise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        //resolve()
        reject()
    }, 2000)
})

// promise.then(onSuccess)
// promise.catch(onError)
