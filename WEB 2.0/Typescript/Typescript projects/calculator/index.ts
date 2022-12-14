#! /usr/bin/env node


import inquirer from "inquirer"; // uses for taking input in the form question or in simple way
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const calculator = () => {
  const wait = (sec: number = 2000) => {
    return new Promise((resolve) => setTimeout(resolve, sec));
  };

  const welcome = async function () {
    //welcome to the user
    const rainbow = chalkAnimation.rainbow("Welcome to my calculator CLI App"); //chalk animation start
    //waits 2000 seconds

    await wait();
    rainbow.stop();
    // console.log(`${chalk.magentaBright("HOW TO USE")} \n Enter The Numbers \n Then \n Select Operations`);
  };

  //takes the user input
  
  let firstNumber: number;
  let secondNumber: number;
  let operator: string;

  const askNumber = async function () {
    const num1 = await inquirer.prompt({
      name: "firstNumber",
      type: "number",
      message: "Enter first Number",
    });
    const num2 = await inquirer.prompt({
      name: "secondNumber",
      type: "number",
      message: "Enter second Number",
    });

    firstNumber = num1.firstNumber;
    secondNumber = num2.secondNumber;
  };

  const promptOperations = async function () {
    const operation = await inquirer.prompt({
      name: "operator",
      type: "list",
      message: "Select Operation:",
      choices: ["/", "*", "+", "-"],
    });

    operator = operation.operator;
  };

  const handleOperations = async function (operator: string) {
    let result;
    switch (operator) {
      case "/":
        result = firstNumber / secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;

      default:
        break;
    }

    console.log(chalk.blueBright(result));
  };

  //Continue calculation
  const continueCalc = async () => {
    const continueProcess = await inquirer.prompt({
      name: "again",
      type: "confirm",
      message: "Do you want to continue ?",
    });
    let userWantstoContinue: boolean = false;
    userWantstoContinue = continueProcess.again;

    if (userWantstoContinue) {
      await askNumber();
      await promptOperations();
      await handleOperations(operator);
      await continueCalc();
    } else {
      return;
    }
  };

  console.clear();

  const render = async () => {
    await welcome();
    await askNumber();
    await promptOperations();
    await handleOperations(operator);
    await continueCalc();
  };

  render();
};

calculator();
