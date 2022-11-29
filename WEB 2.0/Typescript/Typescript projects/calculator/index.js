// import chalk from "chalk";
// import chalkAnimation from 'chalk-animation';
// import inquirer from "inquirer";
// // import Choices from "inquirer/lib/objects/choices.js";
// const sleep = () => {
//     return new Promise((res) => {
//         setTimeout(res, 2000);
//     })
// }
// async function welcome() {
//     let rainbowTitle = chalkAnimation.rainbow('Lorem ipsum dolor sit amet');  //start
//     await sleep();  
//     rainbowTitle.stop();  //stop  
// }
// welcome();
// // // let operator ;
// // // let result ;
// // // inquirer
// // //   .prompt([
// // //     /* Pass your questions in here */
// // //     {
// // //         name: "operator",
// // //         type: "list",
// // //         message : "Enter operator",
// // //         choices: [
// // //             "+",
// // //             "-",
// // //             "*",
// // //             "/"
// // //         ]
// // //     }
// // //   ])
// // //   .then((op) => {
// // //     inquirer
// // //   .prompt([
// // //     /* Pass your questions in here */
// // //     {
// // //         name: "firstNumber",
// // //         type: "number",
// // //         message : "Enter first number => ",
// // //     }
// // //   ])
// // //   .then((num1) => {
// // //     result = num1.firstNumber op.operator  num1.firstNumber
// // //     // Use user feedback for... whatever!!
// // //   })
// // //   .catch((error) => {
// // //     if (error.isTtyError) {
// // //       // Prompt couldn't be rendered in the current environment
// // //     } else {
// // //       // Something else went wrong
// // //     }
// // //   });
// // //     // operator = op.operator;   //+
// // //     // switch (answers.operator) {
// // //     //     case "+":
// // //     //         break;
// // //     //     case "-":
// // //     //         break;
// // //     //     case "/":
// // //     //         break;
// // //     //     case "*":
// // //     //         break;
// // //     //     default:
// // //     //         break;
// // //     // }
// // //     // Use user feedback for... whatever!!
// // //   })
// // //   .catch((error) => {
// // //     if (error.isTtyError) {
// // //       // Prompt couldn't be rendered in the current environment
// // //       console.log(error.message)
// // //     } else {
// // //       // Something else went wrong
// // //       console.log(error)
// // //     }
// // //   });
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const wait = (seconds = 2000) => new Promise((resolve) => setTimeout(resolve, seconds));
const welcome = async function () {
    // welcomes the user
    // chalk animation starts
    const rainbow = chalkAnimation.rainbow("Welcome to the calculator App");
    // waits 2000 seconds
    await wait();
    rainbow.stop();
    console.log(`${chalk.magentaBright("HOW TO USE")}
  Enter the numbers
  Selct operation`);
};
// takes the user input
let numberFirst;
let numberSecond;
let operator;
const askNumber = async function () {
    const inputNmbrFirst = await inquirer.prompt({
        name: "numberFirst",
        type: "number",
        message: "Enter first number:",
    });
    numberFirst = inputNmbrFirst.numberFirst;
    const inputNmbrSecond = await inquirer.prompt({
        name: "numberSecond",
        type: "number",
        message: "Enter second number:",
    });
    numberSecond = inputNmbrSecond.numberSecond;
};
// handle the operations
const propmtOperations = async function () {
    // "/""x" ,"+", "-"
    const operation = await inquirer.prompt({
        name: "operator",
        type: "list",
        message: "select operation:",
        choices: ["(÷)Divide", "(x)Multiply", "(+)Add", "(-)Subtaract"],
    });
    operator = operation.operator;
};
// handle operations
const handleOperations = async (operator) => {
    let total;
    if (operator === "(÷)Divide") {
        total = numberFirst / numberSecond;
    }
    else if (operator === "(x)Multiply") {
        total = numberFirst * numberSecond;
    }
    else if (operator === "(+)Add") {
        total = numberFirst + numberSecond;
    }
    else if (operator === "(-)Subtaract") {
        total = numberFirst - numberSecond;
    }
    console.log(chalk.blue(total));
};
//Ask if the user wants to continue
const continueCalc = async function () {
    const continueProcess = await inquirer.prompt({
        name: "again",
        type: "confirm",
        message: "Do you want to continue?",
    });
    // this will return a boolean
    let userWantstoContinue = false;
    userWantstoContinue = continueProcess.again;
    if (userWantstoContinue) {
        await askNumber();
        await propmtOperations();
        await handleOperations(operator);
        await continueCalc();
    }
    else {
        return;
    }
};
//clears the console befor starting the app
console.clear();
const render = async function () {
    await welcome();
    await askNumber();
    await propmtOperations();
    await handleOperations(operator);
    await continueCalc();
};
render();
