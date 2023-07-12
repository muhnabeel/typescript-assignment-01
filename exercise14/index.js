// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var inviteList = ["Talha", "Usama", "faizy"];
for (var _i = 0, inviteList_1 = inviteList; _i < inviteList_1.length; _i++) {
    var element = inviteList_1[_i];
    console.log("Dear ".concat(element, ", \n I hope this message finds you well. I am writing to extend a heartfelt invitation for dinner."));
}
