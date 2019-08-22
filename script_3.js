// Ask the user for a number
let total_floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Print the pyramid
console.log("Voici ta pyramide :");
for (let i = 1; i <= total_floor; i++) {
   let current_floor = ''
   for(let space = 1 ; space <=(total_floor - i); space++){
     current_floor += ' '
   }
   for (let hashtag = 1 ; hashtag <= i ; hashtag++){
    current_floor += "#"
  }
   console.log(current_floor)
}