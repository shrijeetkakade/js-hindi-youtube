let score = "33"

console.log(typeof score )
// type of can also be written like
// console.log(typeof(score))

let valueofscore = Number(score); // used to conert string into number
console.log(typeof valueofscore ) // verified that 33 in string converted into number

// let a = "shrijeet"
// console.log(typeof a)
// let b = Number(a);
// console.log(typeof b, b)
// can change type of variable but if there is no number inside string gives nan as output
// NaN stands for not a number
// don't rely completely on numbers there are some issues in js so most people use typescript
// null gets converted to 0 , true = 1 , false = 0 , "33" = 33
// undefined returns NaN

let isloggedin = 5

let what = Boolean(isloggedin)

// no. is converted into boolean value
// only 0 means false else otherwise true
// 0->false 1->true
// ""->false "xkws"->true

console.table({ isloggedin, what})

let someno = 21;
let any = true;

let wha = String(someno)
let wh = String(any)

console.table({wh, wha})