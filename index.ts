import inquirer from "inquirer";

const answers :{
    Sentence : string;
} = await inquirer.prompt([
    {
      name: "Sentence",
      type: "input",
      message: "Please write the sentence."
    }
])

const words = answers.Sentence.trim().split(" ");

console.log(words);
console.log(words.length);