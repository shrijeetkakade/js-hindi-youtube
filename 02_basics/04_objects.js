//  const tinderuser = new Object()
const tinderuser = {}
// above are two ways for declaring an object just first line has 
// singleton object and second line has non singleton object

tinderuser.id = "123abc"
tinderuser.name = "jacob"
tinderuser.isloggedin = false

// console.log(tinderuser);

const regularUser = {
    email:"shri@gmail.com",
    fullname: {
      userfullname:{
        firstname:"shrijeet",
        lastname:"kakade"
      }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'a',4:'b'}

// const obj3 ={obj1 , obj2} // object ke andar object aagaya hain

// const obj3 = Object.assign({},obj1,obj2) // ise kam hi use karenge
const obj3 = {...obj1,...obj2} 
// database se jab values aayengee tab vo aaray ke andar different objects ki form me aayengee
// console.log(obj3);

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 }
];

// console.log(users[1].id);

// console.log(tinderuser);

// console.log(Object.keys(tinderuser));

// console.log(Object.values(tinderuser));

// console.log(Object.entries(tinderuser));// comparatively kam use hota hain

// console.log(tinderuser.hasOwnProperty('isloggedin'));

// destructuring of an object
const course = {
  coursname:"js in hindi",
  prize:"999",
  courseinstructor:"hitesh"
}

const {courseinstructor: instructor } = course

console.log(instructor);
// the below lines are of react
// const navbar=()=>{

// }
// navbar(company = "hitesh")

// concept of API
// {
//  " name ": "hitesh",
//  " coursname":"js in hindi",
//  " price": "free"
// }

// famous API example : randomuser me 