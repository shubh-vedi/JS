// const Tinderuser = new Object()

const Tinderuser = {}

Tinderuser.id = "123Abc",
Tinderuser.name = "Ganesh",
Tinderuser.isLoggedIn = false


// console.log(Tinderuser);


const regularUser = {
    email : "shubham@google.com",
    Fullname : {
        userFullName :{
            fitstName:"Shubham",
            lastName : "vedi"
        }
    }
}

// console.log(regularUser.Fullname.userFullName.fitstName);


const obj1 = {1:"a",2:"B"}
const obj2 = {3:"c",4:"D"}
const obj4 = {5:"e",6:"F"}


// // const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "shu@google.com"
    },
    {
        id: 2,
        email: "shu@google.com"
    }
]

users[1].email

// console.log(Tinderuser);

// console.log(Object.keys(Tinderuser));
// console.log(Object.values(Tinderuser));
// console.log(Object.entries(Tinderuser));
// console.log(Tinderuser.hasOwnProperty("isLoggedIn"));



// object de-struture 

const course = {
    courseName:"Js Hinid",
    price:"999",
    courseInstrutor:"HiteshC"

}

// course.courseInstrutor()

const {courseInstrutor : instrutor} = course

console.log(instrutor);


// {
//     "courseName":"Js Hinid",
//     "price":"999",
//     "courseInstrutor":"HiteshC"
// }