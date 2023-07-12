// 42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]) {
    let greatMagicians: string[] = [];
  
    for (let magician of magicians) {
      let greatMagician = "The Great " + magician;
      greatMagicians.push(greatMagician);
    }
  
    return greatMagicians;
  }
  
  let magicianss: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
  
  let greatMagicians: string[] = makeGreat(magicianss);
  
  showMagicians(greatMagicians);
