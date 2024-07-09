import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold `\n\t\t===={wellcome in MURTAZA ALI currency_convert machine}====\n`);
// define the currencies and their change rate.
let exchange_Rate = {
    "USD": 1, //base currency.
    "EUR": 0.9, //Europoan currency.
    "JYP": 113, //japenece currency.
    "CAD": 1.3, //canadian currency.
    "AUD": 1.65, //Australian currency.
    "PKR": 280, //Pakistani currency.
    //Add more currencies and their exchange rate hear
};
let user_input = await inquirer.prompt([
    {
        name: "from_currency",
        message: chalk.yellow("select a currency to convert from"),
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR",]
    },
    {
        name: "to_currency",
        message: chalk("select a currency to convert into"),
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR",]
    },
    {
        name: "amount",
        message: chalk.yellow("enter your amount to convertion"),
        type: "number"
    }
]);
let from_Currency = exchange_Rate[user_input.from_currency];
let to_Currency = exchange_Rate[user_input.to_currency];
let Amount = user_input.amount;
//formula of currency cupnvert.
let base_amount = Amount / from_Currency;
let converted_amount = base_amount * to_Currency;
console.log(chalk.green(`\n\tyour converted amount is:${converted_amount.toFixed(2)} `));
console.log(chalk.bgBlue("\n\tthank you for use MURTAZA ALI currency_convert machine"));
