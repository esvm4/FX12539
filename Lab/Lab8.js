// Write Reusable JavaScript with Functions
function reusableFunction() {
    console.log("Hi World");
}function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Passing Values to Functions with Arguments
function functionWithArgs(param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(1,2);

// Return a Value from a Function with Return
function timesFive(num) {
    return num*5;
}
var answer = timesFive(5);

// Understanding Undefined Value returned from a Function
var sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive() {
  sum+=5;
}
addThree();
addFive();

// Assignment with a Returned Value
var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
var processed = processArg(7);