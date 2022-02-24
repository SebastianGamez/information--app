const programTrigger = require("./helpers/programTrigger");

const argument = process.argv[2].split("-")[0];
const argument2 = process.argv[2].split("-")[1];

programTrigger(argument, argument2);