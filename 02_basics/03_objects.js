// there are two ways to declare the object
// 1. literal 2. constructor
// singleton means when you make an object using constructor only a single object is been created of that type
// when we declare like a literal , singleton nahi banta 

//  Object.create();// this is constructor method to create object

// object literals
// in arrays you can access elements based on indexes but in js you can 
// access elements in object by your own key // just like map

const mysym = Symbol("key1")

const jsuser = {
    name:"Hitesh",
    "full name":"hitesh choudhary  ",
    [mysym]:"symbol used as key in object ", // if want to use like a symbol write it in a squared bracket
    age:18,
    location:"jaipur",
    email:"hitesh@gmail.com",
    isloggedIn: false
}
//here by above example we understand how to declare an object
// now we will learn how to access an object

// console.log(jsuser.email);
// console.log(jsuser["email"]); 

// console.log(jsuser["full name"]);

// console.log(typeof jsuser.mysm); // datatype is coming as string // shoul be symbol 

// console.log(jsuser[mysym]);
 
// // how to change values in objects
// jsuser.email = "shri@gmail.com"


// you can also lock the values that is you want that noone can change the value so you should freeze the value

// Object.freeze(jsuser)
jsuser.email = "shri@gmail.com11111"
// console.log(jsuser); 
// in js there is no discrimination in functions you can treate them as variables

jsuser.greeting = function(){
    console.log("hello js user")
}
console.log(jsuser.greeting());

jsuser.greeting2 = function(){
    console.log(`hello js user,${this.name}`)
}
console.log(jsuser.greeting2());
