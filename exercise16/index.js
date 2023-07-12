// 16.  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var inviteList = ["Talha", "Usama", "faizy"];
//Add one new guest to the beginning of your array.
inviteList.unshift('Asad');
//check middle of the array.
var middleLength = inviteList.length / 2;
//Add one new guest to the middle of your array.
inviteList.splice(Math.ceil(middleLength), 0, "Eric");
//new guest to the end of your list
inviteList.push('James');
console.log("Invitation \n");
for (var _i = 0, inviteList_1 = inviteList; _i < inviteList_1.length; _i++) {
    var element = inviteList_1[_i];
    console.log("Dear ".concat(element, " \n I hope this message finds you well. I am writing to extend a heartfelt invitation for dinner."));
}
