import inquirer from "inquirer";
// 1) Computer will generate a random number - DONE
// 2) User input for guessing number -DONE
// 3) compare user input with computer generated number and show result -DONE
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulationn! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
