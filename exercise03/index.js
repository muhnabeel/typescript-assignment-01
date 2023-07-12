// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Muhammad nabeel";
var titleCase = personName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substr(1); }).join(" ");
console.log("lowercase : ".concat(personName.toLowerCase()));
console.log("uppercase : ".concat(personName.toUpperCase()));
console.log("titlecase : ".concat(titleCase));
