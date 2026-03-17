// for of 
// these loops which we will be learning now are array specific loops 
// in javascript array and objects have more value 
// or we use them in greater amount 


// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

// Maps
// msps have unique values and only  the order that we have given
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 // objects are not iteratatable through for of loops 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } 

