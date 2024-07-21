const accountId = 1444553
let accountEmail = "shubham@google.com"
var accountPassword = "1234"
acoountCity = "Pune"
let accountState;

// accountId = 2 // not allowed 

accountEmail = "sv@google.com"
accountPassword = "545646"
acoountCity = "Banglore"

/* 
Preffer not to used Var :- Because issue of Block scope and funtional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,acoountCity,accountState])