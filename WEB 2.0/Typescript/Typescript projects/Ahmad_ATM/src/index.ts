#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { Account } from "./Account.js";
import { ATM } from "./atm-machine.js";
import { Transaction } from "./transection.js";

async function main() {
  const accounts: Account[] = [
    new Account(1000, "Alice", "123456", "password", []),
    new Account(2000, "Bob", "789012", "password", []),
  ];

  // Create an ATM instance
  const atm = new ATM(accounts, null, []);

  // Use inquirer to prompt the user for their account number and password
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "accountNumber",
      message: "Enter your account number:",
    },
    {
      type: "password",
      name: "password",
      message: "Enter your password:",
    },
  ]);
  const accountNumber: string = answers.accountNumber;
  const password: string = answers.password;

  // Log a user in
  const loginSuccessful: boolean = atm.login(accountNumber, password);
  if (loginSuccessful) {
    console.log("Login successful");

    // Define a list of available operations
    const operations: string[] = [
      "Check balance",
      "Make a withdrawal",
      "Make a deposit",
      "View transaction history",
    ];

    // Use inquirer to prompt the user to select an operation
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "operation",
        message: "Select an operation:",
        choices: operations,
      },
    ]);

    // Get the selected operation from the answers object
    const operation: string = answers.operation;

    // Use a switch statement to determine which operation to perform
    switch (operation) {
      case "Check balance":
        // Code to check the balance goes here
        const balance: number = atm.getBalance();
        console.log(`Current balance: ${balance}`);
        break;
      case "Make a withdrawal":
        // Use inquirer to prompt the user for the amount they want to withdraw
        const withdrawalAnswers = await inquirer.prompt([
          {
            type: "input",
            name: "amount",
            message: "Enter the amount you want to withdraw:",
          },
        ]);

        // Get the withdrawal amount from the answers object
        const withdrawalAmount: number = Number(withdrawalAnswers.amount);

        // Make a withdrawal
        const withdrawalSuccessful: boolean = atm.withdraw(withdrawalAmount);
        if (withdrawalSuccessful) {
          console.log("Withdrawal successful");
        } else {
          console.log("Withdrawal failed");
        }
        break;

      case "Make a deposit":
        // Use inquirer to prompt the user for the amount they want to deposit
        const depositAnswers = await inquirer.prompt([
          {
            type: "input",
            name: "amount",
            message: "Enter the amount you want to deposit:",
          },
        ]);

        // Get the deposit amount from the answers object
        const depositAmount: number = Number(depositAnswers.amount);
        // Make a deposit
        atm.deposit(depositAmount);
        console.log("Deposit successful");
        break;

        case 'View transaction history':
         // Check if the currentAccount property is not null
         if (atm.currentAccount) {
           // Retrieve the transaction history of the logged-in account
           const transactionHistory: Transaction[] = atm.currentAccount.getTransactionHistory();
       
           // Print the transaction history
           for (const transaction of transactionHistory) {
             console.log(transaction.getDetails());
           }
         } else {
           console.log('No account is logged in.');
         }
         break;
       
      default:
        console.log("Invalid operation selected");
        break;
    }

    // Log the user out
    atm.logout();
    console.log("Logged out");
  } else {
    console.log("Login failed");
  }
}

main();
