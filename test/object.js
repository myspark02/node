const person = { 
    name: 'scpark', 
    walk : function() {
        console.log(this);
    },
    talk() {return 'hi';}
};
console.log(person.talk());
const targetMember = 'name';
person[targetMember] = 'SungChul';
console.log(person[targetMember]);
person.walk();

// const walk = person.walk;
const walk = person.walk.bind(person);

console.log(walk);
walk();