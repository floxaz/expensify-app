// Object destructuring
/*
const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
};

const {name, age} = person;
const {temp: lel = '20', city} = person.location;

//console.log(`${name} is ${age} years old`);
//console.log(`It's ${lel} in ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};


const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);
*/
// Array destructuring
const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city = 'unknown', state] = address;
console.log(`You are in ${city}, ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , , price] = item;
console.log(`I wanna take a large ${coffee}, which costs ${price}`);