// Immidiately invoked function expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai();
// jaise hi function likhenge uske turant baad execution hoga
(function chai() {
    // named iife
    console.log(`DB CONNECTED`);
})();

    ((name)=> {
        console.log(`DB CONNECTED two ${name}`);
    })('shri');
