// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

let inviteList: string[] = ["Talha", "Usama", "faizy", "Eric"];
let notAvailable: string[] = ["faizy", "Eric"];

//filter not Available guests.
let newGuestsList: string[] = inviteList.filter(function(el) {
    return notAvailable.indexOf(el) == -1;
});

//Add New Member
newGuestsList.push("Majid"); 

console.log("invitation List \n");
for (const element of newGuestsList) {
    console.log(`Dear ${element} \n I hope this message finds you well. I am writing to extend a heartfelt invitation for dinner.`);
}

console.log("\n");
console.log("Not Available List \n");
for (const element of notAvailable) {
    console.log(element);
}
