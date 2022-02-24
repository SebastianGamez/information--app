class InformationProgram {

    constructor(){

        this._colors = require("colors");
        this._os = require("os");
        this._fs = require ("fs");
        this._cpus = this._os.cpus();
        this._totalmem = this._os.totalmem();
        this._freemem = this._os.freemem();
        this._type = this._os.type();
        this._network = this._os.networkInterfaces();

    }

    get os (){

        return this._os;

    }
    get fs (){

        return this._fs;

    }
    get cpus (){

        return this._cpus;

    }
    get totalmem (){

        return this._totalmem;

    }
    get freemem (){

        return this._freemem;

    }
    get type (){

        return this._type;

    }
    get network (){

        return this._network;

    }

    set colors (colors){

        this._colors = colors;

    }
    set fs (fs){

        this._fs = fs;

    }
    set cpus (cpus){

        this._cpus = cpus;

    }
    set totalmem (totalmem){

        this._totalmem = totalmem;

    }
    set freemem (freemem){

        this._freemem = freemem;

    }
    set type (type){

        this._type = type;

    }
    set network (network){

        this._network = network;

    }

    showRequeriment(arg){

        console.log("\Analyzing your petition..\n".italic.bold);
        
        setTimeout(() => {

            console.log("This will take a few moments...\n".italic.bold);

        }, 1000);
        
        setTimeout(() =>{
            
            if (arg == "cpu"){

                console.log(`
                MODEL: ${this.cpus[0].model}\n
                SPEED: ${this.cpus[0].speed} MHz\n`.brightGreen.bold
                );
    
            }
            else if (arg == "memory"){
    
                let totMem = this.totalmem / 1000000;
    
                let freeMem = this.freemem / 1000000; 
                
                let usedMem = totMem - freeMem;
                
                totMem = totMem.toFixed(2);
    
                freeMem = freeMem.toFixed(2);
    
                usedMem = usedMem.toFixed(2);
    
    
                
                console.log (`
                TOTAL MEMORY RAM: ${totMem}MB\n
                FREE MEMORY RAM: ${freeMem}MB\n
                USED MEMORY RAM: ${usedMem}MB\n
                `.brightGreen.bold);
    
            }
            else if (arg == "system"){
    
                console.log(`
                THEE OPERATIVE SYSTEM IS: ${this.type}\n
                `.brightGreen.bold);
    
            }
            else if (arg == "network"){
    
                console.log (`
                IP: ${this.network.lo[0].address}\n
                FAMILY: ${this.network.lo[0].family}\n
                MAC: ${this.network.lo[0].mac}\n
                `.brightGreen.bold);
    
            }
            else console.log(`
                \tOBJECT NO FOUND\n
                YOU NEED SPECIFY THE OBJECT TO WATCH('cpu', 'memory', 'system', 'network')\n
                `.yellow.bold)

        }, 2000);

    }

    createInformationFile (arg2){

        if(arg2 == "file"){

            console.log("\Analyzing your petition..\n".italic.bold);
        
            setTimeout(() => {

                console.log("This will take a few moments...\n".italic.bold);

            }, 1000);
            
            setTimeout (() => {

                let totMem = this.totalmem / 1000000;
        
                let freeMem = this.freemem / 1000000; 
                        
                let usedMem = totMem - freeMem;
                        
                totMem = totMem.toFixed(2);
            
                freeMem = freeMem.toFixed(2);
            
                usedMem = usedMem.toFixed(2);
            
                
                let data = `

                \tCPU INFORMATION\n
                MODEL: ${this.cpus[0].model}\n
                SPEED: ${this.cpus[0].speed} MHz\n

                \tMEMORY INFORMATION\n
                TOTAL MEMORY RAM: ${totMem}MB\n
                FREE MEMORY RAM: ${freeMem}MB\n
                USED MEMORY RAM: ${usedMem}MB\n

                \tSYSTEM INFORMATION\n
                THE OPERATIVE SYSTEM IS: ${this.type}\n

                \tNETWORK INFORMATION\n
                IP: ${this.network.lo[0].address}\n
                FAMILY: ${this.network.lo[0].family}\n
                MAC: ${this.network.lo[0].mac}\n
                `;
                
                this.fs.writeFile("info.txt", data, err => {

                    if (err) console.log(err);
                    else console.log(`
                        FILE CREATED SUCCESFULLY\n
                        `.brightGreen.bold);

                });

            }, 2000);

        }
        else console.log(`
            FOR USE THIS COMMAND PLEASE SPECIFY THE 'file' OBJECT\n
        `.red.bold);

    }

}

module.exports = InformationProgram;