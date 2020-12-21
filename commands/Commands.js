class Commands{

static StartPing = () => {
    const {exec} = require("child_process");
    const readline = require("readline");
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    rl.question("Digite o Hostname da máquina (EX: LABRP-ELPT12345): \n", (hostname) => {
        hostname.toLowerCase();
        if(hostname.includes("labrp-elpt")){
            var command =  "ping " + hostname;
            console.log("");
            console.log("Testando conexão com o hostname informado... \n");
            exec(command, (error, stdout, stderr) => {
                if(error) {
                    console.log("Não foi possível contatar o host informado.");
                    this.StartPing()
                    return;
                }
                if(stderr){
                    console.log("Não foi possível contatar o host informado.");
                    this.StartPing();
                    return;
                }
            rl.question("Software selecionado e hostname online. Deseja prosseguir com a instalação? S/N \n", (answer) => {
                var thisAnswer = answer;
                if(thisAnswer == "s"){
                    console.log("INICIANDO INSTALAÇÃO");
                }
                if(thisAnswer == "n"){
                    console.log("INSTALAÇÃO CANCELADA");
                }else{
                console.log("Digite uma opção válida.");
            }
                rl.close();
              })
            });
        }else{
            console.log("Hostname inválido, tente novamente. \n");
            this.StartPing();
        }

    })
}

static confirmInstall = () => {
        if(input == "s"){
            console.log("INICIANDO INSTALAÇÃO");
        }
        if(input == "n"){
            console.log("INSTALAÇÃO CANCELADA");
        }
        console.log("Digite uma opção válida.");
        }

}

module.exports = Commands;