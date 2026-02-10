let name = 'shrijeet';
console.log(name);
/* 
don't use var use let instead
because of issue in block scope and functional scope 
*/
// Account details using different data types

const accountName = "Shrijeet";        // const → value should not change
let accountPassword = "pass@123";      // let → value can be updated
var accountCity = "Mumbai";             // var → function/global scoped (not recommended)

// Display data in table format
console.table({
  AccountName: accountName,
  AccountPassword: accountPassword,
  AccountCity: accountCity
});
