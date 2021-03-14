// export const data = [1,2,3];


// let example = 'gildong';

// console.log(example.padStart(10, 'a'));

// console.log(example.padEnd(10, 'a'));


// let example2 = "YouTube.com/myspark02";
// console.log("[", example2.padStart(100), "]");
// console.log(example2.padStart(100).length);
// console.log("[", example2, "]");

// import {Animal, Cat} from './test_animal.js';

// let cat = new Animal('Cat', 4);

// cat.type = 'PersianCat';
// console.log(cat);
// cat.makeNoise("Meow");

// console.log(Animal.return10());

// console.log(cat.metaData);
// console.log(cat.type);
// console.log(cat.Type);

// cat = new Cat('Cat', 4);

// cat.makeNoise();
// console.log(cat.metaData);

// trailing commas

function add5(param1, ) {
    const example = {
        name: 'gdhong', 
    }
    console.log(example);
}

add5(5);

// Async & Await
/*
npm i node-fetch --save
const fetch = require("node-fetch");
*/
const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

const fetch = require('node-fetch');

// async function getTop100Campers() {
//     const response = await fetch(apiUrl);
//     const json = await response.json();

//     console.log(json);
// }

async function getTop100Campers() {
    const response = await fetch(apiUrl);
    console.log(response);
    // const json = await response.json();

    // console.log(json);
}


// function getTop100Campers() {
//     fetch(apiUrl)
//     .then((response) => response.json())
//     .then((json) => {
//         console.log(json);
//     }).catch((error)=>{
//         console.log('failed', error);
//     });
// }

// function getTop100Campers() {
//     fetch(apiUrl)
//     .then((response) => console.log(response))
//     .catch((error)=>{
//         console.log('failed', error);
//     });
// }

// getTop100Campers();

function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 3000);
    });
}

// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// });

async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();

// Sets

const exampleSet = new Set([1,1,1,1,1,1, 2, 2,2,2,2,2,3]);
console.log(exampleSet);
exampleSet.add(100);
console.log(exampleSet.size);
console.log(exampleSet);

exampleSet.delete(1);
console.log(exampleSet); 

console.log(exampleSet.has(3));

exampleSet.clear();
console.log(exampleSet.size);
