const score = 400  // bydefault js detected that typeof score is number 
// console.log(score)

// but sometimes we can define by ourself also that i need number datatype only 
// lets see how to do that 

const balance = new Number(100)
// console.log(balance);
// previously we did the same thing with the string 

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const othernumber = 123.8966

// console.log(othernumber.toFixed(2))

// console.log(othernumber.toPrecision(4))

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); // output = 1,000,000 bydefault us style
// console.log(hundreds.toLocaleString('en-IN')); // output = 10,00,000 indian style


//************************************* maths******************//
/*
console.log(Math)
console.log(Math.abs(-33))

console.log(Math.round(4.6))

console.log(Math.ceil(4.2));

console.log(Math.floor(4.7));

console.log(Math.sqrt(3))

console.log(Math.max(2,3,5,1,4,434))
*/

console.log((Math.random()*10000).toFixed(0)) // gives a random value between 0 t0 1 
// Math.random() is generally used to generate OTP
