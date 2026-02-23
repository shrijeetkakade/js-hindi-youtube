const marvel_heroes = ["thor","Ironman","SpiderMan"];
const dc_heroes = ["superman","flash","BatMan"];

//marvel_heroes.push(dc_heroes);// hamare paas array ke andar array aagaya

// console.log(marvel_heroes);// hamare paas array ke andar array aagaya

// console.log(marvel_heroes[3][1])

//we could also use the property of concate
// marvel_heroes.concat(dc_heroes)

// now both the arrays are combined 
// const allheroes = marvel_heroes.concat(dc_heroes);
// console.log(allheroes)

// // there is one more easy method for merging the two arrays

// const all_new_heroes = [...marvel_heroes,...dc_heroes]

// console.log(all_new_heroes);

// very rare situation below

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("hitesh"));

console.log(Array.from({name: "hitesh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
