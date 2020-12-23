
const readline = require('readline');
// process is global object, you don't need to require
let rl = readline.createInterface({input : process.stdin, 
                            output : process.stdout});

let num1 = Math.floor((Math.random() * 10) + 1) ;                           
let num2 = Math.floor((Math.random() * 10) + 1) ;

let answer = num1 + num2;

rl.question(`What is ${num1} + ${num2}? \n`, 
            (userInput) => {
                if (userInput.trim() == answer) {
                    rl.close();
                } else {
                    rl.setPrompt('Incorrect response please try again\n');
                    rl.prompt();
                    rl.on('line', (userInput) => {
                            if (userInput.trim() == answer) {
                                rl.close();
                            } else {
                                rl.setPrompt( `Your answer of ${userInput} is incorrect. try again\n`);
                                rl.prompt();
                            }
                    });
                }
                // console.log(userInput);
            });

rl.on('close', ()=>{
    console.log('Correct!!!!');
})  ;          