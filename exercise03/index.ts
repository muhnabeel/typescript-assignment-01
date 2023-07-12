// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "Muhammad nabeel";
let titleCase: string = personName.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");

console.log(`lowercase : ${personName.toLowerCase()}`);
console.log(`uppercase : ${personName.toUpperCase()}`);
console.log(`titlecase : ${titleCase}`);
