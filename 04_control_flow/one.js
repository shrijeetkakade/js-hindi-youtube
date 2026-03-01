// // if statement 

// if (2 !== "2") {
//     console.log("if statement is been executed")
// }
// else{
//     console.log("if statement not executed")
// }
// // == just checks the value while === checks datatype also
// const temperature = 51;

// if (temperature < 50) {
//     console.log("executed")
// }
// else {
//     console.log("temperature is greater than 50");
// }
// console.log("Executee")


// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }

//     console.log(`user power : ${power}`)


// const balance = 1000
// // never write codes in unreadable manner like shown below
// // if(balance>500) console.log("TEST"),
// // console.log("test@")

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance >500 && balance <= 1000){
//     console.log("between 500 and 1000");
// }
// else {
//      console.log("more than 1000");
// }

const userloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(userloggedin && debitcard){
    console.log("allow to buy courses");
    }
    if(loggedinfromgoogle || loggedinfromemail){
        console.log("user logged in");
        
    }   