// For practice only

/* var width = 20;
var lastName = 'Kakmubeshetvaime';

var cars = ['Cool car', 'Another car'];

var person = {
    firstName: 'Ne go znam',
    lastName: 'Pak ne go znam',
    age: 31,
    address: {
        street: "nqkyde tam",
        number: 6
    },
    books: [
        'book 1', 'book 2'
    ]
}
// debugger

function getPersonBooks(person) {
    let str = '';

    for (let i = 0; i < person.books.length; i++) {
        console.log(person.books[i])
        str = `${str} ${person.books[i]}`
    }

    person.books.forEach(element => {
        console.log(element)
    });

    return str;
}

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (var j in person) {
    console.log(person[j]);
}

setTimeout(function () {
    console.log('Takova e')
    const endResult = getPersonBooks(person)
    console.log(endResult)
}, 1000) */


const person = 'Nqkakvo ime'
const person1 = 'Drugo ime'

console.log(`${person} ${person1}`)

const sumTwoNumbers = (a, b = 6) => {
    return a + b;
}

const finalResult = sumTwoNumbers(3);

console.log(finalResult)

const anotherArr = [3, 6, 13];
const anotherArr1 = [6, 6, 13];

const newAnotherArr = [...anotherArr, ...anotherArr1];
// can be done with objects two

const newArr = anotherArr1.map((el) => {
    return el * 2;
})
console.log(newArr);

const filteredNewArr = newArr.filter(el => el > 13);
console.log(filteredNewArr);

const calculatedResult = newArr.reduce((prev, current) => { return prev + current })
console.log(calculatedResult)

newArr.sort();
console.log(newArr);

