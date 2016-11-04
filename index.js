const chalk = require("chalk");


var redbold = chalk.red.bold;
var bluebold = chalk.blue.bold;
var yellow = chalk.yellow
var yellowbold = chalk.yellow.bold;

var message = "Hello " + bluebold("Blue Hello") + " " + yellowbold("Yellow Bold");
console.log(message);