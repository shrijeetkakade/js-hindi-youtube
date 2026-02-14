// there are two types of datatypes primitive and non-primitive
// differentiation is done by how the data is stored in memory and how can you access it
//#primitive
// 7 types = string , boolean , number , null , undefined , symbol , BigInt

//#reference (Non-Primitive data type)
// Array , objects , functions

// JavaScript is a dynamically typed language.

// console.log(100.3 * 432.3);

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null

// let userEmail;


//copied
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // arrays
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
myFunction();

// https://262.ecma-international.org/5.1/#sec-11.4.3