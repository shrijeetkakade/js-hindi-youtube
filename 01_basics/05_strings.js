// jai shree ram // 

const name = 'shrijeet' // this is the way to declare the string 

const repocount = 5

//        console.log(name + repocount); // this is the old syntax
// prefer the new syntax which makes code readable 

//console.log(`My name is ${name} and my repocount is ${repocount}`);
// this is the modern way called string interpolation

// there is one more way for declaring the string

const gameName = new String('free-fire-pubg-oggy-jack')

//console.log(gameName); // string is an object

//console.table([gameName.length,gameName[3]]); // for getting length and key 

// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase()) // converts all characters that are in lowercase to upper case
/*
console.log(gameName.charAt(2)) // at 2nd index which charcter is present
console.log(gameName.indexOf('i')) // at what index the given character is 
*/
const halfgameName = gameName.substring(3,8) // last value jo dali hain vo include nahi ho rahi hain
// console.log(halfgameName)

const anotherstring = gameName.slice(-3,8)
// console.log(anotherstring);
 /* 
 there is no much difference in slice and substring just only one thing
  that you can give negative values in a slice so in slice the main string behaves 
  like a cicular string. and if negative values are given in substring then by default 
  the value is considered as 0
  */

  const newone = "    hiteh     "
//   console.log(newone);
//   console.log(newone.trim()); 

  // trim function just trim downs the extra spaces before and after the main string

  const url = "https://hitesh.com/hitesh%20choudhary" 

//  console.log(  url.replace('%20','-'));

 // replace function allows to change the character in a string 
//  console.log(url.includes('hitesh'))

 // .includes is a boolean function which tells that the user given string is substring of main string or not

// now i want to convert string into array based on whatever you want
// now we will try it on string gamename conversion in array based on dash(-)

const str = "The-quick-brown-fox-jumps-over-the-lazy-dog";
const words = str.split("-");
// words named string array is created and all strings are stored in it 
// split stores string with a pattern that is based on dash
console.log(words[4]);

for(let i = 0 ; i< words.length;i++){
    console.log(words[i]);
    
}
