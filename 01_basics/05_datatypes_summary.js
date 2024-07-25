// Primative 

// 7 types : string ,Number , Boolean , Null , Undefined , Symbol BigInt

const score = 100

const scoreValue = 10.5

const loggedIn = true
const outsideTemp = null
let userEmail ;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id == anotherId);

// const Bignumber = 4545465454545655665646654n




// Refernce (Non Primative)

// Array , Objects , Functions 

const heros = ["shaktiman","nagraj","Dora"]

let myObj = {
    name:"shubham",
    age:22
}

const myFunction = function(){
    console.log("hello World");
}

console.log(typeof heros);