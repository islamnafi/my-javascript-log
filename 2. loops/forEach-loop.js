// example 1: basic usage of forEach
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  // This function runs once for every element in the array
  console.log(num); // prints 1, 2, 3, 4, 5
});

// Example 2: Arrow function with forEach (shorter syntax)
numbers.forEach(num => {
  console.log(num * 2); // prints 2, 4, 6, 8, 10
});

// Example 3: forEach callback parameters
numbers.forEach((value, index, array) => {
  console.log("Value:", value);   // current element
  console.log("Index:", index);   // current index
  console.log("Array:", array);   // the whole array
});

// Example 4: Modifying array elements inside forEach
let doubled = [];
numbers.forEach(num => {
  doubled.push(num * 2); // collects doubled values into a new array
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Example 5: What forEach CANNOT do
// 1. It cannot "break" early like a for loop
numbers.forEach(num => {
  if (num === 3) {
    return; // this ONLY exits the current callback, NOT the entire loop
  }
  console.log(num); // still runs for 1, 2, 4, 5
});

// 2. It doesn't return a new array (unlike map)
const result = numbers.forEach(num => num * 2);
console.log(result); // undefined
