const InformationProgram = require("../informationProgram/index");

const programTrigger = (arg, arg2) => {

    const Program = new InformationProgram ();

    if (arg == "show") Program.showRequeriment(arg2);
    else if (arg == "create") Program.createInformationFile(arg2);
    else console.log(`
        POR FAVOR USE EL COMANDO 'show' o 'create' PARA EJECUTAR EL PROGRAMA\n
    `.yellow.bold)

}

module.exports = programTrigger;