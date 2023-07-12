// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var inviteList = ["Talha", "Usama", "faizy", "Eric"];
var notAvailable = ["faizy", "Eric"];
//filter not Available guests.
var newGuestsList = inviteList.filter(function (el) {
    return notAvailable.indexOf(el) == -1;
});
//Add New Member
newGuestsList.push("Majid");
console.log("invitation List \n");
for (var _i = 0, newGuestsList_1 = newGuestsList; _i < newGuestsList_1.length; _i++) {
    var element = newGuestsList_1[_i];
    console.log("Dear ".concat(element, " \n I hope this message finds you well. I am writing to extend a heartfelt invitation for dinner."));
}
console.log("\n");
console.log("Not Available List \n");
for (var _a = 0, notAvailable_1 = notAvailable; _a < notAvailable_1.length; _a++) {
    var element = notAvailable_1[_a];
    console.log(element);
}
