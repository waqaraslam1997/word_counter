#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\n<<== ") + chalk.green("Welcome to Word Counter Application!") + chalk.yellow(" ==>>\n"));

while (true) {
  let { answer } = await inquirer.prompt({
    type: "input",
    name: "answer",
    message: "Type & Hit Enter to count words!"
  });

  let result = answer.split(" ");
  let word = "word"
  if (result.length != 1) {
    word = "words"
  }
  console.log(chalk.yellow.bold("\nYour wrote " + result.length + ` ${word}\n` ));

  const { again } = await inquirer.prompt({
    type: "confirm",
    message: "Count again? ",
    default: true,
    name: "again",
  })
  if (!again) {
    console.log(chalk.bgBlueBright(chalk.white.bold(`\n== Stay Blessed & Good Bye! ==`)))
    break;
  }
}