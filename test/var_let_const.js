// scope of var variable -> function
// scope of let variable -> block
// scope of const variable -> block 

function sayHello() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

// sayHello();

const x = 1;
// x = 2;
