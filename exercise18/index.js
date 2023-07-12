// 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var locations = ["Germany", "italy", "Mexico", "Canada", "Emar", "Ala"];
var sortedLocation = __spreadArray([], locations, true).sort();
var reverseLocation = __spreadArray([], sortedLocation, true).reverse();
console.log("Original Order \n");
for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
    var element = locations_1[_i];
    console.log(element);
}
//sort alphabetically
console.log("\n");
console.log("Alphabetically Order \n");
for (var _a = 0, sortedLocation_1 = sortedLocation; _a < sortedLocation_1.length; _a++) {
    var element = sortedLocation_1[_a];
    console.log(element);
}
console.log("\n");
console.log("Original Order \n");
for (var _b = 0, locations_2 = locations; _b < locations_2.length; _b++) {
    var element = locations_2[_b];
    console.log(element);
}
//sort Reverse alphabetically
console.log("\n");
console.log("Reverse Alphabetically Order \n");
for (var _c = 0, reverseLocation_1 = reverseLocation; _c < reverseLocation_1.length; _c++) {
    var element = reverseLocation_1[_c];
    console.log(element);
}
console.log("\n");
console.log("Original Order \n");
for (var _d = 0, locations_3 = locations; _d < locations_3.length; _d++) {
    var element = locations_3[_d];
    console.log(element);
}
//sort Reverse and show that its order has changed
console.log("\n");
console.log("Reverse Order \n");
for (var _e = 0, _f = locations.reverse(); _e < _f.length; _e++) {
    var element = _f[_e];
    console.log(element);
}
// Reverse Again and show it’s back to its original order.
console.log("\n");
console.log("Reverse Again and show it’s back to its original order \n");
locations.reverse();
for (var _g = 0, locations_4 = locations; _g < locations_4.length; _g++) {
    var element = locations_4[_g];
    console.log(element);
}
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\n");
console.log("Alphabetical Order and show that its order has been changed \n");
for (var _h = 0, _j = locations.sort(); _h < _j.length; _h++) {
    var element = _j[_h];
    console.log(element);
}
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("\n");
console.log("Reverse Alphabetical Order and show that its order has been changed \n");
for (var _k = 0, _l = locations.reverse(); _k < _l.length; _k++) {
    var element = _l[_k];
    console.log(element);
}
