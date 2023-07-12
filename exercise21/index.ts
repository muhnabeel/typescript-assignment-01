// 21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.


// Define a type for the country object
type Country = {
    name: string;
    capital: string;
    population: number;
    language: string;
  };
  
  // Create country objects
  let usa: Country = {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331002651,
    language: "English",
  };
  
  let canada: Country = {
    name: "Canada",
    capital: "Ottawa",
    population: 37742154,
    language: "English, French",
  };
  
  let australia: Country = {
    name: "Australia",
    capital: "Canberra",
    population: 25499884,
    language: "English",
  };
  
  // Print country objects
  console.log(usa);
  console.log(canada);
  console.log(australia);


