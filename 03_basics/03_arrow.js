const user = {
    username: "hitesh",
    price: 999,

    welcomemessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);


    }
}

// user.welcomemessage()
// user.username = "sam"
// user.welcomemessage()

// console.log(this)
// browser ke andar jo global object hain wo hain window object


// function chai(){
//    let username = "hitesh"
//     console.log(this.username);
// }
// chai();

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// below is the arrow function
const chai = () => {
    let username = "hitesh"
    console.log(this);
}
// chai();
// explicit return matlab return keyword ka use hua hain
// implicit return 
// const addTwo =(num1,num2)=>(num1+num2);



const addTwo =(num1,num2)=>({username:"hitesh"})
console.log(addTwo(3,4));