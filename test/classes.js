// const person = {
//     name : 'Gildong', 
//     walk() {
//         console.log('walk');
//     }
// };

// const person2 = {
//     name : 'Gildong', 
//     walk() {
//         console.log('walk');
//     }
// };

class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

const person1 = new Person('Gildong');
const person2 = new Person('ChunHyang');

console.log(person1.name);
console.log(person2.name);
person1.walk();