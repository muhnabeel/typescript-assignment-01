//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteBikes: string[] = ["Yamaha YZF R1M", "Kawasaki Ninja H2", "Suzuki GSX R-1000", "Ducati Panigale V2"];

for (const element of favoriteBikes) {
    console.log(`I would like to own a ${element}.`);
}
