// 29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ['banana', 'mango', 'apple', 'peach'];


if (favorite_fruits.indexOf('orange') != -1 ) {
    console.log("You really like orange!");
}

if (favorite_fruits.indexOf('banana') != -1 ) {
    console.log("You really like banana!");
}

if (favorite_fruits.indexOf('mango') != -1 ) {
    console.log("You really like mango!");
}

if (favorite_fruits.indexOf('grapes') != -1 ) {
    console.log("You really like grapes!");
}

if (favorite_fruits.indexOf('peach') != -1 ) {
    console.log("You really like peach!");
}
