/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

// Import the 'log' function from the 'console' module. This will let us print messages to the console.
const { log } = require("console");

// Define a function called 'makeTea' that takes a type of tea as input (typeOfTea)
// and returns a message saying what tea is being made.
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

// Call the 'makeTea' function with "green tea" as the input and store the result in 'teaOrder'.
let teaOrder = makeTea("green tea");

// Print the tea order message to the console.
// console.log(teaOrder);

/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

// Define a function called 'orderTea' that takes a type of tea as input (teaType).
function orderTea(teaType) {
  // Inside 'orderTea', define another function called 'confirmOrder' that doesn't take any input
  // and always returns the same message confirming the tea order.
  function confirmOrder() {
    return `Order confirmed for chai`;
  }

  // Call the 'confirmOrder' function and return its result.
  return confirmOrder();
}

// Call the 'orderTea' function with "chai" as the input and store the result in 'orderConfirmation'.
let orderConfirmation = orderTea("chai");

// Print the order confirmation message to the console.
// console.log(orderConfirmation);

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

// Define an arrow function 'calculateTotal' that takes two inputs: 'price' and 'quantity'.
// It calculates the total cost by multiplying the price of one item by the quantity.
const calculateTotal = (price, quantity) => price * quantity;

// Call the 'calculateTotal' function with a price of 399 and a quantity of 100.
// Store the result (total cost) in the variable 'totalCost'.
let totalCost = calculateTotal(399, 100);

// Print the total cost to the console.
// console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/

// Define a function 'makeTea' that takes a type of tea as input (typeOfTea)
// and returns a message saying what tea is being made.
function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

// Define a function 'processTeaOrder' that takes another function as input (teaFunction).
// It calls the provided function with the argument "earl grey" and returns the result.
function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

// Call the 'processTeaOrder' function and pass 'makeTea' as the argument.
// The result is stored in the variable 'order'.
let order = processTeaOrder(makeTea);

// Print the order message to the console.
// console.log(order);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
