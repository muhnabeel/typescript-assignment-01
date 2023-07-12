// 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
// True Test cases
console.log("True Test cases \n");
console.log(car == 'subaru');
console.log(typeof car == 'string');
console.log(car.length == 6);
console.log(car != 'car');
console.log(car.length != 5);
// False Test cases
console.log("\n");
console.log("False Test cases \n");
console.log(car == 'sub');
console.log(typeof car == 'number');
console.log(car.length == 5);
console.log(car != 'subaru');
console.log(car.length != 6);
