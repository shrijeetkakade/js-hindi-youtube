// jai shree ram // 

const name = 'shrijeet' // this is the way to declare the string 

const repocount = 5

//        console.log(name + repocount); // this is the old syntax
// prefer the new syntax which makes code readable 

//console.log(`My name is ${name} and my repocount is ${repocount}`);
// this is the modern way called string interpolation

// there is one more way for declaring the string

const gameName = new String('free fire')

//console.log(gameName); // string is an object

//console.table([gameName.length,gameName[3]]); // for getting length and key 

console.log(gameName.__proto__);

console.log(gameName.toUpperCase())
