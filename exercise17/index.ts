// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let inviteList: string[] = ["Talha", "Usama", "faizy"];
let notReached: string[] = ["faizy"];

//filter not Reached guests.
let newGuestsList: string[] = inviteList.filter(function(el) {
    return notReached.indexOf(el) == -1;
});

console.log(`you can invite only ${newGuestsList.length} people for dinner \n`);

for (const element of notReached) {
    console.log(`${element} you’re sorry you can’t invite them to dinner.`);
}

console.log("\n");
for (const element of newGuestsList) {
    console.log(`${element} you’re still invited.`);
}

//Remove the last two names from list,
let finalList: string[] = newGuestsList.slice(0, -2);

console.log("\n");
console.log("Final List");
for (const element of finalList) {
    console.log(element);
}