import chalk from "chalk";
import * as chalkAnimation from 'chalk-animation';

const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    })
}

async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Lorem ipsum dolor sit amet');  //start

    await sleep();  
    rainbowTitle.stop();  //stop
}

welcome();