import inquirer from "inquirer";
// Questions & Answers from users.
let answers = await inquirer.prompt([
    { massage: "Enter your first number", type: "number", name: "firstNumber" },
    { massage: "Enter your second number", type: "number", name: "secondNumber" },
    {
        massage: "select any one from the list to perform operation",
        type: "list",
        name: "result",
        choices: ["addition", "subtraction", "multiplication", "division"],
    }
]);
// use of if-else.
if (answers.result === "addition") {
    console.log(answers.firstNumber + answers.secondNumber);
}
else if (answers.result === "subtraction") {
    console.log(answers.firstNumber - answers.secondNumber);
}
else if (answers.result === "multiplication") {
    console.log(answers.firstNumber * answers.secondNumber);
}
else if (answers.result === "division") {
    console.log(answers.firstNumber / answers.secondNumber);
}
else {
    console.log("Invalid Number");
}
