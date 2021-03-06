const address = {
    street: 'Oksanro', 
    city: 'Daegu', 
    country: 'Korea'
};

// const street = address.street;
// const city = address.city;
// const country = address.city

// console.log(street, city, country);

const {street, city, country} = address;
console.log(street, city, country);

const {street:st} = address;
console.log(st);

const {city:c} = address;
console.log(c);