// singleton object
// Object.create


// object leteral 

const mysym = Symbol("key1")

const jUser = {
    name : "shubham",
    "full name" : "shubham Vedi",
    [mysym]:"mykey1",
    age  : 18,
    location : "Aurangbad",
    Email : "shubham@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","Saturday"]
}

// console.log(jUser.Email);
// console.log(jUser["Email"]);
// console.log(jUser["full name"]);
// console.log(jUser[mysym]);

jUser.Email = "chatgpt@google.com"
// console.log(jUser);
// Object.freeze(jUser)
jUser.Email = "chatgpt@gmail.com"
// console.log(jUser);


jUser.grettings = function(){
    console.log("Hello JS User");
    
}


jUser.grettingstwo = function(){
    console.log(`Hello JS User,${this["full name"]}`);
    
}

console.log(jUser.grettings());
console.log(jUser.grettingstwo());




