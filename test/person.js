// const person = {
//     name : 'John Doe', 
//     age : 30
// }


// module.exports = person


// console.log(__dirname, '\n', __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and ${this.age}`);
    }
}

// var p = new Person('gildong', 19);
// p.greeting()

module.exports = Person;

