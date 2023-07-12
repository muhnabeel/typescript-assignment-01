// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var inviteList = ["Talha", "Usama", "faizy"];
var notReached = ["faizy"];
//filter not Reached guests.
var newGuestsList = inviteList.filter(function (el) {
    return notReached.indexOf(el) == -1;
});
console.log("you can invite only ".concat(newGuestsList.length, " people for dinner \n"));
for (var _i = 0, notReached_1 = notReached; _i < notReached_1.length; _i++) {
    var element = notReached_1[_i];
    console.log("".concat(element, " you\u2019re sorry you can\u2019t invite them to dinner."));
}
console.log("\n");
for (var _a = 0, newGuestsList_1 = newGuestsList; _a < newGuestsList_1.length; _a++) {
    var element = newGuestsList_1[_a];
    console.log("".concat(element, " you\u2019re still invited."));
}
//Remove the last two names from list,
var finalList = newGuestsList.slice(0, -2);
console.log("\n");
console.log("Final List");
for (var _b = 0, finalList_1 = finalList; _b < finalList_1.length; _b++) {
    var element = finalList_1[_b];
    console.log(element);
}
