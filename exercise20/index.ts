// 20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

let countries: string[] = ["United States", "Canada", "Australia", "Germany", "Brazil", "India"];
 
function createList(country) {
   return countries.push(country);
}

createList('Mexico');
createList('USA');
console.log(countries);