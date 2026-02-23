// Array
// array is made up of elements
// javascript arrays have 0 based indexing  
// arrays use shallow copy matlab jo bhi change karenge wo orignal 
// array mein bhi hoga ......... 
// there are another type of copies that is deep copies
// deep copy do not share the same reference

const myArr = [0,1,2,3,4,5,true,"hitesh"]

const myHeroes = ["shaktiman","spidermaan","rocky-bhai","oggy","jack"]

// console.log(myArr[3]);

// there is one more way for declaring the array
const myarr2 = new Array(1,2,3,4)

// console.log(myarr2[3]);
// array methods ......................................

// myArr.push(6);

// myArr.push(7); // inserts the given value in an array at last

// myArr.pop(); // removes the last element from array
/*
myArr.unshift(9); // insert the value at start and the other elements do 
// shifting but one disadvantage is that last element doesn't have place to 
//to shift so it vanishes 

// as there is unshift there is shift also 
// so these both the are anologous to push and pop operation 

myArr.shift();
*/

// console.log(myArr)

// some methods return true or false
// like these methods are questionier method
// console.log(myArr.includes('hitesh'));

// console.log(myArr.indexOf(9));

const  newArr = myArr.join()

// console.log(myArr)

// console.log(newArr)

// slice , splice method

console.log("A",myArr);

const myn1 = myArr.slice(1 ,3)

console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1 ,3)

console.log("C",myArr);
console.log(myn2);

// difference between slice and splice is that in slice no change is 
// happening in orignal array .
// while in splice the elements in orignal array gets vanished and got in new array 

  