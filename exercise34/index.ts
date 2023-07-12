//34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


let pizzaNames = ['runch', 'chipotly', 'pepperoni'];

for (let index = 0; index < pizzaNames.length; index++) {
    console.log(pizzaNames[index]);
}

console.log("\n");
for (let index = 0; index < pizzaNames.length; index++) {
    console.log(`I like ${pizzaNames[index]} pizza`);
}

console.log("\n");
console.log("I enjoy a variety of pizzas, including margherita, pepperoni, and barbecue chicken.")
console.log("The combination of gooey cheese, flavorful toppings, and a crispy crust is pure bliss.")
console.log("Whether it's a classic Neapolitan or a creative gourmet creation, pizza always hits the spot.")
console.log("I really love pizza!")