#! /usr/bin/env node

import inquirer from "inquirer"; // uses for taking input in the form question or in simple way
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const numberGuessingGame = async () => {
  const wait = (sec: number = 2000) => {
    // Wait for welcome message
    return new Promise((resolve) => setTimeout(resolve, sec));
  };

  const welcome = async function () {
    // Print welcome message
    //welcome to the user
    const rainbow = chalkAnimation.rainbow("Number guessing game !"); //chalk animation start
    await wait();
    rainbow.stop();
    const pulse = chalkAnimation.pulse("\tGame rules are given below : "); //chalk animation start
    await wait();
    pulse.stop();
    const karaoke = chalkAnimation.karaoke(
      "\t\tYou have to enter number between 1 to 10 for game playing or 0 for exit\n\t\tIf you will get more than 5 point, You won the match \n\t\tIf you will get 5 or less than 5 point you will loose the game"
    );
    await wait();
    karaoke.stop();
  };

  await welcome();

  let userNumber: number | null = null;

  const askNumber = async function () {
    const { num } = await inquirer.prompt({
      //destructuring used here
      name: "num",
      type: "number",
      message: "Enter any number between 1 t0 10 or 0 for exit",
      
    });
    if (num === 0 ) {
        console.log("num", num);
        return 0
    } else {        
        userNumber = num;
    }
  };

  await askNumber();

  let matchingNum: number;
  let counter: number = 0;

  for (let index = 0; index < 10; index++) {
    let zeroGuesser = await askNumber();
    if (zeroGuesser == 0) {
      return;
    }
    matchingNum = Math.round(Math.random() * 10);
    if (matchingNum === userNumber ) {
      counter++;
    }
  }
  if (counter > 5) {
    console.log(`Congratulations ! you won the game with ${counter} points`);
  } else {
    console.log(`Your Points: ${counter} \n Alas! you lose the game from ${5 - counter} points`);
  }
};

numberGuessingGame();
