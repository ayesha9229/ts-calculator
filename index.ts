import inquirer from "inquirer";
let validationFunc = (input: any) => !isNaN(parseFloat(input));

let value = await inquirer.prompt([
    {
        name: "firstValue",
        message: "Enter first value: ",
        type: "number",
        validate: async (input:any) => validationFunc(input),
    },
    {
        name: "secondValue",
        message: "Enter second value: ",
        type: "number",
        validate: async (input:any) => validationFunc(input),
    },
    {
        name: "operator",
        message: "Select Operator: ",
        type: "list",
        choices: ['+','-','*','/']
    }
])

let result;

if(value.operator === '+') {
    result = parseInt(value.firstValue) + parseInt(value.secondValue);
}
else if(value.operator === '-') {
    result = parseInt(value.firstValue) - parseInt(value.secondValue);
}
else if(value.operator === '*') {
    result = parseInt(value.firstValue) * parseInt(value.secondValue);
}
else {
    result = parseInt(value.firstValue) / parseInt(value.secondValue);
}

console.log(`Result is ${result}`);

