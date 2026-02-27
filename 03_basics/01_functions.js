function sayMyName(){
console.log('s');
console.log('h');
console.log('r');
console.log('i');
console.log('j');
console.log('e'); 
console.log('e');
console.log('t');
}
// sayMyName();

// function addTwoNumbers(a, b) { // function ki definition banate waqt jo bhi input lete hain usey hum parameters bolte hain 
//     console.log(a + b);
// }
function addTwoNumbers(a, b) { // function ki definition banate waqt jo bhi input lete hain usey hum parameters bolte hain 
   let result;
   result = a + b;
   return result;
}
const result = addTwoNumbers(5,9); // jab functionn call karte hain tab use parameters nahi arguments kehete hain

// console.log(result);

function loginusermessage(username){
    if(username === undefined){
     console.log("please enter a username");
     return 0;
     
    }
    return `${username} just logged in`
}

const whathappen = loginusermessage("shrijeet");
// console.log(whathappen) 


// function with object
 function calculatecartprice(...num1 ){
   return num1
 }

//  console.log(calculatecartprice(200,400,500));

 const user ={
  username:"hitesh",
  price:199
 }
 function handleobject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
 }

 console.log(handleobject(user)) 