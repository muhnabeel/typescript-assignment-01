// 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        var greatMagician = "The Great " + magician;
        greatMagicians.push(greatMagician);
    }
    return greatMagicians;
}
var magicianss = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
var greatMagicians = makeGreat(magicianss);
showMagicians(greatMagicians);
