const personalInformation = {
    firstName : 'S.Cheol',
    lastName : 'Park', 
    city : 'Daegu', 
    state: 'Korea' 
};

const {firstName:fn, lastName:ln} = personalInformation;

console.log (`${fn} ${ln}`);

let names = ['gdhong', 'mylee', 'chseong', 'mspark']

let [name1, name2, name3, name4] = names;

console.log(name1)


function addressMaker(city, state) {
    //const newAddress = {newCity: city, newState: state};
    const newAddress = {city, state};
    console.log(newAddress);
}

addressMaker('Austin', 'Texas');


function addressMaker2(address) {
    const {city, state} = address;

    // const newAddress = {
    //     city: address.city, 
    //     state: address.state, 
    //     contry: 'US'
    // };

    const newAddres  = {
        city, 
        state, 
        country: 'US'
    };

    console.log(newAddres);
}

addressMaker2({city:'Austin', state:'Texas'})

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

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [...arr1];
arr2.push(true)

console.log(arr2)
console.log(arr1)

// function add(nums) {
//     console.log(nums);
//     console.log(arguments);
// }

// add(4, 5,6, 7, 8, 9, 12);



function add(...nums) {
    console.log(nums);
}

add(4, 5,6, 7, 8, 9, 12);


function add3(...nums) {
    // let total = nums.reduce(function(x, y) {
    //     return x+y;
    // });

    let total = nums.reduce((x,y) => x+y);

    console.log(total);
}

add3(4, 5, 7, 8, 12);