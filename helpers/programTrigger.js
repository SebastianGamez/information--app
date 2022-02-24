const InformationProgram = require("../informationProgram/index");

const programTrigger = (arg, arg2) => {

    const Program = new InformationProgram ();

    if (arg == "show") Program.showRequeriment(arg2);
    else if (arg == "create") Program.createInformationFile(arg2);
    else console.log(`
        PLEASE USE 'show' o 'create' COMMAND FOR RUN THE PROGRAM\n
    `.yellow.bold)

}

module.exports = programTrigger;