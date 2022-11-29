import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation";

const wait = (seconds = 2000) =>
  new Promise((resolve) => setTimeout(resolve, seconds));

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

let numberFirst: number;
let numberSecond: number;
let operator: string;

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

const handleOperations = async (operator: string) => {
  let total;
  if (operator === "(÷)Divide") {
    total = numberFirst / numberSecond;
  } else if (operator === "(x)Multiply") {
    total = numberFirst * numberSecond;
  } else if (operator === "(+)Add") {
    total = numberFirst + numberSecond;
  } else if (operator === "(-)Subtaract") {
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
  let userWantstoContinue: boolean = false;
  userWantstoContinue = continueProcess.again;

  if (userWantstoContinue) {
    await askNumber();
    await propmtOperations();
    await handleOperations(operator);
    await continueCalc();
  } else {
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




