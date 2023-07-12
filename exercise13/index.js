//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteBikes = ["Yamaha YZF R1M", "Kawasaki Ninja H2", "Suzuki GSX R-1000", "Ducati Panigale V2"];
for (var _i = 0, favoriteBikes_1 = favoriteBikes; _i < favoriteBikes_1.length; _i++) {
    var element = favoriteBikes_1[_i];
    console.log("I would like to own a ".concat(element, "."));
}
