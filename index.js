import inquirer from "inquirer";
console.log("\n Hello!\n Welcome to Guessing Game");
const rn = Math.floor(Math.random() * 5 + 1);
const gn = await inquirer.prompt([
    {
        name: "guessno",
        type: "number",
        message: "\n Guess a number b/w 1-5: ",
    },
]);
if (gn.guessno === rn) {
    console.log("\n Wow you have guessed correct number");
}
else {
    console.log("\n Oh no! you have guessed wrong number. \n The correct number was " + rn);
}
const ques = await inquirer.prompt([
    {
        message: "\nDo you want to continue:\n1)If (Yes) press Enter\n2)If (No) press Ctrl+C ",
        type: "list",
        name: "cho",
        choices: ["Yes"],
    },
]);
while (ques.cho == "Yes") {
    const rn = Math.floor(Math.random() * 5 + 1);
    const gn = await inquirer.prompt([
        {
            name: "guessno",
            type: "number",
            message: "\n Guess a number b/w 1-5: ",
        },
    ]);
    if (gn.guessno === rn) {
        console.log("\n Wow you have guessed correct number");
    }
    else {
        console.log("\n Oh no! you have guessed wrong number. \n The correct number was " + rn);
    }
    const ques = await inquirer.prompt([
        {
            message: "\nDo you want to continue:\n1)If (Yes) press Enter\n2)If (No) press Ctrl+C",
            type: "list",
            name: "cho",
            choices: ["Yes"],
        },
    ]);
}
