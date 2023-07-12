// 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


let locations: string[] = ["Germany", "italy", "Mexico", "Canada", "Emar", "Ala"];

const sortedLocation: string[] = [...locations].sort();
const reverseLocation: string[] = [...sortedLocation].reverse();

console.log("Original Order \n");
for (const element of locations) {
    console.log(element);
}

//sort alphabetically
console.log("\n");
console.log("Alphabetically Order \n");
for (const element of sortedLocation) {
    console.log(element);
}

console.log("\n");
console.log("Original Order \n");
for (const element of locations) {
    console.log(element);
}

//sort Reverse alphabetically
console.log("\n");
console.log("Reverse Alphabetically Order \n");
for (const element of reverseLocation) {
    console.log(element);
}

console.log("\n");
console.log("Original Order \n");
for (const element of locations) {
    console.log(element);
}

//sort Reverse and show that its order has changed
console.log("\n");
console.log("Reverse Order \n");
for (const element of locations.reverse()) {
    console.log(element);
}

// Reverse Again and show it’s back to its original order.
console.log("\n");
console.log("Reverse Again and show it’s back to its original order \n");
locations.reverse()
for (const element of locations) {
    console.log(element);
}

// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n");
console.log("Alphabetical Order and show that its order has been changed \n");
for (const element of locations.sort()) {
    console.log(element);
}

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n");
console.log("Reverse Alphabetical Order and show that its order has been changed \n");
for (const element of locations.reverse()) {
    console.log(element);
}
