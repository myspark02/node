// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const combined = first.concat(second);
// console.log(combined);

// const combined = [...first, 'a', ...second, 'b'];
// console.log(combined);

// const clone = [...first];
// console.log(first);
// console.log(clone);

const first = {name: 'Gildong'};
const second = {job: 'Instructor'};

const combined = {...first, ...second, 'location': 'USA'};
console.log(combined);
const clone = {...first};
console.log(clone);