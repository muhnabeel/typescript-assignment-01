//24  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//• Tests for equality and inequality with strings


let personName: string = "Nabeel";

console.log("Test for equality and inequality with strings \n");
console.log(personName == "Nabeel");
console.log(personName != "Nabeel");

console.log("\n");
console.log("Tests using the lower case function \n");

console.log(personName == personName.toLowerCase());
console.log(personName != personName.toLowerCase());

let number: number = 44;
console.log("\n");
console.log("equality and inequality \n");
console.log(number == 44);
console.log(number != 44);

console.log("\n");
console.log("greater than and less than \n");
console.log(number > 43);
console.log(number < 44);

console.log("\n");
console.log("greater than or equal to, and less than or equal to \n");

let cnumber: number = 4;
console.log(cnumber >= 42);
console.log(number <= 5);

console.log("\n");
console.log(`Tests using "and" and "or" operators \n`);
console.log(cnumber == 4 && typeof cnumber == 'number');
console.log(cnumber == 4 && typeof cnumber == 'string');
console.log(cnumber == 4 || typeof cnumber == 'string');

console.log("\n");
console.log("Test whether an item is in a array \n");

let arr: number[] = [1,2,3];
console.log(arr.indexOf(3) !== -1); 
console.log(arr.indexOf(6) !== -1);   