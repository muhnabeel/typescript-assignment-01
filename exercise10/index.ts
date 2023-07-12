// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does. 
export {};

let myName: string = "Muhammad Nabeel";
let date: Date = new Date()

// program 01


    console.log("\n");
    console.log("program 01");
    console.log("\n");
    console.log(`Name = ${myName}`)
    console.log(`Date = ${date} \n`)

    // Store a famous person’s name in a variable.
    let personName: string = "\tMuhammad nabeel\t";

    // famous person’s name before striping the white spaces.
    console.log(`Before striping the white spaces : ${personName}`);

    // user trim function to remove white spaces.
    console.log(`After striping the white spaces : ${personName.trim()} \n`);



// program 02


    console.log("\n");
    console.log("program 02");
    console.log("\n");
    console.log(`Name = ${myName}`)
    console.log(`Date = ${date} \n`)

    // Store a person’s name in a variable.
    let Owner: string = "Muhammad nabeel";

    // split name for titlecase and map in a new varible. 
    const titleCase = Owner.split(" ").map((l) => l[0].toUpperCase() + l.substr(1)).join(" ");

    // use toLowerCase function for lowercase and print.
    console.log(`lowercase : ${Owner.toLowerCase()}`);

    // use toUpperCase function for lowercase and print.
    console.log(`uppercase : ${Owner.toUpperCase()}`);

    //print titlecase varible.
    console.log(`titlecase : ${titleCase}`);

