const  userEmail = "h@hitesh.ai"
// here in condition of if statement 
if(userEmail){
    console.log(`got user email ${userEmail}`);
}else{
    console.log("don't have user email");
    }

// // falsy values  matlab konse konse values ko false mana jayega
// false, 0 ,-0 , BigInt 0n ,"",null , undefined ,NaN 
// except these all values are truthy values 
// truthy values example "0" , 'false' ," ",[],{},function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish coalescing operator (??) : null undefined
// and there is one operator named ternary operator
// both have syntax similar at an extent

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15;

console.log(val1);

// ternary operator

// condition ? true : false ; // smallest version of if else statement


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")