const prompt = require("prompt-sync")();

// set user prompt
const sides = Number(prompt("How many sides should the dice have? : "))


// set dice roll
const roll = Math.ceil(Math.random()*sides);
console.log(roll);

