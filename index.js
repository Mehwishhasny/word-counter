import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Please write the sentence."
    }
]);
const words = answers.Sentence.trim().split(" ");
console.log(words);
console.log(words.length);
