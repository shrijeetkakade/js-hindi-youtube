let myDate = new Date()
/*
console.log(myDate.toString()) // Sun Feb 22 2026 05:21:35 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); //Sun Feb 22 2026

console.log(myDate.toISOString()); //2026-02-22T05:21:35.997Z

console.log(myDate.toJSON()); // 2026-02-22T05:21:35.997Z

console.log(myDate.toLocaleDateString()); // 2/22/2026

console.log(myDate.toLocaleString()); //2/22/2026, 5:21:35 AM

// typeof of date is object 

*/
// let mycreateddate = new Date(2023,0,23) // 1st format for creating date 
// in javascript moths start from zero to 11 
// if 12 is given it takes january starts again

// let mycreateddate = new Date(2023,0,23,5,3)

// in js if we write moth in single digit starts from 0 while if 
// we write in double digits starts from 01 to 12

let mycreateddate = new Date("2023-01-14")
// console.log(mycreateddate.toLocaleString());

let indiandate = new Date("02-14-2026");
// console.log(indiandate.toLocaleString());

// hamare paas date ke andar time stamp bh hote hain 

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

// console.log( mycreateddate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate)

console.log(newdate.getDay())

newdate.toLocaleString('default',{
 weekday:  "long"
})

console.log(newdate.toLocaleString('default', { weekday: 'long' }));
// doneeee