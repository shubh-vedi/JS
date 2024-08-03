// Arrays 

const Marvel_heros = ["thor","ironman","Spiderman"]

const DC_heros    = ["Batman","superman","Flash"]

// Marvel_heros.push(DC_heros)

// console.log(Marvel_heros);
// console.log(Marvel_heros[3][2]);

// All_Heros = Marvel_heros.concat(DC_heros)
// console.log(All_Heros);

const all_new_Heros = [...Marvel_heros, ...DC_heros]  // Spread Operator 
// console.log(all_new_Heros);


const AnotherArray = [1,2,3,[4,5,6],7,[6,7,[4,6]]]

const One_array = AnotherArray.flat(Infinity) // Gives One Array remove sub Array
// console.log(One_array);



// console.log(Array.isArray("Shubham"));
// console.log(Array.from("shubham"));
// console.log(Array.from({name : "shubham"})); //Intreasting gives empty


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));





