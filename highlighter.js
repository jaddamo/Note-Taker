const chalk = require('chalk');

//  RED
function red(text) {
    console.log(chalk.red(`${text}`));
}
function redBold(text) {
    console.log(chalk.red.bold(`${text}`));
}
function redBoldInv(text) {
    console.log(chalk.red.bold.inverse(`${text}`));
}

// GREEN
function green(text) {
    console.log(chalk.green(`${text}`));
}
function greenBold(text) {
    console.log(chalk.green.bold(`${text}`));
}

// YELLOW
function yellow(text) {
    console.log(chalk.yellow(`${text}`));
}
function yellowBold(text) {
    console.log(chalk.yellow.bold(`${text}`));
}

// BLUE
function blue(text) {
    console.log(chalk.blue(`${text}`));
}
function blueBold(text) {
    console.log(chalk.blue.bold(`${text}`));
}


// EXPORT
module.exports = 
{
    red: red,
    redBold: redBold,
    redBoldInv: redBoldInv,
    green: green,
    greenBold: greenBold,
    yellow: yellow,
    yellowBold: yellowBold,
    blue: blue,
    blueBold: blueBold

}