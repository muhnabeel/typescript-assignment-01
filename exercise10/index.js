"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myName = "Muhammad Nabeel";
var date = new Date();
// program 01
console.log("\n");
console.log("program 01");
console.log("\n");
console.log("Name = ".concat(myName));
console.log("Date = ".concat(date, " \n"));
// Store a famous person’s name in a variable.
var personName = "\tMuhammad nabeel\t";
// famous person’s name before striping the white spaces.
console.log("Before striping the white spaces : ".concat(personName));
// user trim function to remove white spaces.
console.log("After striping the white spaces : ".concat(personName.trim(), " \n"));
// program 02
console.log("\n");
console.log("program 02");
console.log("\n");
console.log("Name = ".concat(myName));
console.log("Date = ".concat(date, " \n"));
// Store a person’s name in a variable.
var Owner = "Muhammad nabeel";
// split name for titlecase and map in a new varible. 
var titleCase = Owner.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
// use toLowerCase function for lowercase and print.
console.log("lowercase : ".concat(Owner.toLowerCase()));
// use toUpperCase function for lowercase and print.
console.log("uppercase : ".concat(Owner.toUpperCase()));
//print titlecase varible.
console.log("titlecase : ".concat(titleCase));
