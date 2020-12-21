const { strict } = require("assert");
const { executionAsyncId } = require("async_hooks");
const {exec} = require("child_process");
const { Console } = require("console");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

exports.startPing = (hostnameInfo) => {
    var command;
    command = "ping " + hostnameInfo;
    console.log("");
    console.log("Testando conexão com o hostname informado...");
    console.log("");
    exec(command, (error, stdout, stderr) => {
        if(error) {
            console.log("Não foi possível contatar o host informado.");
            return;
        }
        if(stderr){
            console.log("Não foi possível contatar o host informado.");
            return;
        }
        confirmInstall();
    });
}

confirmInstall = () => {
    console.log("");
    rl.question("Software selecionado e hostname online. Deseja prosseguir com a instalação? S/N \n", (answer) => {
      var thisAnswer = answer;
      rl.close();
    })
    rl.on('close', () => {
        if(thisAnswer == "s"){
            console.log("INICIANDO INSTALAÇÃO");
        }
        if(thisAnswer == "n"){
            console.log("INSTALAÇÃO CANCELADA");
        }else{
            console.log("Digite uma opção válida.");
        }
    })
}



