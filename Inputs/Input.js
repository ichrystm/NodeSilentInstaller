
class Input{
 
    static ReadSoftware = () => {
    var selectedSoftware;
    var selectedHost;
    const Softwares = require("../services/Softwares");
    const Commands = require("../commands/Commands");
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o número referente a opção desejada: \n", (option) => {
            if(isNaN(option) || option == ""){
                console.log("Digite um número válido. \n");
                rl.close();
                this.ReadSoftware()
            }else{
                var selectedSoftware = Softwares.RefSoftware(option);
                console.log(option);
                Commands.StartPing();
        }
    });
}

}

module.exports = Input;