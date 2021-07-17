const personalInformation = {
    firstName: 'S.Cheol',
    lastName: 'Park',
    city: 'Daegu',
    state: 'Korea'
};

const { firstName: fn, lastName: ln } = personalInformation;

console.log(`${fn} ${ln}`);

let names = ['gdhong', 'mylee', 'chseong', 'mspark']

let [name1, name2, name3, name4] = names;

console.log(name1)


function addressMaker(city, state) {
    //const newAddress = {newCity: city, newState: state};
    const newAddress = { city, state };
    console.log(newAddress);
}

addressMaker('Austin', 'Texas');


function addressMaker2(address) {
    const { city, state } = address;

    // const newAddress = {
    //     city: address.city, 
    //     state: address.state, 
    //     contry: 'US'
    // };

    const newAddres = {
        city,
        state,
        country: 'US'
    };

    console.log(newAddres);
}

addressMaker2({ city: 'Austin', state: 'Texas' })

let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
    total += income;
}

console.log(total);

let str = "동해물과 백두산이";

for (const c of str) {
    console.log(c);
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [...arr1];
arr2.push(true)

// console.log(arr2)
// console.log(arr1)

// function add(nums) {
//     console.log(nums);
//     console.log(arguments);
// }

// add(4, 5,6, 7, 8, 9, 12);



function add(...nums) {
    console.log(nums);
}

add(4, 5, 6, 7, 8, 9, 12);


function add3(...nums) {
    // let total = nums.reduce(function(x, y) {
    //     return x+y;
    // });

    let total = nums.reduce((x, y) => x + y);

    console.log(total);
}

add3(4, 5, 7, 8, 12);

function add4(numArray = []) {
    let total = 0;
    numArray.forEach(element => {
        total += element;
    });
    console.log(total);
}
add4();
add4([4, 5, 9, 10]);

let numArray = [1, 2, 3, 4, 5];

console.log(numArray.indexOf(0));
console.log(numArray.includes(0));

// if (false) {
//     let example = 5;
// }

// console.log(example);

// var example;

// if (false) {
//     example = 5;
// }

// const example = 5;
// example = 10;
// const example = [];
// example.push(9);
// console.log(example);

const example = {};
example.firstName = 'scpark';

console.log(example);

// import { data } from './test2.js';

// let updatedData = data;

// updatedData.push(50);
// console.log(data);
// console.log(updatedData);
var a = 0;

({ a, b } = { a: 10, b: 20 })
console.log(a);

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

let n1, n2;

[n1 = 5, n2 = 7] = [1];
console.log(n1); // 1
console.log(n2); // 7

a = 1;
b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]



// Parsing an array returned from a function
function f() {
    return [1, 2];
};

[a, b] = f();
console.log(a); // 1
console.log(b); // 2

//Assigning the rest of an array to a variable
[a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]

// Object destructuring
// Basic assignment
user = {
    id: 42,
    is_verified: true
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true

({ a, b } = { a: 11, b: 22 });

console.log(a);
console.log(b);

// Assigning to new variable names
// A property can be unpacked from an object and assigned to a variable with a different name than the object property.

const o = { p: 42, q: true };
var { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true

const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5

//Unpacking fields from objects passed as a function parameter
user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({ id }) {
    return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
    return (`${displayName} is ${name} `)
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"

// Setting a function parameter's default value
function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
    console.log(size, coords, radius);
    // do some chart drawing
}

drawChart({
    coords: { x: 18, y: 30 },
    radius: 30
});

drawChart();

const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // rename
    translations: [
        {
            title: localeTitle, // rename
        },
    ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"


// For of iteration and destructuring
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (const { name: n, family: { father: f } } of people) {
    console.log('Name: ' + n + ', Father: ' + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"


// Computed object property names and destructuring
let key = 'z';
var { [key]: foo } = { z: 'bar' };

console.log(foo); // "bar"

// Rest in Object Destructuring
var { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }
a; // 10
b; // 20
rest; // { c: 30, d: 40 

console.log('a:', a, 'b:', b, 'rest:', rest)

// Invalid JavaScript identifier as a property name
var foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"

const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

// Combined Array and Object Destructuring
const props = [
    { id: 1, name: 'Fizz' },
    { id: 2, name: 'Buzz' },
    { id: 3, name: 'FizzBuzz' }
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"