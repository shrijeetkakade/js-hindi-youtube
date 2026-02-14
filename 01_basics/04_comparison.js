// basic comparisons 
// console.log(2>1) // outputs in boolean values // true
// console.log(2==1) // false

// the above are the simple and same datatype comparison but when the problem arises 
// problem arises when same datatypes are not compared
/*
console.log("2">1);
console.log("01">1); // js converted the string into number for comparison 
*/
// but typescript doesn't allows you to compare the elements in different datatypes
// as these types of comparisons doesn't give predictable results some time
/*
console.log(null > 0);   
console.log(null == 0);   // avoid these types of comparisons
console.log(null >= 0);

// in js comparison and equality check are both different things
*/

// strict check , checks with === that means not only value but datatype is also checked 
// in strict check conversion of datatypes is not happening



