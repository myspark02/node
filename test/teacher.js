// import {Person} from './person'
const person = require('./person') ;

class Teacher extends person.Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    };
    teach() {
        console.log("teach");
    }
}

// const teacher = new Teacher();
// teacher.walk();

module.exports = {Teacher};