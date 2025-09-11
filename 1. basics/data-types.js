//data-types

//string
let greeting = "Hello!";
console.log(typeof greeting);
//there is no character data type in JS

//number
let age = 23;

//boolean
let enrolled = true;

//BigInt

//undefined
let temperature;
console.log(typeof temperature);

//null
let nothing = null;
console.log(nothing);
console.log(typeof nothing); //this will output object, but it's a bug

//symbol


//object
let learner = {
    name : 'Nafi',
    department : 'CSE'
}

//type-casting or type-coercion
//type casting is when you explicitly tell JavaScript to convert a value to a different type
let strNum = "123";
let convertedNum = Number(greeting);

//we can type cast using these three functions: String(), Number(), Boolean()

//type coercion is when JavaScript automatically converts a value for you, usually during operations that involve multiple types
let outcome = "5" * 2;

//random-stuff
console.log(null == undefined); //this will show true because both are falsy values, and it doesn't check type
console.log(null === undefined); //=== means strictly equal and the output will be false and also this one checks the data type
console.log(true + 1); //outputs 2
console.log(Boolean('Hello!') + 5); //outputs 6
//falsy values -> 0, -0, 0n, "", undefined, null, NaN 