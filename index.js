import inquirer from "inquirer";
const Result = await inquirer.prompt([
    {
        message: "Input First Number And Press Enter Key",
        type: "number",
        name: "FirstNumber",
    },
    {
        message: "Input Second Number And Press Enter Key",
        type: "number",
        name: "SecondNumber",
    },
    {
        message: "Select one of the operators to perform action and press Enter Key to get your Answer! ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
// conditional statement
if (Result.operator === "Addition") {
    console.log(Result.FirstNumber + Result.SecondNumber);
}
else if (Result.operator === "Subtraction") {
    console.log(Result.FirstNumber - Result.SecondNumber);
}
else if (Result.operator === "Multiplication") {
    console.log(Result.FirstNumber * Result.SecondNumber);
}
else if (Result.operator === "Division") {
    console.log(Result.FirstNumber / Result.SecondNumber);
}
;
