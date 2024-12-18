// Number

let balance = 120;
let anotherbalance = new Number(120);

// console.log(balance.valueOf());
// console.log(anotherbalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherbalance);

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

//null and undefined

let firstname = null;
let lastname = undefined;
// console.log(firstname);
// console.log(lastname);

//string

let myString = "hello";
let myStringOne = "Hela";
let username = "hitarth";

let oldGreet = myString + " " + "hitarth";
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
// console.log(demoOne);
// console.log(greetMessage);

let sm1 = Symbol("Hitarth");
let sm2 = Symbol("Hitarth");

console.log(sm1);
