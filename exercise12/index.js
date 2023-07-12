//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendsName = ["Talha", "Usama", "faizy", "Ali"];
for (var _i = 0, friendsName_1 = friendsName; _i < friendsName_1.length; _i++) {
    var element = friendsName_1[_i];
    console.log("Hello ".concat(element, " You are doing well."));
}
